"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CTASection } from "@/components/sections/CTASection";
import { Container, Button, FadeIn } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/schema";
import { Service, Location } from "@/types";
import { company } from "@/data/company";
import { ServiceLocationContent } from "@/data/serviceLocations";

interface ServiceLocationTemplateProps {
  service: Service;
  location: Location;
  content: ServiceLocationContent;
}

export function ServiceLocationTemplate({
  service,
  location,
  content,
}: ServiceLocationTemplateProps) {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.name, href: `/services/${service.slug}` },
    {
      name: `${location.name}, ${location.state}`,
      href: `/services/${service.slug}/${location.slug}`,
    },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Hero */}
      <section className="bg-gray-900 text-white overflow-hidden relative">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <Container className="relative z-10">
          <div className="py-16 lg:py-24">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-400">
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="mx-2">/</span>
              <Link
                href={`/services/${service.slug}`}
                className="hover:text-white transition-colors"
              >
                {service.name}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">
                {location.name}, {location.state}
              </span>
            </nav>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.1 },
                },
              }}
              className="max-w-3xl"
            >
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {service.name} in {location.name}, {location.state}
              </motion.p>

              <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {content.headline}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {content.subhead}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Button href="/contact" variant="secondary" size="lg">
                  Get a Quote
                </Button>
                <Button
                  href={`tel:${company.phone.replace(/\D/g, "")}`}
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Call {company.phone}
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-20 bg-white">
        <Container size="md">
          <FadeIn>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {content.intro}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.localAngle}
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* What We Handle */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <Container size="md">
          <FadeIn className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              What We Handle
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              {service.name} jobs we take in {location.name} every week.
            </h2>
          </FadeIn>

          <motion.ul
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {content.whatWeFix.map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </motion.ul>
        </Container>
      </section>

      {/* Closing */}
      <section className="py-16 lg:py-20 bg-white">
        <Container size="md">
          <FadeIn>
            <p className="font-serif text-2xl md:text-3xl font-semibold leading-snug text-gray-900 mb-8">
              {content.closing}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">
                Book an Appointment
              </Button>
              <Button
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                variant="outline"
                size="lg"
              >
                Call {company.phone}
              </Button>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <Container size="md">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href={`/services/${service.slug}`}
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-primary transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Service Details
              </p>
              <p className="font-serif text-lg font-bold text-gray-900">
                More about {service.name} &rarr;
              </p>
            </Link>
            <Link
              href={`/locations/${location.slug}`}
              className="block p-6 bg-white rounded-xl border border-gray-100 hover:border-primary transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Location Details
              </p>
              <p className="font-serif text-lg font-bold text-gray-900">
                All services in {location.name} &rarr;
              </p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection
        title={`Need ${service.name} in ${location.name}? Let's talk.`}
        description="Walk in, call, or send a message. We'll figure out the right next step."
        primaryCTA={{ label: "Get a Quote", href: "/contact" }}
        secondaryCTA={{
          label: `Call ${company.phone}`,
          href: `tel:${company.phone.replace(/\D/g, "")}`,
        }}
        variant="dark"
      />
    </>
  );
}
