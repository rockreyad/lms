"use server";
import { z } from "zod";

const convertKitFormId = process.env.CONVERTKIT_FORM_ID;
const convertKitApiKey = process.env.CONVERTKIT_API_KEY;

const convertKitFormSchema = z.object({
  email: z.string().email(),
  full_name: z.string().min(3, {
    message: "Please enter your full name.",
  }),
  message: z.string().min(1, {
    message: "Please enter your message.",
  }),
});

export async function subscribeConvertKit(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email");
    const full_name = formData.get("full_name");
    const message = formData.get("message");

    const parseData = convertKitFormSchema.parse({
      email,
      full_name,
      message,
    });
    const body = JSON.stringify({
      api_key: convertKitApiKey,
      email: parseData.email,
      fields: {
        full_name: parseData.full_name,
        message: parseData.message,
      },
    });
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }
    );
    const data = await response.json();
    if (data.error) {
      return {
        error: true,
        message: data.error.message,
        errors: null,
      };
    }
    return {
      error: false,
      message:
        "You're in! Thank you for subscribing. Please confirm it in your email.",
      errors: null,
    };
  } catch (e) {
    console.error(e);
    if (e instanceof z.ZodError) {
      return { error: true, message: null, errors: e.errors };
    }
    return {
      error: true,
      message:
        "Apologies, an error occurred. Failed to subscribe, please try again.",
      errors: null,
    };
  }
}
