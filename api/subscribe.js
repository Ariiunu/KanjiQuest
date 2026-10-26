// POST: saves (or refreshes) a phone's reminder: its push address, the chosen hour and how the
// student is doing, so the daily run can skip whoever already studied. DELETE: turns it off.
import { db, idOf } from './_db.js';

const LV = ['kana', 'n5', 'n4'];
const isDate = s => typeof s === 'string' && /^(\d{4}-\d{2}-\d{2})?$/.test(s);

export default async function handler(req, res) {
  const b = req.body || {};
  if (req.method === 'DELETE') {
    if (typeof b.endpoint !== 'string') return res.status(400).json({ error: 'endpoint' });
    await db.hdel('subs', idOf(b.endpoint));
    return res.status(200).json({ ok: true });
  }
  if (req.method !== 'POST') return res.status(405).end();
  const s = b.sub || {};
  let tz = 'UTC';
  try { if (typeof b.tz === 'string' && b.tz.length < 64) { new Intl.DateTimeFormat('en', { timeZone: b.tz }); tz = b.tz; } } catch (e) {}
  const ok = typeof s.endpoint === 'string' && s.endpoint.startsWith('https://') && s.endpoint.length < 1000 &&
    s.keys && typeof s.keys.p256dh === 'string' && typeof s.keys.auth === 'string' &&
    Number.isInteger(b.hour) && b.hour >= 0 && b.hour <= 23 && LV.includes(b.lv) && isDate(b.last) &&
    Array.isArray(b.dues) && b.dues.length <= 3000 && b.dues.every(Number.isFinite);
  if (!ok) return res.status(400).json({ error: 'datos' });
  const id = idOf(s.endpoint), old = (await db.hget('subs', id)) || {};
  await db.hset('subs', { [id]: {
    sub: { endpoint: s.endpoint, keys: { p256dh: s.keys.p256dh, auth: s.keys.auth } },
    hour: b.hour, tz, lv: b.lv, last: b.last, streak: Math.max(0, Math.min(9999, b.streak | 0)),
    dues: b.dues, sent: old.sent || ''
  } });
  res.status(200).json({ ok: true });
}
