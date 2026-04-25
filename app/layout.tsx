import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://safzzo.com"),
  title: {
    default: "Safzzo SaaS | Enterprise Software Solutions in Salem, Tamil Nadu",
    template: "%s | Safzzo SaaS",
  },
  icons: {
      icon: [
        { url: '/favicon.ico' },
        // Optional: Add a png version if you have one
        { url: '/safzzo-design-swp-b.png', type: 'image/png' }, 
      ],
      apple: [
        { url: '/safzzo-design-swp-b.png' },
      ],
    },
  description:
    "Safzzo Software as a Service — Salem, Tamil Nadu. We build enterprise-grade SaaS platforms, custom ERP, CRM, and cloud software solutions for businesses across India. Transform your operations with intelligent software.",
  keywords: [
    "SaaS company Salem Tamil Nadu",
    "enterprise software Salem",
    "software development Salem India",
    "cloud software solutions Tamil Nadu",
    "ERP software Salem",
    "CRM software Tamil Nadu",
    "custom software development India",
    "B2B SaaS India",
    "Safzzo software",
    "business software Salem",
    "software as a service India",
    "enterprise solutions Tamil Nadu",
  ],
  authors: [{ name: "Safzzo SaaS", url: "https://safzzo.com" }],
  creator: "Safzzo SaaS",
  publisher: "Safzzo SaaS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://safzzo.com",
    siteName: "Safzzo SaaS",
    title: "Safzzo SaaS | Enterprise Software Solutions — Salem, Tamil Nadu",
    description:
      "Enterprise-grade SaaS platforms, custom ERP, CRM, and cloud solutions built in Salem, Tamil Nadu. Powering Indian businesses with intelligent software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Safzzo SaaS — Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Safzzo SaaS | Enterprise Software Solutions",
    description:
      "Enterprise SaaS solutions built in Salem, Tamil Nadu. ERP, CRM, cloud platforms for Indian businesses.",
    images: ["/og-image.png"],
    creator: "@safzzo",
  },
  alternates: {
    canonical: "https://safzzo.com",
  },
  verification: {
    google: "your-google-site-verification",
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#020b14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Safzzo SaaS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Enterprise software solutions and SaaS platforms built for Indian businesses by Safzzo, Salem, Tamil Nadu.",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "999",
    },
    author: {
      "@type": "Organization",
      name: "Safzzo Software as a Service",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Salem",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      url: "https://safzzo.com",
      telephone: "+91-XXXXXXXXXX",
      email: "hello@safzzo.com",
    },
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Safzzo Software as a Service",
    description: "Enterprise SaaS and software solutions company in Salem, Tamil Nadu, India.",
    url: "https://safzzo.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Salem",
      addressLocality: "Salem",
      addressRegion: "Tamil Nadu",
      postalCode: "636001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.6643,
      longitude: 78.146,
    },
    areaServed: ["Salem", "Tamil Nadu", "India"],
    priceRange: "₹₹₹",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
