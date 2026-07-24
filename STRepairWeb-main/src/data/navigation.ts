import { NavItem } from "@/types";
import { services } from "./services";
import { locations } from "./locations";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
  {
    label: "Locations",
    href: "/locations",
    children: locations.map((l) => ({
      label: l.name,
      href: `/locations/${l.slug}`,
    })),
  },
  {
    label: "AI Integration",
    href: "https://footholdsystems.com",
    badge: "New",
    external: true,
  },
];

export const footerNavigation = {
  services: services.map((s) => ({
    label: s.name,
    href: `/services/${s.slug}`,
  })),
  locations: locations.map((l) => ({
    label: l.name,
    href: `/locations/${l.slug}`,
  })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
};
