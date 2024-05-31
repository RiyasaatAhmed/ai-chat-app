import { ChatTypingIndicator, TextInput } from "@/components";
import { Chat } from "@/app/chat";

export default function Home() {
  return (
    <main className="h-[calc(100vh-65px)] overflow-hidden relative">
      <Chat />
      <ChatTypingIndicator />
      <TextInput />
    </main>
  );
}
