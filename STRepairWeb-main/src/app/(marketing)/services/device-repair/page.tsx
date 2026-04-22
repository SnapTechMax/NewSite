import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("device-repair");

if (!service) {
  notFound();
}

export const metadata: Metadata = {
  title: "Computer & Laptop Repair in San Dimas, CA",
  description: service.metaDescription,
  openGraph: {
    title: "Computer & Laptop Repair Services | Snap Tech Repair",
    description: service.metaDescription,
  },
};

export default function DeviceRepairPage() {
  if (!service) {
    notFound();
  }
  return <ServicePageTemplate service={service} />;
}
