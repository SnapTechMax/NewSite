"use client";

import { HomeHero } from "@/components/sections/HomeHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LocationGrid } from "@/components/sections/LocationGrid";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Container, Counter, StaggerContainer, StaggerItem } from "@/components/ui";
import { company } from "@/data/company";
import { homeFaqs } from "@/data/faqs";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - company.foundedYear;

  return (
    <>
      {/* Hero Section - Split Layout */}
      <HomeHero
        subtitle="San Dimas, CA"
        title="Your local IT shop. For your devices and your business."
        secondaryCTA={{ label: "(626) 838-2862", href: "tel:6268382862" }}
      />

      {/* Trust Signals - Enhanced with verifiable metrics */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Google Rating */}
            <StaggerItem>
              <a
                href={company.ratings.google.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center group block"
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-mono text-3xl font-bold tracking-tight text-gray-900 group-hover:text-primary transition-colors">
                  <Counter to={company.ratings.google.score} decimals={1} />
                </p>
                <p className="text-sm font-medium text-gray-500 mt-1">
                  Google Rating (<Counter to={company.ratings.google.reviewCount} /> reviews)
                </p>
              </a>
            </StaggerItem>

            {/* Years in Business */}
            <StaggerItem className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-mono text-3xl font-bold tracking-tight text-gray-900">
                <Counter to={yearsInBusiness} />
              </p>
              <p className="text-sm font-medium text-gray-500 mt-1">Years Serving SGV</p>
            </StaggerItem>

            {/* Devices Repaired */}
            <StaggerItem className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-mono text-3xl font-bold tracking-tight text-gray-900">
                <Counter to={1000} suffix="+" />
              </p>
              <p className="text-sm font-medium text-gray-500 mt-1">Devices Repaired</p>
            </StaggerItem>

            {/* Response Time */}
            <StaggerItem className="text-center">
              <div className="flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-mono text-3xl font-bold tracking-tight text-gray-900">Same Day</p>
              <p className="text-sm font-medium text-gray-500 mt-1">Service Available</p>
              <p className="text-xs text-green-600 font-medium mt-2 flex items-center justify-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Slots available today
              </p>
            </StaggerItem>
          </StaggerContainer>
        </Container>
      </section>

      {/* Services Section - Pain-first bento layout */}
      <ServicesSection />

      {/* Testimonials - Real clients with photos */}
      <TestimonialSection />

      {/* Locations */}
      <LocationGrid
        title="San Gabriel Valley IT Support"
        subtitle="We Come to You"
        className="bg-gray-50"
      />

      {/* FAQ */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Got Questions?"
        faqs={homeFaqs}
      />

      {/* CTA */}
      <CTASection
        title="Got an IT problem? Let's fix it."
        description="Whether your laptop just died or your business needs real IT support, we're a phone call away. No scripts, no runaround."
        primaryCTA={{ label: "Book Free Call", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: `tel:${company.phone.replace(/\D/g, "")}` }}
        variant="dark"
      />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-3 lg:hidden z-50 shadow-lg shadow-gray-900/10">
        <a
          href={`tel:${company.phone.replace(/\D/g, "")}`}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call Now
        </a>
        <a
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg transition-colors"
        >
          Get Quote
        </a>
      </div>
    </>
  );
}
