import dotenv from 'dotenv';

dotenv.config();
export const environmentName = process.env.ENVIRONMENT_NAME;
export const connectionString = process.env.CONNECTION_STRING;
export const frontEndURL = process.env.FRONT_END_URL;
export const initTestData = process.env.INIT_TEST_DATA === 'true'
export const databaseLogging = process.env.DATABASE_LOGGING === 'true'
