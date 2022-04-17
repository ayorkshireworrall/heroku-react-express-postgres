import { Sequelize } from 'sequelize';
import { connectionString, environmentName, databaseLogging } from '../settings.js';

const options = environmentName === 'LOCAL' ? 
{
    logging: databaseLogging
} :
{
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
    logging: databaseLogging
}

export const sequelize = new Sequelize(connectionString, options);