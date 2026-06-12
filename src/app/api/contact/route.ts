import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, industry, message, turnstileToken } = body;

    const brevoApiKey = process.env.BREVO_API_KEY;

    if (!brevoApiKey) {
      return NextResponse.json(
        { error: 'Липсва API ключ в системните променливи (BREVO_API_KEY)' }, 
        { status: 500 }
      );
    }

    if (!turnstileToken) {
      return NextResponse.json({ error: 'Липсва Turnstile токен' }, { status: 400 });
    }

    // Изпращане към Brevo
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': brevoApiKey,
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

    const responseData = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Brevo API грешка:', responseData);
      // Връщаме конкретната грешка от Brevo към клиента за по-лесно дебъгване
      return NextResponse.json({ 
        error: `Brevo грешка: ${responseData.message || 'Неизвестна грешка'}`,
        code: responseData.code 
      }, { status: response.status });
    }
  } catch (error: any) {
    console.error('Contact API критична грешка:', error);
    return NextResponse.json({ error: `Критична грешка: ${error.message}` }, { status: 500 });
  }
}