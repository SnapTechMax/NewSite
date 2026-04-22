import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "device-repair",
    slug: "device-repair",
    name: "Device Repair",
    shortName: "Repair",
    tagline: "Get your device fixed fast, without the runaround.",
    painPoint: "Device down? Bring it in.",
    painDescription: "Broken screen, dead battery, won't turn on. Whatever it is, we diagnose it free and give you a straight answer before touching anything.",
    description:
      "From cracked screens to failed drives, we repair computers, laptops, phones, tablets, and game consoles. We diagnose for free, quote you upfront, and get most repairs done the same day. No unnecessary upsells, no runaround.",
    metaDescription:
      "Expert device repair services in San Dimas, CA. Same-day computer, laptop, phone, and tablet repairs. Free diagnostics. 90-day warranty on all repairs.",
    icon: "Wrench",
    image: "/images/services/device-repair.jpg",
    features: [
      {
        title: "Screen Replacement",
        description:
          "Cracked or broken screens fixed quickly with quality replacement parts.",
      },
      {
        title: "Battery Replacement",
        description:
          "Restore your device's battery life with genuine replacement batteries.",
      },
      {
        title: "Hardware Upgrades",
        description:
          "RAM, SSD, and component upgrades to boost your device's performance.",
      },
      {
        title: "Data Recovery",
        description:
          "Recover important files from damaged or failing storage devices.",
      },
    ],
    benefits: [
      "Same-day service available",
      "Free diagnostics",
      "90-day warranty on repairs",
      "Genuine replacement parts",
      "No fix, no fee guarantee",
    ],
    faqs: [
      {
        question: "How long does a typical repair take?",
        answer:
          "Most repairs are completed within 24-48 hours. Many common repairs like screen replacements can be done same-day if parts are in stock.",
      },
      {
        question: "Do you offer a warranty on repairs?",
        answer:
          "Yes, all our repairs come with a 90-day warranty covering both parts and labor.",
      },
      {
        question: "Can you repair water-damaged devices?",
        answer:
          "We can assess water-damaged devices and often recover them. Success depends on the extent of damage. Bring it in as soon as possible for the best chance of recovery.",
      },
    ],
  },
  {
    id: "managed-it",
    slug: "managed-it",
    name: "Managed IT Services",
    shortName: "Managed IT",
    tagline: "Your outsourced IT team, without the overhead.",
    painPoint: "Stop being your own IT department.",
    painDescription: "You started a business, not an IT support desk. Stop Googling error messages at midnight and let someone who actually knows what they're doing handle it.",
    description:
      "We monitor, maintain, and support your business technology so problems get caught before they cost you. Think of us as your IT department, minus the full-time salary. Flat monthly rate, real response times, and a technician who knows your setup.",
    metaDescription:
      "Managed IT services for small businesses in San Dimas and the San Gabriel Valley. 24/7 monitoring, help desk support, and proactive maintenance. Get a free IT assessment.",
    icon: "Shield",
    image: "/images/services/managed-it.jpg",
    features: [
      {
        title: "24/7 Network Monitoring",
        description:
          "Round-the-clock monitoring catches issues before they become problems.",
      },
      {
        title: "Help Desk Support",
        description:
          "Fast, friendly tech support when your team needs assistance.",
      },
      {
        title: "Backup & Disaster Recovery",
        description:
          "Automated backups and recovery plans to protect your business data.",
      },
      {
        title: "Security Management",
        description:
          "Antivirus, firewall management, and security updates to keep threats at bay.",
      },
    ],
    benefits: [
      "Predictable monthly costs",
      "Reduced downtime",
      "Expert support on demand",
      "Proactive issue prevention",
      "Scalable as you grow",
    ],
    faqs: [
      {
        question: "What size businesses do you work with?",
        answer:
          "We specialize in small to medium businesses with 5-100 employees. Our services scale to fit your needs and budget.",
      },
      {
        question: "How quickly can you respond to issues?",
        answer:
          "Critical issues get immediate attention. Most support requests are addressed within 1-4 hours, with many resolved remotely within minutes.",
      },
      {
        question: "Can you work with our existing systems?",
        answer:
          "Absolutely. We support a wide range of hardware and software. We'll assess your current setup and work with what you have while recommending improvements where needed.",
      },
    ],
  },
  {
    id: "malware-removal",
    slug: "malware-removal",
    name: "Malware Removal",
    shortName: "Malware",
    tagline: "Clean out the threats and lock things down.",
    painPoint: "Something feels off with your computer.",
    painDescription: "Slow performance, weird pop-ups, programs crashing for no reason. These are symptoms, not the problem. We dig in, find what's actually there, and remove it completely.",
    description:
      "Malware, ransomware, and viruses can stop your business cold. We do a full cleanup, recover what we can, and set you up with real protection going forward. We also tell you how it happened so it doesn't happen again.",
    metaDescription:
      "Professional malware and virus removal services in San Dimas, CA. Fast cleanup of infected computers. Data recovery and future protection included.",
    icon: "ShieldCheck",
    image: "/images/services/malware-removal.jpg",
    features: [
      {
        title: "Complete Malware Removal",
        description:
          "Thorough scanning and removal of viruses, spyware, ransomware, and other threats.",
      },
      {
        title: "System Cleanup",
        description:
          "Remove unwanted programs and optimize your system after cleaning.",
      },
      {
        title: "Data Protection",
        description:
          "Recover accessible data and secure it against future threats.",
      },
      {
        title: "Prevention Setup",
        description:
          "Install and configure protection software to prevent reinfection.",
      },
    ],
    benefits: [
      "Fast turnaround",
      "Data recovery included",
      "Future protection setup",
      "Education on safe practices",
      "Follow-up support",
    ],
    faqs: [
      {
        question: "How do I know if my computer has malware?",
        answer:
          "Common signs include slow performance, unexpected pop-ups, programs crashing, unfamiliar programs appearing, and unusual network activity. When in doubt, bring it in for a free assessment.",
      },
      {
        question: "Can you recover files encrypted by ransomware?",
        answer:
          "In some cases, yes. Success depends on the specific ransomware variant and whether you have backups. We'll assess your situation and provide honest guidance on recovery options.",
      },
      {
        question: "How can I prevent future infections?",
        answer:
          "We'll set you up with quality antivirus software, configure your system securely, and educate you on safe browsing and email practices. Prevention is always easier than cleanup.",
      },
    ],
  },
  {
    id: "microsoldering",
    slug: "microsoldering",
    name: "Microsoldering",
    shortName: "Microsoldering",
    tagline: "We fix what other shops say can't be fixed.",
    painPoint: "Another shop gave up on it?",
    painDescription: "Before you write it off and buy new, bring it to us. We work at the board level, which means we fix things most shops won't even open up.",
    description:
      "When another shop says the board is dead and you need a new device, that's usually not the full story. We do board-level repairs on phones, laptops, tablets, and game consoles. If the chip is the problem, we fix the chip.",
    metaDescription:
      "Expert microsoldering and board-level repair services in San Dimas, CA. iPhone, MacBook, gaming console, and laptop motherboard repairs. Fix what others can't.",
    icon: "Cpu",
    image: "/images/services/microsoldering.jpg",
    features: [
      {
        title: "Charging Port Repair",
        description:
          "Fix damaged charging ports without replacing the entire board.",
      },
      {
        title: "Component Replacement",
        description:
          "Replace failed chips, capacitors, and other board components.",
      },
      {
        title: "Water Damage Repair",
        description:
          "Clean and repair corrosion damage at the component level.",
      },
      {
        title: "No Power / No Boot Fixes",
        description:
          "Diagnose and repair devices that won't turn on or boot properly.",
      },
    ],
    benefits: [
      "Save devices others can't fix",
      "More affordable than replacement",
      "Preserve your data",
      "Expert diagnostics",
      "Gaming console repairs",
    ],
    faqs: [
      {
        question: "What devices can you repair with microsoldering?",
        answer:
          "We work on iPhones, Android phones, iPads, MacBooks, Windows laptops, Nintendo Switch, PlayStation, Xbox, and other electronics with circuit boards.",
      },
      {
        question: "Is microsoldering repair worth it vs. buying new?",
        answer:
          "Often, yes. Board-level repair typically costs a fraction of replacement and preserves your data. We'll give you an honest assessment of whether repair makes sense for your situation.",
      },
      {
        question: "How long do microsoldering repairs take?",
        answer:
          "Most repairs take 3-5 business days. Complex repairs or those requiring special parts may take longer. We'll give you a timeline after diagnosis.",
      },
    ],
  },
  {
    id: "custom-pc-builds",
    slug: "custom-pc-builds",
    name: "Custom PC Builds",
    shortName: "PC Builds",
    tagline: "A computer built for how you actually work.",
    painPoint: "Pre-built PCs are full of compromises.",
    painDescription:
      "Store-bought PCs come loaded with bloatware, weak components in the wrong places, and parts that were chosen by a purchasing department, not a technician. We build from scratch based on what you actually need.",
    description:
      "We spec, source, and build computers around your actual workload. Gaming rig, video editing machine, business workstation, or something in between. Quality parts, clean builds, no bloatware, and we stand behind the work.",
    metaDescription:
      "Custom PC builds in San Dimas, CA. Gaming PCs, workstations, and business computers built to your specifications. Quality components, expert assembly, and ongoing support.",
    icon: "Computer",
    image: "/images/services/custom-pc-builds.jpg",
    features: [
      {
        title: "Component Selection",
        description:
          "We help you choose the right parts for your budget and performance needs.",
      },
      {
        title: "Expert Assembly",
        description:
          "Professional build with clean cable management and optimal airflow.",
      },
      {
        title: "OS Installation & Setup",
        description:
          "Windows or Linux installed and configured, ready to use.",
      },
      {
        title: "Performance Testing",
        description:
          "Stress testing and benchmarking to ensure everything runs perfectly.",
      },
    ],
    benefits: [
      "No bloatware or unnecessary software",
      "Higher quality components than pre-builts",
      "Customized to your exact needs",
      "Easy future upgrades",
      "Full warranty and support",
    ],
    faqs: [
      {
        question: "How much does a custom PC cost?",
        answer:
          "Custom builds start around $800 for basic workstations and can go up based on your performance requirements. We'll work within your budget to maximize value.",
      },
      {
        question: "How long does it take to build a custom PC?",
        answer:
          "Most builds are completed within 3-5 business days once parts arrive. We'll keep you updated throughout the process.",
      },
      {
        question: "Do you offer support after the build?",
        answer:
          "Yes, all custom builds include 90-day support and troubleshooting. We're here to help if you have any questions or issues.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getAllServiceSlugs = (): string[] => services.map((s) => s.slug);
