import { Sequelize } from 'sequelize';
import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } from './constants';

const database = new Sequelize(DATABASE_NAME || "postgres", DATABASE_USERNAME || "postgres", DATABASE_PASSWORD || "postgres", {
    host: DATABASE_HOST || "database",
    dialect: 'postgres',
    logging: false
});

export async function authenticateDatabase() {
    try {
        await database.authenticate();
        console.log("Database authenticated");
    } catch (error) {
        console.log(error)
        console.log("Error authenticating database");
    }
}

export default database;