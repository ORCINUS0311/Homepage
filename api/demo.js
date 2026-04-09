import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, phone, email, message } = req.body;

  // 텔레그램 알림
  const telegramText = `데모 신청\n\n` +
    `이름: ${name}\n` +
    `회사: ${company}\n` +
    `전화: ${phone || '미입력'}\n` +
    `이메일: ${email}\n` +
    `메시지: ${message || '없음'}`;

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
    html: `
      <div style="max-width:520px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#222;">
        <div style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);border-radius:12px 12px 0 0;padding:28px 32px;">
          <div style="font-size:22px;font-weight:700;color:#67e8f9;">🐋 Orca 데모 신청</div>
          <div style="font-size:13px;color:#94a3b8;margin-top:6px;">${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</div>
        </div>
        <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:28px 32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:14px 0;color:#64748b;width:80px;vertical-align:top;">이름</td>
              <td style="padding:14px 0;font-weight:600;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:14px 0;color:#64748b;vertical-align:top;">회사</td>
              <td style="padding:14px 0;font-weight:600;">${company}</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:14px 0;color:#64748b;vertical-align:top;">연락처</td>
              <td style="padding:14px 0;font-weight:600;">${phone || '미입력'}</td>
            </tr>
            <tr style="border-bottom:1px solid #f1f5f9;">
              <td style="padding:14px 0;color:#64748b;vertical-align:top;">이메일</td>
              <td style="padding:14px 0;font-weight:600;"><a href="mailto:${email}" style="color:#0ea5e9;text-decoration:none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:14px 0;color:#64748b;vertical-align:top;">메시지</td>
              <td style="padding:14px 0;font-weight:600;">${message || '없음'}</td>
            </tr>
          </table>
        </div>
        <div style="text-align:center;padding:16px 0;font-size:12px;color:#94a3b8;">
          이 메일은 <a href="https://orcaorcinus.com" style="color:#94a3b8;">orcaorcinus.com</a> 데모 신청 폼에서 자동 발송되었습니다.
        </div>
      </div>`,
  }).catch((err) => console.error('Email failed:', err));

  await Promise.all([telegramPromise, emailPromise]);

  return res.status(200).json({ success: true });
}
