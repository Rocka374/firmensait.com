import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, industry, message, turnstileToken } = body;

    const smtpKey = process.env.BREVO_API_KEY;

    if (!smtpKey) {
      return NextResponse.json(
        { error: 'Липсва SMTP ключ (BREVO_API_KEY)' }, 
        { status: 500 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Липсва защитен токен' }, { status: 400 });
    }

    // Конфигурация на SMTP транспорта
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false, // true за 465, false за 587
      auth: {
        user: "office@firmensait.com", // Вашият Brevo SMTP логин (обикновено имейлът на акаунта)
        pass: smtpKey, // Вашият Brevo SMTP ключ (xsmtpsib-...)
      },
    });

    // Изпращане на имейла
    await transporter.sendMail({
      from: `"Firmensait.com Form" <office@firmensait.com>`,
      to: "websika.com@gmail.com",
      subject: `Ново запитване от ${name} (${industry})`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #B8914F;">Ново съобщение от уебсайта:</h2>
          <p><strong>Име:</strong> ${name}</p>
          <p><strong>Имейл:</strong> ${email}</p>
          <p><strong>Бранш:</strong> ${industry}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Съобщение:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('SMTP грешка:', error);
    // Връщаме съобщението за грешка към клиента за диагностика
    return NextResponse.json({ error: `SMTP грешка: ${error.message}` }, { status: 500 });
  }
}