import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NukloEmbedBridge } from "@/components/ui/NukloEmbedBridge";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Maderas Gavejo | Front CAPTURE Nuklo",
  description: "Front publico de Maderas Gavejo con enfoque comercial y tecnico para captacion de leads.",
  metadataBase: new URL("https://gavejo.nuklo.cloud")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={poppins.variable}>
        <NukloEmbedBridge />
        {children}
      </body>
    </html>
  );
}
