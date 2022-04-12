import { Sequelize } from 'sequelize';
import { connectionString, environmentName } from '../settings.js';

export const sequelize = environmentName === 'LOCAL' ? 
    new Sequelize(connectionString) : 
    new Sequelize(connectionString, {
        dialectOptions: {
            ssl: {
                require: true, // This will help you. But you will see nwe error
                rejectUnauthorized: false // This line will fix new error
            }
        }
    });