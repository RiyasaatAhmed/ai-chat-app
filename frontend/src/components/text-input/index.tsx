"use client";
import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import { VscSend as SendIcon } from "react-icons/vsc";
import { Button, Input } from "@/components/ui";
import { useMessages } from "@/providers/messages-provider";

export function TextInput() {
  const { setMessages } = useMessages();
  const [message, setMessage] = useState("");

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }, []);

  const onSend = useCallback(() => {
    setMessages({ role: "user", content: message });
    setMessage("");
  }, [message, setMessages]);

  const onEnterPress = useCallback(
    async (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSend();
      }
    },
    [onSend]
  );

  return (
    <>
      <div className="container sticky bottom-8 z-50">
        <Input
          type="text"
          placeholder="Message"
          className="max-w-[1400px]"
          value={message}
          onChange={onChange}
          onKeyDown={onEnterPress}
        />
        <Button
          variant="ghost"
          className="m-auto float-end -mt-[35px] mr-[1px] h-[34px] active:bg-gray-200 dark:active:bg-zinc-900"
          onClick={onSend}
        >
          <SendIcon className="cursor-pointer" />
        </Button>
      </div>
    </>
  );
}
