import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappButton } from "@/components/whatsapp-button";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Betterment",
  description: "Antimigrañas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <WhatsappButton />
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
