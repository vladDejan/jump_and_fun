import express, { Request, Response } from "express";
import Reservation from "../models/Reservation";
import { Resend } from "resend";

// Korišćenje interfejsa iz modela za tipizaciju podataka u zahtevu
import ReservationAttributes from "../models/Reservation";

const router = express.Router();
// ← DODAJ OVO ZA DEBUG:
console.log('=== RESEND DEBUG ===');
console.log('API Key exists:', !!process.env.RESEND_API_KEY);
console.log('API Key first 10 chars:', process.env.RESEND_API_KEY?.substring(0, 10));
console.log('All env keys:', Object.keys(process.env).filter(k => k.includes('RESEND')));

const resend = new Resend(process.env.RESEND_API_KEY);

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
console.log('Resend API Key exists:', !!process.env.RESEND_API_KEY);
console.log('Recipient email:', email);

try {
  const emailResult = await resend.emails.send({
    from: 'noreply@send.jumpandfun.rs',
    to: 'jumpandfunserbia@gmail.com',
    replyTo: email,
    subject: 'Nova Rezervacija',
    html: htmlContent,
  });
  
  console.log('✅ Email sent successfully!');
  console.log('Email result:', JSON.stringify(emailResult, null, 2));
} catch (emailError) {
  console.error('❌ Email sending FAILED:');
  console.error('Error:', emailError);
  console.error('Error details:', JSON.stringify(emailError, null, 2));
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
