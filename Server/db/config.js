import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PWD,
    database: "Students",
});

export default db