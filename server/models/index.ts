import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Omogućava sigurnost, da ne moze bilo pristupiti.
dotenv.config();

// Kreiranje Sequelize instance sa tipovima (podaci iz .env fajla)
const db = new Sequelize(
  process.env.DB_NAME || "jumpandfun",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "22djema22",
  {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "3306", 10),
    dialect: "mysql",
    logging: false, // Isključi logovanje SQL upita (opciono)
  }
);

// Proveri povezivanje
db.authenticate()
  .then(() => console.log('Connection to the database established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

export default db;
