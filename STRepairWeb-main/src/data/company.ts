import { CompanyInfo, Testimonial } from "@/types";

export const company: CompanyInfo = {
  name: "SnapTech Repair",
  legalName: "SnapTech Repair LLC",
  phone: "(626) 838-2862",
  foundedYear: 2022,
  address: {
    street: "403 E Arrow Hwy Suite 306",
    city: "San Dimas",
    state: "CA",
    zip: "91773",
  },
  hours: {
    weekdays: "10:00 AM - 6:00 PM",
    saturday: "10:00 AM - 6:00 PM",
    sunday: "10:00 AM - 6:00 PM",
    monday: "Closed",
  },
  social: {
    facebook: "https://facebook.com/snaptechrepair",
    twitter: "https://twitter.com/snaptechrepair",
    linkedin: "https://linkedin.com/company/snaptechrepair",
    yelp: "https://yelp.com/biz/snap-tech-repair-san-dimas",
    google: "https://g.page/snap-tech-repair-san-dimas",
  },
  owner: {
    name: "Maximilian Seth-Smith",
    title: "Founder & Lead Technician",
    photo: "/images/team/max-seth-smith.jpg",
    experience: [
      "Systems Administrator",
      "Small Business IT Admin",
      "Cisco Network Admin",
      "Ubiquiti Network Admin",
      "Microsoft 365 Admin",
      "Windows Server Administration",
      "Network Security",
      "Endpoint Management",
    ],
  },
  ratings: {
    google: {
      score: 5.0,
      reviewCount: 34,
      url: "https://g.page/snap-tech-repair-san-dimas/review",
    },
    yelp: {
      score: 4.5,
      reviewCount: 89,
      url: "https://yelp.com/biz/snap-tech-repair-san-dimas",
    },
  },
  certifications: [
    "CompTIA Network+",
    "CompTIA Security+",
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "SnapTech did a great job repairing our MacBook laptop. Within 24 hours, they replaced the battery, and it was good as new. Excellent communication and customer service and outcome all around. We highly recommend their services!",
    author: {
      name: "Cassandra Peel",
      title: "",
      company: "",
      location: "",
      avatarColor: "#F28B82",
    },
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Max was so easy to work with! I'm a realtor and use my laptop for work, it died on me and I freaked out a bit. Max took it and diagnosed that it needed a new battery in just a couple days. Now I'm back working and very happy. He is timely and has great communication skills! I would recommend him for anyone needing technical help!",
    author: {
      name: "Logan Allred",
      title: "",
      company: "",
      location: "",
      avatarColor: "#78D9EC",
    },
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Super nice, quick turnaround. Diagnosed and rebuilt my computer same day. I will definitely come back if I need a repair in the future.",
    author: {
      name: "Silas Smith",
      title: "",
      company: "",
      location: "",
      avatarColor: "#CCFF90",
    },
    rating: 5,
    source: "google",
  },
];
