"use client";

import { ChatTypingIndicator } from "@/components/chat-typing-indicator";
import { useMessages } from "@/providers/messages-provider";

export function Chat() {
  const { messages, loading } = useMessages();

  return (
    <div className="h-[calc(100vh-64px-120px)]  my-8 overflow-y-scroll container">
      {messages?.map(({ role, content }, index) => (
        <div
          className={`mb-4 ${
            role === "user" ? "flex flex-row-reverse gap-4" : "flex gap-4"
          }`}
          key={index}
        >
          <div className="relative  ml-3 text-sm dark:bg-zinc-900 py-2 px-4 shadow rounded-xl w-fit max-w-[85%]">
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}
