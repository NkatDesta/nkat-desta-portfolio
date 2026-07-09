import emailjs from "@emailjs/browser";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

type EmailJsError = {
  status?: number;
  text?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getEmailJsConfig(): EmailJsConfig {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
    );
  }

  return { serviceId, templateId, publicKey };
}

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name.trim(),
        from_email: data.email.trim(),
        message: data.message.trim(),
        name: data.name.trim(),
        email: data.email.trim(),
      },
      publicKey
    );
  } catch (error) {
    const err = error as EmailJsError;
    const status = err?.status ? ` (status ${err.status})` : "";
    const text = err?.text ? ` ${err.text}` : "";

    throw new Error(
      `Failed to send message via EmailJS${status}.${text}`.trim(),
    );
  }
}
