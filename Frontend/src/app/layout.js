import { Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { AuthProvider } from "../context/AuthContext";

const orbitron = Orbitron({ subsets: ["latin"], variable: '--font-orbitron' });

const siteUrl = 'https://quantumubb.cl';
const siteName = 'Quantum UBB';
const description = 'Grupo Quantum UBB de la Universidad del Bio-Bio: investigacion en fotonica, fibra optica, sensores, FPGA, robotica, control automatico y tecnologias cuanticas.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Investigacion cuantica y fotonica`,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    'Quantum UBB',
    'Universidad del Bio-Bio',
    'investigacion cuantica',
    'fotonica',
    'fibra optica',
    'sensores opticos',
    'FPGA',
    'robotica',
    'control automatico',
    'optomecatronica',
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/svg/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/svg/favicon.svg',
    apple: '/svg/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: siteUrl,
    siteName,
    title: `${siteName} | Investigacion cuantica y fotonica`,
    description,
    images: [
      {
        url: '/quantum-logo.png',
        width: 1200,
        height: 630,
        alt: 'Logo de Quantum UBB',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | Investigacion cuantica y fotonica`,
    description,
    images: ['/quantum-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ResearchOrganization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/quantum-logo.png`,
  description,
  parentOrganization: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad del Bio-Bio',
    url: 'https://www.ubiobio.cl',
  },
  knowsAbout: [
    'Investigacion cuantica',
    'Fotonica',
    'Fibra optica',
    'Sensores opticos',
    'FPGA',
    'Robotica',
    'Control automatico',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${orbitron.className} ${orbitron.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AuthProvider>
          <Navbar />
          <main className="main-content-offset">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
