import { PropsWithChildren } from "react";
import { MessageProvider } from "@/providers/messages-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MessageProvider>{children}</MessageProvider>
    </ThemeProvider>
  );
}
