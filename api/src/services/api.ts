const POCKETBASE_URL = process.env.POCKETBASE_URL || 'https://database.apps.brunowillian.com';

import { PocketBaseTS } from 'pocketbase-ts'
import type { Schema } from '../types/types';

export const api = new PocketBaseTS<Schema>(POCKETBASE_URL);