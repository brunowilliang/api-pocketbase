import PocketBase from 'pocketbase';

// Use environment variable or fallback to production URL
const POCKETBASE_URL = process.env.POCKETBASE_URL || 'https://api.apps.brunowillian.com';

export const api = new PocketBase(POCKETBASE_URL);