import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: {
    default: "Ram Kumar Thapa — Full Stack Software Engineer",
    template: "%s | Ram Kumar Thapa",
  },
  description:
    "Developer portfolio, beginner-friendly learning tracks and practical browser-based utilities.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
