import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const hour = new Date().getHours();
    let message = "";

    if (hour === 9) {
      message = `
        <p>Selamat pagi sayang ☀️</p>
        <p>Jangan lupa <b>minum obat</b> ya sebelum mulai aktivitas 💊</p>
        <p>Aku doain kamu sehat selalu 🤍</p>
      `;
    } else if (hour === 16) {
      message = `
        <p>Halo sayang 🤍</p>
        <p>Ini pengingat kecil dari aku, waktunya <b>minum obat sore</b> 💊</p>
        <p>Kalau capek, istirahat sebentar ya.</p>
      `;
    } else if (hour === 20) {
      message = `
        <p>Selamat malam sayang 🌙</p>
        <p>Jangan lupa <b>minum obat malam</b> sebelum tidur 💊</p>
        <p>Aku bangga sama kamu hari ini 🤍</p>
      `;
    }

    const html = `
      <div style="font-family:Arial; line-height:1.7; color:#1f2937">
        <h2>Untuk Afifah 💙</h2>
        ${message}
        <p style="margin-top:20px">
          Dengan sayang,<br/>
          <b>Azril</b>
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Azril 🤍" <${process.env.SMTP_USER}>`,
      to: "afifah6565@gmail.com",
      subject: "Pengingat Minum Obat 💊",
      html
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
