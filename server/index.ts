//Uvozi Express framework za izgradnju web servera.
import express, { Request, Response } from "express";
//Cross-Origin Resource Sharing, omogucava komunikaciju sa frontom
import cors from "cors"
import db from "./models/index";//Config baze podataka
import reservationRoute from "./routes/reservationRoute";//Rute baze podataka
//Middleware za parsiranje JSON podataka iz HTTP zahteva.
import bodyParser from "body-parser";

import "./models/Reservation";

// Kreiranje Express aplikacije
const app = express();
const port: number = 5000;

// Omogućava CORS kako bi aplikacija bila dostupna iz različitih domena
app.use(cors({
  origin: ["https://jump-and-fun-auvq.vercel.app", "https://www.jumpandfun.rs", "http://localhost:5173"],
  credentials: true,
}));
app.use(bodyParser.json());

// Sinhronizuje modele sa bazom podataka
db.sync() // Neće brisati postojeće tabele prilikom pokretanja
  .then(() => {
    console.log("Connected to the Sequelize database successfully");
  })
  .catch((error: Error) => {
    console.error("Error connecting to Sequelize database:", error);
  });

// Proverava da li se može uspostaviti veza sa bazom.
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return db.sync();
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Testna ruta
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Koristi rute za rezervacije
app.use("/api/reservations", reservationRoute);

// Pokretanje servera
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});