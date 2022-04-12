import { Sequelize } from 'sequelize';
import { connectionString } from '../settings.js';

export const sequelize = new Sequelize(connectionString);