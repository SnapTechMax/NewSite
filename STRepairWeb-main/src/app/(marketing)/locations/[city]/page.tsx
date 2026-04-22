import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocationPageTemplate } from "@/components/templates";
import { locations, getLocationBySlug } from "@/data/locations";

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
  const location = getLocationBySlug(city);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `IT Services in ${location.name}, ${location.state}`,
    description: location.metaDescription,
    openGraph: {
      title: `IT Services in ${location.name}, ${location.state} | Snap Tech Repair`,
      description: location.metaDescription,
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const location = getLocationBySlug(city);

  if (!location) {
    notFound();
  }

  return <LocationPageTemplate location={location} />;
}
