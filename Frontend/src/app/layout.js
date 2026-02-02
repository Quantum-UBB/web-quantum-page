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
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

