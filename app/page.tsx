import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Safzzo| Enterprise Software Solutions",
  description: "Transform your operations with custom ERP and CRM solutions.",
  openGraph: {
    title: 'Safzzo',
    description: 'Enterprise Software Solutions in Salem, Tamil Nadu',
    url: 'https://safzzo.com',
    siteName: 'Safzzo',
    images: [
      {
        url: '/safzzo.ico', // Add a 1200x630 image in your public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};
export default function HomePage() {
  return (
    <>
      <Analytics />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
