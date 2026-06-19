import { Orbitron } from "next/font/google";
import "./globals.css";
import NavbarStatic from "../components/layout/NavbarStatic";
import Footer from "../components/layout/Footer";

const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

export const metadata = {
  title: "Quantum Student | Landing",
  description: "Puerta de entrada al futuro de las tecnologías cuánticas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${orbitron.className} ${orbitron.variable} antialiased`}>
        <NavbarStatic />
        <main className="min-h-screen main-content-offset">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

