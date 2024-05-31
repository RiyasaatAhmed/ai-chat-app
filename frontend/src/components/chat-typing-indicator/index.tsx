"use client";
import { ReactElement } from "react";
import { useMessages } from "@/providers/messages-provider";
import "./style.css";
export function ChatTypingIndicator(): ReactElement | null {
  const { loading } = useMessages();
  if (loading) {
    return (
      <div className="typingIndicatorContainer container">
        <div className="typingIndicatorBubble">
          <div className="typingIndicatorBubbleDot"></div>
          <div className="typingIndicatorBubbleDot"></div>
          <div className="typingIndicatorBubbleDot"></div>
        </div>
      </div>
    );
  }
  return null;
}
