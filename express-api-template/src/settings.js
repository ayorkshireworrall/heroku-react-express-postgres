import dotenv from 'dotenv';
dotenv.config();
export const environmentName = process.env.ENVIRONMENT_NAME;
export const connectionString = process.env.CONNECTION_STRING;