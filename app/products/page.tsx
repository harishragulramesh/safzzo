import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products & Pricing | Safzzo SaaS — Enterprise Software Salem Tamil Nadu",
  description:
    "Explore Safzzo SaaS products: Enterprise ERP, CRM, Analytics Suite, and Cloud Platform. Transparent pricing starting ₹999/month. Built in Salem, Tamil Nadu for Indian businesses.",
  keywords: [
    "SaaS pricing India",
    "enterprise ERP price Tamil Nadu",
    "CRM software price India",
    "cloud platform India pricing",
    "business software Salem",
    "SaaS subscription India",
    "Safzzo products",
    "enterprise software pricing INR",
  ],
  openGraph: {
    title: "Products & Pricing | Safzzo SaaS",
    description: "Enterprise ERP, CRM, Analytics, and Cloud platforms. Starting ₹999/month.",
    url: "https://safzzo.com/products",
  },
  alternates: {
    canonical: "https://safzzo.com/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
