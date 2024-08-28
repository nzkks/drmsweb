'use server';

import { createTransport } from 'nodemailer';
import * as handlebars from 'handlebars';

import { contactTemplate } from '../templates/contact';

interface Data {
  username: string;
  email: string;
  message: string;
  token: string;
}

export async function sendContactForm(data: Data) {
  const human = await validateHuman(data.token);
  if (!human) {
    return { error: "It's a bot! ❤️ ❌ 🤖" };
  }

  const transporter = createTransport({
    port: 465,
    secure: true,
    host: process.env.CONTACT_FORM_HOST,
    auth: {
      user: process.env.CONTACT_FORM_SENDING_EMAIL,
      pass: process.env.CONTACT_FORM_SENDING_EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const body = await compileEmailTemplate(
      data.username,
      data.email,
      data.message,
    );

    await transporter.sendMail({
      from: `DRMSWeb Contact Form ${process.env.CONTACT_FORM_SENDING_EMAIL}`,
      replyTo: data.email,
      to: process.env.CONTACT_FORM_RECEIVING_EMAIL,
      subject: `${data.username} is contacting`,
      html: body,
    });

    return { success: true };
  } catch (err: any) {
    console.error(err);
    return { error: err?.response };
  }
}

async function validateHuman(token: string) {
  const secret =
    process.env.NODE_ENV !== 'production'
      ? (process.env.RECAPTCHA_LOCALHOST_SECRET_KEY as string)
      : (process.env.RECAPTCHA_SECRET_KEY as string);
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: 'POST',
    },
  );
  const data = await response.json();
  return data.success;
}

export async function compileEmailTemplate(
  username: string,
  email: string,
  message: string,
) {
  const template = handlebars.compile(contactTemplate);
  const htmlBody = template({
    username,
    email,
    message,
  });
  return htmlBody;
}
