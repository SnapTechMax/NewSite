import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLocationTemplate } from "@/components/templates";
import { getServiceBySlug } from "@/data/services";
import { locations, getLocationBySlug } from "@/data/locations";
import { getServiceLocationContent } from "@/data/serviceLocations";

const SERVICE_SLUG = "microsoldering";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    city: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const content = getServiceLocationContent(SERVICE_SLUG, city);

  if (!content) {
    return { title: "Not Found" };
  }

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { city } = await params;

  const service = getServiceBySlug(SERVICE_SLUG);
  const location = getLocationBySlug(city);
  const content = getServiceLocationContent(SERVICE_SLUG, city);

  if (!service || !location || !content) {
    notFound();
  }

  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      content={content}
    />
  );
}
