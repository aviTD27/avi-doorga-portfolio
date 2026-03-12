import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Avi Doorga — Portfolio",
  description: "Modern neon-themed developer portfolio.",
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
