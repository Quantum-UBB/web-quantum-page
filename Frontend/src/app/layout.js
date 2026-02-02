import { Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

export const metadata = {
  title: "Quantum Web | Future Architecture",
  description: "Una arquitectura escalable y moderna para tu próximo proyecto web.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${orbitron.className} ${orbitron.variable} antialiased`}>
        <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-60"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900/40"></div>
        </div>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

