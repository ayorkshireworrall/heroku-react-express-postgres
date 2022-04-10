import pkg from 'pg';
import dotenv from 'dotenv';
import { connectionString, environmentName } from '../settings.js';

const { Pool } = pkg;
dotenv.config();

export const pool = environmentName === 'LOCAL' ? new Pool({ connectionString }) : new Pool({ connectionString, ssl: {rejectUnauthorized: false} });
