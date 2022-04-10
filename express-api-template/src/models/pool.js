import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
import { connectionString } from '../settings';
dotenv.config();

export const pool = new Pool({ connectionString });