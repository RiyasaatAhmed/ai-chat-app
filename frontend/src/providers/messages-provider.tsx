"use client";

import sendMessage from "@/lib/send-message";
import { Message as MessageType } from "@/typings/message";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type Message = {
  messages: MessageType[];
  setMessages: (messages: MessageType) => void;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const defaultMessage: Message = {
  messages: [],
  setMessages: () => {},
  loading: false,
  setLoading: () => {},
};

const MessageContext = createContext<Message>(defaultMessage);

export const useMessages = () => useContext(MessageContext);

export const MessageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [messages, setMessagesBase] = useState<MessageType[]>([]);
  const [loading, setLoadingBase] = useState<boolean>(false);

  const setLoading = useCallback((value: boolean) => {
    setLoadingBase(value);
  }, []);

  const setMessages = useCallback(
    async (message: MessageType) => {
      setMessagesBase((prev) => [...prev, message]);
      setLoading(true);
      const response = await sendMessage([...messages, message]);
      setMessagesBase((prev) => [...prev, response?.choices[0]?.message]);
      setLoading(false);
    },
    [messages, setLoading]
  );

  return (
    <MessageContext.Provider
      value={useMemo(() => {
        return { messages, setMessages, loading, setLoading };
      }, [messages, setMessages, loading, setLoading])}
    >
      {children}
    </MessageContext.Provider>
  );
};
