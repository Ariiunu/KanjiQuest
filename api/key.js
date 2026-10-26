// The public half of the VAPID key pair; the app needs it to subscribe the phone.
// An empty answer means reminders aren't set up on this server.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ key: process.env.VAPID_PUBLIC_KEY || '' });
}
