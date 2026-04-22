"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { CTASection } from "@/components/sections/CTASection";
import { Container, Card, CardContent, FadeIn } from "@/components/ui";
import { company } from "@/data/company";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function AboutPage() {
  const values = [
    {
      title: "Straight answers",
      description:
        "We tell you what's wrong, what it will cost, and whether it's worth fixing. No jargon, no upsells, no fluff.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Real turnaround times",
      description:
        "We quote realistic timelines and hit them. Most repairs are same-day. If something changes, you hear it from us first.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Local and reachable",
      description:
        "We're based in San Dimas. When you call, you get a person. When you have a question, you get an answer.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hero
        variant="page"
        subtitle="About SnapTech Repair"
        title="Real skills. Local shop."
        description="SnapTech is a San Dimas-based IT shop doing device repair and managed IT for individuals and businesses across the San Gabriel Valley."
      />

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <Container size="md">
          <FadeIn className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The shop</h2>
            <p className="text-gray-600 leading-relaxed">
              SnapTech started because there's a gap nobody was filling well. Big IT companies treat small businesses like an afterthought. Franchise repair shops hire whoever is available. Neither gives you someone who actually knows what they're doing and treats your problem like it matters.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We're based in San Dimas and serve businesses and individuals across the San Gabriel Valley. Device repair for walk-ins, managed IT for businesses that need real ongoing support. Both done by someone with genuine technical depth and over two years of hands-on sysadmin experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CompTIA Network+ and Security+ certified. Background in systems administration, network infrastructure, and small business IT. Cisco and Ubiquiti gear, Microsoft 365, Windows Server, and the full range of things that break in a real business environment.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Straight answers, fair prices, and someone who picks up the phone.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <FadeIn className="text-center mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              What We Stand For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Values
            </h2>
          </FadeIn>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="text-center h-full">
                  <CardContent>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* We're not a franchise. */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-primary font-semibold uppercase tracking-wider mb-2">
                Why local matters
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Local Matters
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SnapTech is independently owned and operated in San Dimas. There's no call center routing your ticket to whoever is on shift. When you reach out, you're talking to the person who will actually work on your problem.
                </p>
                <p>
                  That matters more than it sounds. Local businesses don't have time to re-explain their setup every time something breaks. We know your systems, know your history, and give your issues the attention they deserve.
                </p>
                <p>
                  The San Gabriel Valley has a lot of good businesses in it. We're here to help keep them running.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-gray-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Service Area
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "San Dimas",
                  "La Verne",
                  "Glendora",
                  "Claremont",
                  "Pomona",
                  "Upland",
                  "Montclair",
                  "Azusa",
                  "Covina",
                  "Diamond Bar",
                ].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{city}, CA</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container size="md">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-gray-600">
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state} {company.address.zip}
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href={`tel:${company.phone.replace(/\D/g, "")}`} className="text-primary hover:underline">
                  {company.phone}
                </a>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600">Tue-Sun: 10 AM - 6 PM</p>
                <p className="text-gray-500 text-sm">Mon: Closed</p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <CTASection
        title="Let's talk about what you need."
        description="Device repair, managed IT, or something in between. Give us a call or send a message and we'll figure out the right path."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}
