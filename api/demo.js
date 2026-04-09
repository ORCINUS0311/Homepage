import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, phone, email, message } = req.body;

  // 텔레그램 알림
  const telegramText = `🐋 새 데모 신청!\n\n` +
    `👤 이름: ${name}\n` +
    `🏢 회사: ${company}\n` +
    `📞 전화: ${phone || '미입력'}\n` +
    `📧 이메일: ${email}\n` +
    `💬 메시지: ${message || '없음'}`;

  const telegramPromise = fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramText,
      }),
    }
  ).catch((err) => console.error('Telegram failed:', err));

  // 이메일 알림
  const resend = new Resend(process.env.RESEND_API_KEY);
  const emailPromise = resend.emails.send({
    from: 'Orcinus <support@orcaorcinus.com>',
    to: 'support@orcaorcinus.com',
    subject: `[데모 신청] ${company} - ${name}`,
    html: `<h2>새 데모 신청</h2>
      <p><strong>이름:</strong> ${name}</p>
      <p><strong>회사:</strong> ${company}</p>
      <p><strong>전화:</strong> ${phone || '미입력'}</p>
      <p><strong>이메일:</strong> ${email}</p>
      <p><strong>메시지:</strong> ${message || '없음'}</p>`,
  }).catch((err) => console.error('Email failed:', err));

  await Promise.all([telegramPromise, emailPromise]);

  return res.status(200).json({ success: true });
}
