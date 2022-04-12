import { Sequelize } from 'sequelize';
import { connectionString, environmentName } from '../settings.js';

export const sequelize = environmentName === 'LOCAL' ? new Sequelize(connectionString) : new Sequelize(connectionString, {ssl: {rejectUnauthorized: false}});