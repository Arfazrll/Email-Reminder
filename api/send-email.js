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

    if (hour === 0) {
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
        background:#f3f4f6;
        padding:40px 16px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
    ">
        <div style="
        max-width:600px;
        margin:auto;
        background:#ffffff;
        border-radius:16px;
        box-shadow:0 10px 25px rgba(0,0,0,0.06);
        overflow:hidden;
        ">
        
        <!-- Header -->
        <div style="
            padding:28px 32px;
            border-bottom:1px solid #e5e7eb;
        ">
            <h1 style="
            margin:0;
            font-size:22px;
            font-weight:600;
            color:#111827;
            ">
            ${title}
            </h1>
            <p style="
            margin-top:6px;
            font-size:14px;
            color:#6b7280;
            ">
            A gentle reminder, just for you
            </p>
        </div>

        <!-- Content -->
        <div style="
            padding:32px;
            color:#1f2937;
            line-height:1.8;
            font-size:15px;
        ">
            ${message}

            <div style="
            margin-top:28px;
            padding:20px;
            background:#f9fafb;
            border-radius:12px;
            border:1px solid #e5e7eb;
            ">
            <p style="margin:0;">
                ${closing}
            </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="
            padding:24px 32px;
            border-top:1px solid #e5e7eb;
            font-size:13px;
            color:#6b7280;
        ">
            <p style="margin:0;">
            With care,<br/>
            <b style="color:#111827;">Azril</b>
            </p>
        </div>

        </div>
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
