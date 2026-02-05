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

    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
    );
    const hour = now.getHours();

    let title = "";
    let message = "";
    let closing = "";

    if (hour === 8) {
      title = "Good Morning Bububbb";
      message = `
        <p>Alloww Good morning, <b>Ndaaa Cantik</b>.</p>
        <p>This is a gentle reminder to take your <b>Morning Medicine</b>.</p>
        <p>Hope today goes smoothly and brings you calm moments, Semangat ya!</p>
      `;
      closing = "Have a great day Bubub. I love you always and more.";
    } else if (hour === 16) {
      title = "Good Afternoon Bububbb";
      message = `
        <p>Hiii, <b>Ndaaa Sayang</b>.</p>
        <p>A small reminder again to take your <b>Afternoon Medicine</b>.</p>
        <p>Please take a moment to rest if you need it. Tolong Kabari Aku ya!</p>
      `;
      closing = "Have a nice day Cantik. I love you always and more.";
    } else if (hour === 20) {
      title = "Good Evening Bububbb";
      message = `
        <p>Hii, Hallow last Reminder, <b>Bububbb</b>.</p>
        <p>Before you rest, please remember to take your <b>Night Medicine</b>.</p>
        <p>You did well today, Im so proud of you sayang.</p>
      `;
      closing = "I love you, always and more.";
    } else {
      return res.status(200).json({ skipped: true });
    }

    const html = `
      <div style="
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
        background:#ffffff;
        color:#1f2937;
        max-width:600px;
        margin:auto;
        padding:24px;
        line-height:1.7;
      ">
        <h2 style="font-weight:600; margin-bottom:16px;">${title}</h2>

        ${message}

        <hr style="margin:28px 0; border:none; border-top:1px solid #e5e7eb"/>

        <p style="margin-top:12px;">${closing}</p>

        <p style="margin-top:24px; font-size:14px; color:#6b7280;">
          With care,<br/>
          <b>Azril</b>
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Azril" <${process.env.SMTP_USER}>`,
      to: "afifah6565@gmail.com",
      subject: "A gentle reminder to take your medicine love",
      html
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
