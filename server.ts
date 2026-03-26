import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Initialize Resend
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

  // API routes
  app.post("/api/contact", async (req, res) => {
    const { name, phone, email, interest, message } = req.body;

    if (!resend || !process.env.RESEND_FROM_EMAIL) {
      return res.status(500).json({ error: "Email configuration missing" });
    }

    try {
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL,
        to: process.env.RESEND_FROM_EMAIL,
        subject: `Novo Contacto: ${interest}`,
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
      });
      res.status(200).json({ success: true });
    } catch (error: any) {
      console.error("Resend error:", error);
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
