import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookley - Simplifique sua prática clínica",
  description:
    "Plataforma completa para profissionais de saúde mental. Gerencie pacientes, agendamentos e prontuários em um só lugar.",
  keywords:
    "gestão consultório, agendamento psicólogo, prontuário digital, software para psicólogos, saúde mental",
  openGraph: {
    title: "Bookley - Simplifique sua prática clínica",
    description:
      "Plataforma completa para profissionais de saúde mental. Gerencie pacientes, agendamentos e prontuários em um só lugar.",
    url: "https://bookley.app",
    siteName: "Bookley",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bookley - Simplifique sua prática clínica",
    description:
      "Plataforma completa para profissionais de saúde mental.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
