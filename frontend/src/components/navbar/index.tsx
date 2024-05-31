import Link from "next/link";
import { Separator } from "@/components/ui";
import { ThemeToggle } from "@/components";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50  dark:bg-black bg-white">
      <div className="container flex items-center h-16">
        <nav className="flex-1 flex justify-between items-center">
          <Link href="/">aiChatApp.io</Link>
          <ThemeToggle />
        </nav>
      </div>
      <Separator orientation="horizontal" />
    </header>
  );
}
