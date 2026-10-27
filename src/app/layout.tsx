import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081B33",
};

export const metadata: Metadata = {
  title: "Hitimana Jean Marie Vianney | Geospatial AI Engineer",
  description:
    "Portfolio of Hitimana Jean Marie Vianney — Geospatial AI Engineer specializing in AI-powered GIS, drone mapping, LiDAR processing, computer vision, and remote sensing based in Kigali, Rwanda.",
  keywords: [
    "Geospatial AI",
    "GIS Engineer",
    "Drone Mapping",
    "LiDAR Processing",
    "Remote Sensing",
    "Computer Vision",
    "Digital Twins",
    "Python",
    "AI",
    "Rwanda",
    "Kigali",
    "UAV",
    "Point Cloud",
    "Infrastructure Monitoring",
    "Environmental Monitoring",
  ],
  authors: [{ name: "Hitimana Jean Marie Vianney" }],
  creator: "Hitimana Jean Marie Vianney",
  publisher: "Hitimana Jean Marie Vianney",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Hitimana_JMV.dev",
    siteName: "Hitimana Jean Marie Vianney",
    title: "Hitimana Jean Marie Vianney | Geospatial AI Engineer",
    description:
      "Geospatial AI Engineer building intelligent solutions with drone imagery, LiDAR, and computer vision. Based in Kigali, Rwanda.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitimana Jean Marie Vianney | Geospatial AI Engineer",
    description:
      "Building the Future with Geospatial AI — Portfolio & Projects",
  },
  alternates: {
    canonical: "https://Hitimana_JMV.dev",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hitimana Jean Marie Vianney",
              url: "https://Hitimana_JMV.dev",
              jobTitle: "Geospatial AI Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Charis UAS",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kigali",
                addressCountry: "RW",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="bg-[#060d1a] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
