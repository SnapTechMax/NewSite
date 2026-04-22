import { Service } from "@/types";
import { company } from "@/data/company";

interface ServiceSchemaProps {
  service: Service;
}

export function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://snaptechrepair.com/services/${service.slug}#service`,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://snaptechrepair.com/#localbusiness",
      name: company.name,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        addressLocality: company.address.city,
        addressRegion: company.address.state,
        postalCode: company.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "State",
      name: "California",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: service.features.map((feature, index) => ({
        "@type": "Offer",
        "@id": `https://snaptechrepair.com/services/${service.slug}#offer-${index}`,
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
