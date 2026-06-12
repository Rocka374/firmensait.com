import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, industry, message, turnstileToken } = body;

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Missing security token' }, { status: 400 });
    }

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': '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',
      },
      body: JSON.stringify({
        sender: { name: "Firmensait.com Form", email: "office@firmensait.com" },
        to: [{ email: "websika.com@gmail.com", name: "Admin" }],
        subject: `Ново запитване от ${name} (${industry})`,
        htmlContent: `
          <h3>Ново съобщение от уебсайта:</h3>
          <p><strong>Име:</strong> ${name}</p>
          <p><strong>Имейл:</strong> ${email}</p>
          <p><strong>Бранш:</strong> ${industry}</p>
          <p><strong>Съобщение:</strong><br/>${message}</p>
        `,
        replyTo: { email: email, name: name }
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}