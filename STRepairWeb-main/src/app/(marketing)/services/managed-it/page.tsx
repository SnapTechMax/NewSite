import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("managed-it");

if (!service) {
  notFound();
}

export const metadata: Metadata = {
  title: "Managed IT Services for Small Business in San Dimas",
  description: service.metaDescription,
  openGraph: {
    title: "Managed IT Services | Snap Tech Repair",
    description: service.metaDescription,
  },
};

export default function ManagedITPage() {
  if (!service) {
    notFound();
  }
  return <ServicePageTemplate service={service} />;
}
