import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maderas Gavejo | Proyectos en madera premium",
  description: "Landing CAPTURE para cotizar proyectos de madera a medida con Maderas Gavejo.",
  metadataBase: new URL("https://gavejo.nuklo.cloud"),
  openGraph: {
    title: "Maderas Gavejo",
    description: "Madera seleccionada, acabados premium y asesoria para proyectos residenciales y comerciales.",
    url: "https://gavejo.nuklo.cloud",
    siteName: "Maderas Gavejo",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
