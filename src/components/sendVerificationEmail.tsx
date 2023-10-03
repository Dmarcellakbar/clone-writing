const mailgun = require('mailgun-js');

export default async function sendVerificationEmail(
  toEmail: any,
  verificationCode: any
) {
  const apiKey = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const mg = mailgun({ apiKey, domain });

  const data = {
    from: 'dickymarcellinoakbar@gmail.com',
    to: toEmail,
    subject: 'Verifikasi Email',
    html: `<p>Kode verifikasi Anda: <strong>${verificationCode}</strong></p>`,
  };

  try {
    await mg.messages().send(data);
    console.log('Email verifikasi terkirim');
  } catch (error) {
    console.error('Gagal mengirim email verifikasi', error);
  }
}
