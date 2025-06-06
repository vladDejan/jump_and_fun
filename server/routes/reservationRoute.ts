import express, { Request, Response } from "express";
import Reservation from "../models/Reservation";
import nodemailer from "nodemailer";

// Korišćenje interfejsa iz modela za tipizaciju podataka u zahtevu
import ReservationAttributes from "../models/Reservation";

const router = express.Router();

router.post(
  "/submit",
  async (req: Request<{}, {}, ReservationAttributes>, res: Response) => {
    try {
      const {
        name,
        email,
        phone,
        city,
        variant,
        date,
        decorations,
        specialRequests,
      } = req.body;

       await Reservation.create({
    name,
    email,
    phone,
    city,
    variant,
    date,
    decorations,
    specialRequests,
  });

      const formattedDate = new Date(date).toLocaleDateString("sr-RS", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Pogledaj rezervaciju:</h2>
        <p><strong>Ime i prezime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Grad:</strong> ${city}</p>
        <p><strong>Program:</strong> ${variant}</p>
        <p><strong>Dekoracije:</strong> ${decorations ? "Da" : "Ne"}</p>
        <p><strong>Datum:</strong> ${formattedDate}</p>
        ${
          specialRequests
            ? `<p><strong>Posebni zahtevi:</strong> ${specialRequests}</p>`
            : ""
        }
      </div>
    `;

      // Konfigurisanje Nodemailer transportera
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // Ispravljen key za lozinku
        },
      });

      // Opcije za slanje email-a
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "dejanvladimirov@gmail.com",
        subject: "Nova Rezervacija",
        html: htmlContent,
      };

      // Slanje email-a
      await transporter.sendMail(mailOptions);

      res.status(201).json({
        message:
          "Rezervacija uspešno sačuvana i poslata, očekujte odgovor u što bržem vremenskom periodu.",
      });
      console.log("POST /submit primljen zahtev");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Greška prilikom obrade zahteva." });
    }
  }
);

export default router;
