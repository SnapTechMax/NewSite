import { company } from "@/data/company";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://snaptechrepair.com/#localbusiness",
    name: company.name,
    legalName: company.legalName,
    description:
      "Professional IT services, computer repair, and tech support for small businesses in the San Gabriel Valley. Same-day service available.",
    url: "https://snaptechrepair.com",
    telephone: company.phone,
    foundingDate: company.foundedYear.toString(),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.1067,
      longitude: -117.8067,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      company.social.facebook,
      company.social.twitter,
      company.social.linkedin,
      company.social.yelp,
      company.social.google,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.ratings.google.score.toString(),
      reviewCount: company.ratings.google.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    priceRange: "$$",
    image: "https://snaptechrepair.com/images/storefront.jpg",
    areaServed: [
      {
        "@type": "City",
        name: "San Dimas",
        "@id": "https://en.wikipedia.org/wiki/San_Dimas,_California",
      },
      {
        "@type": "City",
        name: "La Verne",
      },
      {
        "@type": "City",
        name: "Glendora",
      },
      {
        "@type": "City",
        name: "Claremont",
      },
      {
        "@type": "City",
        name: "Pomona",
      },
      {
        "@type": "City",
        name: "Covina",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Device Repair",
            description: "Computer, laptop, phone, and tablet repair services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Managed IT Services",
            description: "24/7 monitoring, help desk support, and IT management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Malware Removal",
            description: "Virus and malware removal with prevention setup",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Microsoldering",
            description: "Board-level repairs for phones, laptops, and consoles",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
