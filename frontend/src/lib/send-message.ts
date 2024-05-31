"use server";

import { Message } from "@/typings/message";

export default async function sendMessage(messages: Message[]) {
  const response = await fetch(`${process.env.API_URL}/open-ai/send-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  });
  return response.json();
}
