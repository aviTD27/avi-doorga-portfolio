import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://avidoorga.com"),
  title: "Avi Doorga — Full-Stack Developer (Java Spring Boot, Angular, React)",
  description:
    "Avi Doorga (Trithikraj Doorga), full-stack developer in the Paris area with 3+ years of experience in Java Spring Boot, Angular/React, PostgreSQL and CI/CD. MSc Software Engineering at EPITA. Available immediately for a CDI, with the first 6 months as an end-of-studies internship.",
  keywords: [
    "Avi Doorga",
    "Trithikraj Doorga",
    "Full-Stack Developer",
    "Développeur Full-Stack",
    "Java Spring Boot",
    "Angular",
    "React",
    "EPITA",
    "CDI",
    "stage de fin d'études",
    "Paris",
  ],
  openGraph: {
    title: "Avi Doorga — Full-Stack Developer",
    description:
      "Java Spring Boot • Angular / React • PostgreSQL • CI/CD. Available immediately for a CDI (first 6 months as end-of-studies internship).",
    url: "https://avidoorga.com",
    siteName: "Avi Doorga",
    images: ["/AviPic.jpeg"],
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    type: "website",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-200 antialiased`}>
        <LanguageProvider>
          <Header />
          <main className="pt-16 px-6">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}