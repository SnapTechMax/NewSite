import { Location } from "@/types";

export const locations: Location[] = [
  {
    id: "san-dimas",
    slug: "san-dimas",
    name: "San Dimas",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91773"],
    phone: "(626) 838-2862",
    description:
      "San Dimas is our home. The shop sits right off Arrow Highway, a quick drive from Bonita Avenue, Via Verde, and the 57/210 interchange. We handle computer repair, device fixes, and full managed IT for businesses across town.",
    metaDescription:
      "Computer repair and IT services in San Dimas, CA 91773. Walk-in device repair, same-day service, and managed IT for local businesses. Based on Arrow Highway.",
    nearbyAreas: ["La Verne", "Glendora", "Covina", "Charter Oak"],
    introParagraph:
      "We're a San Dimas shop for San Dimas people. Our bench is on Arrow Highway, a few minutes from Bonita, the Frank G. Bonelli Park side of town, and the businesses along Via Verde and Avenida Entrada. When something breaks, you don't need to drive to LA or ship it out. You can walk in, hand it over, and talk to the person who's going to fix it. That matters when you're a small business owner who can't lose two days waiting on a shipping label. So what actually makes us different from the other options in town?",
    valuePropositions: [
      "Walk-in repair on Arrow Highway, no appointment needed for diagnostics",
      "Same-day service for common repairs like screens, batteries, and data recovery",
      "Real sysadmin background, not a counter employee reading from a manual",
      "Free diagnostics with a straight-up quote before any work starts",
      "On-site visits to Via Verde, Bonita, and surrounding San Dimas business corridors",
      "Local phone number with a real person on the other end",
      "We handle the weird stuff too. Dual-boot setups, board-level repair, legacy hardware",
    ],
    closingStatement:
      "San Dimas deserves a local computer shop that actually knows what it's doing. That's the whole point of SnapTech.",
  },
  {
    id: "la-verne",
    slug: "la-verne",
    name: "La Verne",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91750"],
    phone: "(626) 838-2862",
    description:
      "La Verne is a five-minute drive from our shop. We handle computer repair and IT support for businesses along Foothill Boulevard, D Street, the University of La Verne area, and the neighborhoods up toward Live Oak Canyon.",
    metaDescription:
      "Computer repair and IT services in La Verne, CA 91750. Same-day laptop fixes, home Wi-Fi setup, and small business IT. Quick drive from the University of La Verne.",
    nearbyAreas: ["San Dimas", "Claremont", "Pomona", "Glendora"],
    introParagraph:
      "La Verne has its own rhythm. The university keeps things moving, Old Town has a steady flow of professional offices, and the residential neighborhoods up by Live Oak Park are full of remote workers and home offices that need Wi-Fi that actually works. When your laptop dies before a meeting or your office network drops for the third time this week, you don't want to ship your machine to a repair depot or wait on a callback from a big IT firm. We're 10 minutes down the 210 in San Dimas, which means same-day help is realistic, not a sales pitch. A few reasons La Verne customers call us:",
    valuePropositions: [
      "Same-day response for most repair jobs, including on-site visits to D Street and Foothill",
      "Home Wi-Fi setup and extender installation for the hillside neighborhoods with weak signal",
      "Real repair for University of La Verne students with broken laptops before finals",
      "Business IT support that doesn't require a 12-month contract",
      "Straight quotes before work starts. No surprise invoice at the end",
      "Weekend and evening drop-offs when your schedule doesn't fit 9 to 5",
      "We fix laptops other shops won't touch, including liquid damage and motherboard-level repair",
    ],
    closingStatement:
      "La Verne doesn't need a franchise computer shop. It needs someone nearby who actually knows what they're doing. That's us.",
  },
  {
    id: "glendora",
    slug: "glendora",
    name: "Glendora",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91740", "91741"],
    phone: "(626) 838-2862",
    description:
      "Glendora businesses from the Village to the Route 66 corridor use us for computer repair, office network setup, and managed IT. We cover both the 91740 and 91741 side of town with same-day service.",
    metaDescription:
      "Computer and IT services in Glendora, CA. Walk-in repair, office network setup, and managed IT for businesses in 91740 and 91741. Pride of the Foothills, served locally.",
    nearbyAreas: ["San Dimas", "Azusa", "Covina", "Charter Oak"],
    introParagraph:
      "Glendora has a mix of storefront retail in the Village, professional offices along Route 66, and a lot of home-based businesses in the neighborhoods north of Sierra Madre. All of them share one problem when tech breaks: the big IT firms won't return your call fast enough, and the strip mall repair shops hire whoever is cheapest. We're 15 minutes away in San Dimas and we actually show up. Here's how we help Glendora customers:",
    valuePropositions: [
      "Office network setup for retail shops in the Village and along Foothill",
      "Wi-Fi troubleshooting for homes and offices with dead zones",
      "Same-day PC and laptop repair including Dell, HP, Apple, and custom builds",
      "Virus and malware removal with root cause analysis, not just a quick scan",
      "Business phone system and VoIP setup for small offices",
      "On-site visits that actually happen on the day we say they will",
      "Real quotes before we touch anything. No bait and switch",
    ],
    closingStatement:
      "Glendora has enough businesses trying to sell you something you don't need. We're not one of them.",
  },
  {
    id: "claremont",
    slug: "claremont",
    name: "Claremont",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91711"],
    phone: "(626) 838-2862",
    description:
      "Claremont's mix of academic institutions, law firms, and consulting practices needs IT support that can keep up. We handle device repair, managed IT, and HIPAA-aware configurations for 91711 businesses.",
    metaDescription:
      "IT support and computer repair in Claremont, CA 91711. Law firm and professional services IT, managed support, and device repair. Serving The Village and Claremont Colleges area.",
    nearbyAreas: ["La Verne", "Pomona", "Upland", "Montclair"],
    introParagraph:
      "Claremont runs on knowledge work. The colleges keep research labs, faculty offices, and administrative staff on tight tech timelines. The Village is packed with law offices, medical practices, architects, and consultants who can't afford to lose a day to a broken laptop. We get that, and we work accordingly. Our shop is about 15 minutes west in San Dimas. Here's what we bring to Claremont:",
    valuePropositions: [
      "Priority response for professional service firms where downtime equals lost billable hours",
      "HIPAA-aware IT configurations for medical and mental health practices",
      "Secure backup and disaster recovery planning for law firms and consultancies",
      "MacBook and Apple ecosystem expertise for the design and academic crowd",
      "Managed IT plans scoped to actual usage, not generic per-seat pricing",
      "On-site support in the Village, the Colleges area, and the residential streets north of Foothill",
      "Straight technical answers without the sales performance",
    ],
    closingStatement:
      "Claremont has high standards. Our work holds up to them.",
  },
  {
    id: "pomona",
    slug: "pomona",
    name: "Pomona",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91766", "91767", "91768"],
    phone: "(626) 838-2862",
    description:
      "Pomona has everything from the Arts Colony downtown to manufacturing near the Fairplex. We handle IT and repair across all three zip codes, including office moves, network cabling, and retail POS support.",
    metaDescription:
      "IT services and computer repair in Pomona, CA. Serving 91766, 91767, 91768. Office network cabling, retail POS repair, and small business tech support.",
    nearbyAreas: ["Claremont", "La Verne", "Diamond Bar", "Montclair"],
    introParagraph:
      "Pomona covers a lot of ground. You've got the downtown Arts Colony and the galleries along 2nd Street, the industrial corridors near the Fairplex, retail spread across Mission and Garey, and neighborhoods that range from historic bungalows to new-build commercial. Every one of those has different IT needs, and we've worked with most of them. From our shop in San Dimas we cover Pomona regularly. What customers here come to us for:",
    valuePropositions: [
      "Retail POS system repair and network troubleshooting for storefronts along Mission and Garey",
      "Office network cabling and cleanup for warehouse and light industrial spaces near the Fairplex",
      "Business relocation IT for the offices constantly moving in and out of downtown",
      "Malware and ransomware cleanup with prevention planning so it doesn't happen twice",
      "Low-voltage wiring and network cabinet organization for messy server rooms",
      "Same-day device repair for individuals across all three Pomona zip codes",
      "Real pricing conversations, not a quote that grows once we're already on-site",
    ],
    closingStatement:
      "Pomona is a working city. We work the same way.",
  },
  {
    id: "upland",
    slug: "upland",
    name: "Upland",
    county: "San Bernardino",
    state: "CA",
    zipCodes: ["91784", "91785", "91786"],
    phone: "(626) 838-2862",
    description:
      "Upland is a short drive east of our shop. We handle computer repair and IT support for businesses along Foothill, around Historic Downtown, and through the business parks on the north side of the 10.",
    metaDescription:
      "Computer repair and IT services in Upland, CA. Covering 91784, 91785, and 91786. Small business IT, Wi-Fi setup, and device repair from a nearby San Dimas shop.",
    nearbyAreas: ["Claremont", "Montclair", "Rancho Cucamonga", "Ontario"],
    introParagraph:
      "Upland's business life runs along two main arteries. You've got Foothill Boulevard for the older storefronts and Historic Downtown, and the industrial and office parks on the north side of the 10 and along 7th Street. Each side has its own tech problems. The downtown shops need solid Wi-Fi and straightforward POS support. The business parks need proper network setup, VoIP, and the kind of ongoing IT you can't get from the guy your cousin recommended. We cover both from our shop in San Dimas. Why Upland businesses keep calling us:",
    valuePropositions: [
      "Office Wi-Fi installation that actually covers the whole floor, including the back storage rooms",
      "VoIP phone system setup and repair for small and mid-size offices",
      "Business firewall configuration and secure remote access for hybrid teams",
      "Device repair for PCs, Macs, and custom builds with transparent timelines",
      "Network cabling cleanup for messy server closets and patch panels",
      "Monthly managed IT plans scoped to your actual team size and usage",
      "No minimum contract length. If you don't like the service, you leave",
    ],
    closingStatement:
      "Upland has real businesses that need real IT. We don't do the fake version of either.",
  },
  {
    id: "montclair",
    slug: "montclair",
    name: "Montclair",
    county: "San Bernardino",
    state: "CA",
    zipCodes: ["91763"],
    phone: "(626) 838-2862",
    description:
      "Montclair sits at a crossroads of shopping, small business, and commercial traffic along Central and Holt. We handle computer repair, office IT, and network setup from our San Dimas shop, 20 minutes away.",
    metaDescription:
      "Computer repair and IT services in Montclair, CA 91763. Walk-in device repair, office Wi-Fi setup, and small business IT support. Close drive via the 10 freeway.",
    nearbyAreas: ["Pomona", "Claremont", "Upland", "Ontario"],
    introParagraph:
      "Montclair has more commercial energy than most people give it credit for. Between the Plaza, the shops along Central and Holt, and the small businesses tucked into the residential zones, there's a lot happening that depends on working technology. When the register goes down or the office Wi-Fi stops holding a signal, you need someone who can respond fast. We're a short trip west on the 10 and we show up when we say we will. Here's what Montclair businesses and residents tap us for:",
    valuePropositions: [
      "Fast POS and retail system support for stores around the Plaza and along Central",
      "Office Wi-Fi troubleshooting and extender installation for spaces with coverage issues",
      "Laptop and desktop repair with same-day turnaround on common jobs",
      "Small business server and backup setup done properly from the start",
      "Virus and malware removal that actually removes the root cause",
      "Real response times instead of promises you get from call centers",
      "Flat pricing, no surprise fees, and a person who picks up the phone",
    ],
    closingStatement:
      "Montclair businesses deserve tech support that doesn't flake. That's the entire job.",
  },
  {
    id: "azusa",
    slug: "azusa",
    name: "Azusa",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91702"],
    phone: "(626) 838-2862",
    description:
      "Azusa runs from the canyon down to the 210 and east along Arrow Highway. We handle computer repair, home Wi-Fi setup, and IT support for the businesses and residents spread across 91702.",
    metaDescription:
      "Computer repair and IT services in Azusa, CA 91702. Laptop repair, home Wi-Fi setup, and small business IT support. Close drive from our San Dimas shop.",
    nearbyAreas: ["Glendora", "Covina", "Duarte", "Irwindale"],
    introParagraph:
      "Azusa is a mix of things. You've got APU and Citrus College bringing student laptops through the area, downtown Azusa slowly coming back to life with new restaurants and shops, and the older residential streets that need real home Wi-Fi coverage. Then there's the industrial side along Arrow and Irwindale Avenue where businesses need actual IT infrastructure, not just a router from Best Buy. We're 10 minutes west on Arrow and we cover all of it. What Azusa calls us for:",
    valuePropositions: [
      "Same-day laptop repair for students at APU and Citrus College",
      "Home Wi-Fi setup and extender installation for the older homes with weak coverage",
      "Business network cabling and Wi-Fi for the industrial corridor along Arrow",
      "Virus, malware, and ransomware cleanup with actual root cause fixes",
      "Data recovery for failing drives and water-damaged laptops",
      "Walk-in service at our San Dimas shop, short drive from downtown Azusa",
      "Fair pricing with a real quote before anything gets touched",
    ],
    closingStatement:
      "Azusa doesn't need a computer shop that treats you like a stranger. We don't operate that way.",
  },
  {
    id: "covina",
    slug: "covina",
    name: "Covina",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91722", "91723", "91724"],
    phone: "(626) 838-2862",
    description:
      "Covina businesses from Downtown Covina to the Eastland corridor use us for computer repair, office IT, and network support. We cover all three Covina zip codes with same-day response on most jobs.",
    metaDescription:
      "Computer repair and managed IT in Covina, CA. Covering 91722, 91723, and 91724. Small business IT support, office network setup, and device repair from a nearby shop.",
    nearbyAreas: ["San Dimas", "Glendora", "West Covina", "Azusa"],
    introParagraph:
      "Covina covers three zip codes and three different kinds of business environment. Downtown Covina has the walkable retail and restaurant mix. The area around Eastland and the 10 is heavier on office, medical, and light industrial. The residential stretches out in between are full of home offices that have gotten more serious since 2020. All three need different IT approaches. We live about 10 minutes east in San Dimas, and we regularly drive into Covina for on-site work. Why Covina calls us:",
    valuePropositions: [
      "Office network and Wi-Fi setup for offices along Grand and near Eastland",
      "Medical and dental practice IT support with appropriate compliance handling",
      "Home office and remote work setup for the neighborhoods across 91722, 91723, and 91724",
      "Same-day repair for laptops, desktops, and common hardware failures",
      "Data recovery and drive replacement done right, with your files intact",
      "Real technicians instead of a rotating cast of contractors",
      "Transparent pricing and honest timelines, even when the news isn't what you want to hear",
    ],
    closingStatement:
      "Covina has options for IT help. We're the one that actually answers the phone.",
  },
  {
    id: "diamond-bar",
    slug: "diamond-bar",
    name: "Diamond Bar",
    county: "Los Angeles",
    state: "CA",
    zipCodes: ["91765"],
    phone: "(626) 838-2862",
    description:
      "Diamond Bar businesses along Grand Avenue and in the hillside communities use us for device repair, home Wi-Fi coverage, and small business IT. We visit on-site regularly from our San Dimas shop.",
    metaDescription:
      "Computer repair and IT support in Diamond Bar, CA 91765. Home Wi-Fi setup, business network support, and on-site visits for the hillside neighborhoods.",
    nearbyAreas: ["Pomona", "Chino Hills", "Walnut", "Rowland Heights"],
    introParagraph:
      "Diamond Bar has two distinct tech problems. The professional offices along Grand Avenue need real IT support, managed services, and proper office networks. The hillside residential neighborhoods, especially the ones up near The Country, have Wi-Fi coverage problems that cheap extenders don't solve. Big homes with lots of walls and lots of connected devices need planning, not guessing. We handle both sides from our San Dimas shop, a quick trip down the 60. What Diamond Bar calls us for:",
    valuePropositions: [
      "Whole-home Wi-Fi coverage planning for multi-story houses with dead zones",
      "Smart home device setup, cameras, and integrated home networks",
      "Small business managed IT for the offices along Grand and Brea Canyon",
      "Device repair for families with multiple laptops, tablets, and consoles",
      "Home office setup for professionals who moved to remote or hybrid work",
      "On-site visits instead of asking you to haul equipment to a shop",
      "Quotes that hold up instead of ballooning once we're on the clock",
    ],
    closingStatement:
      "Diamond Bar has nice homes and serious businesses. We give both the IT attention they deserve.",
  },
];

export const getLocationBySlug = (slug: string): Location | undefined =>
  locations.find((l) => l.slug === slug);

export const getAllLocationSlugs = (): string[] => locations.map((l) => l.slug);
