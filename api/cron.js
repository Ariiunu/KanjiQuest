// The daily reminder. Called every hour by GitHub Actions (.github/workflows/recordatorio.yml) and
// once a day by Vercel Cron as a fallback. Each phone gets at most one reminder a day, once its
// chosen hour has passed in its own time zone, and only if the student hasn't studied today.
import { db, push } from './_db.js';

const LV = { kana: 'kana', n5: 'N5', n4: 'N4' };

function local(tz, t) {
  const d = new Date(t);
  return {
    date: d.toLocaleDateString('sv-SE', { timeZone: tz }),
    hour: +new Intl.DateTimeFormat('en-US', { timeZone: tz, hour: 'numeric', hourCycle: 'h23' }).format(d)
  };
}

function message(u, now, yesterday) {
  const due = u.dues.filter(m => m * 6e4 <= now).length, lv = LV[u.lv];
  const rev = due === 1 ? '1 repaso' : due + ' repasos';
  if (u.streak >= 2 && u.last === yesterday)
    return { title: `Tu racha de ${u.streak} días te espera`, body: due ? `Tienes ${rev} de ${lv}. Con unos minutos la mantienes.` : 'Haz una lección corta y no la pierdas.' };
  if (due) return { title: `Tienes ${rev} de ${lv} hoy`, body: 'Repasar a tiempo es lo que hace que no se te olviden.' };
  return { title: 'Un ratito de japonés', body: 'Tu próxima lección te espera. Con cinco minutos basta.' };
}

export default async function handler(req, res) {
  if (!process.env.CRON_SECRET || req.headers.authorization !== 'Bearer ' + process.env.CRON_SECRET) return res.status(401).end();
  const all = (await db.hgetall('subs')) || {}, now = Date.now(), wp = push();
  let sent = 0, gone = 0;
  for (const [id, u] of Object.entries(all)) {
    const t = local(u.tz, now), yesterday = local(u.tz, now - 864e5).date;
    if (t.hour < u.hour || u.last === t.date || u.sent === t.date) continue;
    try {
      await wp.sendNotification(u.sub, JSON.stringify({ ...message(u, now, yesterday), url: './' }), { TTL: 6 * 3600 });
      await db.hset('subs', { [id]: { ...u, sent: t.date } });
      sent++;
    } catch (e) {
      // 404/410: the phone uninstalled the app or turned off notifications
      if (e.statusCode === 404 || e.statusCode === 410) { await db.hdel('subs', id); gone++; }
    }
  }
  res.status(200).json({ sent, gone, total: Object.keys(all).length });
}
