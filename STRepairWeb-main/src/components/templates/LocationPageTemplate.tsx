"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { Container, Button, Card, CardContent } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/schema";
import { Location } from "@/types";
import { company } from "@/data/company";

interface LocationPageTemplateProps {
  location: Location;
}

export function LocationPageTemplate({ location }: LocationPageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: `${location.name}, ${location.state}`, href: `/locations/${location.slug}` },
  ];

  return (
    <>
      {/* Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Dark Hero Section */}
      <section className="bg-gray-900 text-white overflow-hidden relative">
        {/* Animated background glows */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.1 },
                },
              }}
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {location.county} County
                </p>
              </motion.div>

              <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                IT Services in{" "}
                <span className="relative inline-block">
                  <span className="text-accent">{location.name}, {location.state}</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-accent/40"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,8 Q50,0 100,8 T200,8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                Professional computer repair, managed IT, and tech support services for businesses in {location.name} and surrounding areas.
              </motion.p>

              {/* Urgency badge */}
              <motion.div
                className="mb-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <motion.div
                  className="inline-flex items-center gap-3 bg-accent/20 border border-accent/50 rounded-full px-6 py-3"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(249, 115, 22, 0.3)",
                      "0 0 40px rgba(249, 115, 22, 0.5)",
                      "0 0 20px rgba(249, 115, 22, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.span
                    className="w-3 h-3 bg-accent rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <span className="text-base md:text-lg font-bold uppercase tracking-wider text-white">
                    Same-Day Service Available
                  </span>
                </motion.div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Button href="/contact" variant="secondary" size="lg">
                  Get a Free Quote
                </Button>
                <Button
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white/10 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call {location.phone}
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Us in {location.name}
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary-light flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a
                        href={`tel:${location.phone.replace(/\D/g, "")}`}
                        className="text-lg font-semibold text-primary-light hover:text-primary transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary-light flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Hours</p>
                      <p className="font-medium text-white">
                        Tue-Sun: {company.hours.weekdays}
                      </p>
                      <p className="text-sm text-gray-400">
                        Mon: {company.hours.monday}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 mb-2">Serving ZIP codes:</p>
                  <p className="font-medium text-white">
                    {location.zipCodes.join(", ")}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Location Description */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Dependable Computer Repair for {location.name} Residents and Businesses
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                <p className="text-lg leading-relaxed">{location.introParagraph}</p>

                {/* Value Propositions */}
                <ul className="mt-6 space-y-3 list-none pl-0">
                  {location.valuePropositions.map((prop, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-gray-800 rounded-full mt-2.5" />
                      <span className="text-gray-700">{prop}</span>
                    </li>
                  ))}
                </ul>

                {/* Closing Statement */}
                <p className="mt-8 text-lg font-semibold text-gray-900">
                  {location.closingStatement}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Request a Quote</Button>
                <Button href="/services" variant="outline">
                  View Our Services
                </Button>
              </div>
            </div>
            <div>
              <Card className="sticky top-24">
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Contact Us in {location.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <a
                          href={`tel:${location.phone.replace(/\D/g, "")}`}
                          className="font-semibold text-primary hover:underline"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Hours</p>
                        <p className="font-medium text-gray-900">
                          Tue-Sun: {company.hours.weekdays}
                        </p>
                        <p className="text-sm text-gray-600">
                          Mon: {company.hours.monday}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">Serving ZIP codes:</p>
                    <p className="font-medium text-gray-900">
                      {location.zipCodes.join(", ")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <ServiceGrid
        title={`IT Services Available in ${location.name}`}
        subtitle="What We Offer"
        className="bg-gray-50"
      />

      {/* Nearby Areas */}
      {location.nearbyAreas.length > 0 && (
        <section className="py-16 lg:py-24">
          <Container>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Also Serving Nearby Areas
              </h2>
              <p className="text-gray-600 mt-2">
                In addition to {location.name}, we provide IT services to these
                neighboring communities
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {location.nearbyAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
                >
                  {area}, CA
                </span>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title={`Need IT Help in ${location.name}?`}
        description="Contact us today for fast, reliable IT support. We're your local technology partner."
        primaryCTA={{ label: "Get Started", href: "/contact" }}
        secondaryCTA={{ label: `Call ${location.phone}`, href: `tel:${location.phone.replace(/\D/g, "")}` }}
        variant="primary"
      />
    </>
  );
}
