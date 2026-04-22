import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("microsoldering");

if (!service) {
  notFound();
}

export const metadata: Metadata = {
  title: "Microsoldering & Board-Level Repair in San Dimas, CA",
  description: service.metaDescription,
  openGraph: {
    title: "Microsoldering & Board-Level Repair | Snap Tech Repair",
    description: service.metaDescription,
  },
};

export default function MicrosolderingPage() {
  if (!service) {
    notFound();
  }
  return <ServicePageTemplate service={service} />;
}
