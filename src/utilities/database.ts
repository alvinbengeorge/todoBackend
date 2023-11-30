import { Sequelize } from 'sequelize';

const database = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'postgres',
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