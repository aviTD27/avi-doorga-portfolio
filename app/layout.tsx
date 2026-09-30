import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://avidoorga.com"),
  title: "Avi Doorga — Full-Stack Developer (Java Spring Boot, Angular, React)",
  description:
    "Avi Doorga (Trithikraj Doorga), full-stack developer in the Paris area with 3+ years of experience in Java Spring Boot, Angular/React, PostgreSQL and CI/CD. MSc Software Engineering at EPITA. Available for an end-of-studies internship followed by a CDI.",
  keywords: [
    "Avi Doorga",
    "Trithikraj Doorga",
    "Full-Stack Developer",
    "Java Spring Boot",
    "Angular",
    "React",
    "EPITA",
    "stage de fin d'études",
    "Paris",
  ],
  openGraph: {
    title: "Avi Doorga — Full-Stack Developer",
    description:
      "Java Spring Boot • Angular / React • PostgreSQL • CI/CD. Available for an end-of-studies internship followed by a CDI.",
    url: "https://avidoorga.com",
    siteName: "Avi Doorga",
    images: ["/AviPic.jpeg"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-200 h-screen overflow-hidden">

        {/* FIXED HEADER */}
        <Header />

        {/* SCROLLABLE MIDDLE CONTENT */}
        <main className="pt-20 pb-20 h-full overflow-y-auto">
          {children}
        </main>

        {/* FIXED FOOTER */}
        <Footer />

      </body>
    </html>
  );
}