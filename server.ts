import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import sgMail from "@sendgrid/mail";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Initialize SendGrid
  if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  // API routes
  app.post("/api/contact", async (req, res) => {
    console.log("Received contact form submission:", req.body);
    const { name, phone, email, interest, message } = req.body;

    if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_FROM_EMAIL) {
      console.error("Email configuration missing. Key:", !!process.env.SENDGRID_API_KEY, "Email:", process.env.SENDGRID_FROM_EMAIL);
      return res.status(500).json({ error: "Email configuration missing" });
    }

    const msg = {
      to: process.env.SENDGRID_FROM_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: `Novo Contacto: ${interest}`,
      text: `Nome: ${name}\nTelefone: ${phone}\nEmail: ${email}\nInteresse: ${interest}\nMensagem: ${message}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #f8f7f4; padding: 25px; text-align: center; border-bottom: 1px solid #e0e0e0;">
            <h2 style="color: #333; margin: 0; font-size: 22px;">Novo Contacto - Dra. Beleza</h2>
          </div>
          <div style="padding: 30px;">
            <p style="color: #555; font-size: 16px; margin-bottom: 20px;">Recebeu um novo contacto através do formulário do site:</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #333; font-weight: bold; width: 30%;">Nome:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #555;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">Telefone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #555;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #555;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #333; font-weight: bold;">Interesse:</td>
                <td style="padding: 12px; border-bottom: 1px solid #eee; color: #555;">${interest}</td>
              </tr>
            </table>
            <p style="margin-top: 25px; color: #333; font-weight: bold; font-size: 16px;">Mensagem:</p>
            <p style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border: 1px solid #eee; color: #555; line-height: 1.5;">${message || 'Sem mensagem adicional.'}</p>
          </div>
          <div style="background-color: #f8f7f4; padding: 15px; text-align: center; font-size: 12px; color: #888; border-top: 1px solid #e0e0e0;">
            Este email foi enviado automaticamente pelo formulário do site.
          </div>
        </div>
      `,
    };

    try {
      console.log("Attempting to send email via SendGrid...");
      await sgMail.send(msg);
      console.log("Email sent successfully!");
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("SendGrid error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
