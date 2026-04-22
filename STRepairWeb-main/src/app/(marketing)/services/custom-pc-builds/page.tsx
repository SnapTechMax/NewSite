import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { getServiceBySlug } from "@/data/services";
import { notFound } from "next/navigation";

const service = getServiceBySlug("custom-pc-builds");

if (!service) {
  notFound();
}

export const metadata: Metadata = {
  title: "Custom PC Builds in San Dimas, CA",
  description: service.metaDescription,
  openGraph: {
    title: "Custom PC Builds | Snap Tech Repair",
    description: service.metaDescription,
  },
};

export default function CustomPCBuildsPage() {
  if (!service) {
    notFound();
  }
  return <ServicePageTemplate service={service} />;
}
