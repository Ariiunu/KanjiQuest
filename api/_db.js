// Shared by the server functions: the subscription store (Upstash Redis, added from Vercel's
// Marketplace) and the push sender. Every phone that turned on the reminder is one entry in the
// "subs" hash, keyed by a hash of its push address.
import { Redis } from '@upstash/redis';
import webpush from 'web-push';
import { createHash } from 'node:crypto';

export const db = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN
});

export const idOf = endpoint => createHash('sha256').update(endpoint).digest('base64url').slice(0, 32);

export function push() {
  const site = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  webpush.setVapidDetails(process.env.VAPID_SUBJECT || (site ? 'https://' + site : 'https://github.com/Ariiunu/KanjiQuest'),
    process.env.VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY);
  return webpush;
}
