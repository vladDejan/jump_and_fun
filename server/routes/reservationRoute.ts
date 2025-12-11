import express, { Request, Response } from "express";
import Reservation from "../models/Reservation";
import nodemailer from "nodemailer";

// Korišćenje interfejsa iz modela za tipizaciju podataka u zahtevu
import ReservationAttributes from "../models/Reservation";

const router = express.Router();
// Debug log
console.log('=== GMAIL OAUTH2 DEBUG ===');
console.log('Email user exists:', !!process.env.EMAIL_USER);
console.log('Client ID exists:', !!process.env.GMAIL_CLIENT_ID);
console.log('Client Secret exists:', !!process.env.GMAIL_CLIENT_SECRET);
console.log('Refresh Token exists:', !!process.env.GMAIL_REFRESH_TOKEN);

// Konfigurisanje Nodemailer transportera sa OAuth2
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL_USER,
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  },
});

// Verifikacija transportera
transporter.verify((error, success) => {
  if (error) {
    console.error('Gmail transporter error:', error);
  } else {
    console.log('✅ Gmail transporter ready!');
  }
});

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


      console.log('=== EMAIL SENDING START ===');
      console.log('Recipient email:', email);

      try {
        const mailOptions = {
          from: process.env.EMAIL_USER, // jumpandfunserbia@gmail.com
          to: 'jumpandfunserbia@gmail.com',
          replyTo: email, // Email korisnika iz forme
          subject: 'Nova Rezervacija',
          html: htmlContent,
        };

        await transporter.sendMail(mailOptions);
        
        console.log('✅ Email sent successfully!');
      } catch (emailError) {
        console.error('❌ Email sending FAILED:');
        console.error('Error:', emailError);
      }

      console.log('=== EMAIL SENDING END ===');


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
