import { config } from "dotenv";

config();

export const {
    DATABASE_HOST,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_NAME,
    SECRET_KEY
} = process.env