"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Button, FadeIn } from "@/components/ui";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

interface TeamSectionProps {
  className?: string;
}

export function TeamSection({ className }: TeamSectionProps) {
  const { owner, foundedYear, certifications, phone } = company;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - foundedYear;

  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
              {owner.photo ? (
                <Image
                  src={owner.photo}
                  alt={owner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <span className="font-serif text-8xl font-bold text-white/20">
                    {owner.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
            {/* Years Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 lg:-right-8 bg-primary text-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <p className="font-mono text-4xl font-bold">{yearsInBusiness}+</p>
              <p className="text-sm text-white/80">Years Serving SGV</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <FadeIn delay={0.2}>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-3">
              Meet the Founder
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-gray-900 mb-4">
              {owner.name}
            </h2>
            <p className="text-lg text-primary font-medium mb-6">{owner.title}</p>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                I started Snap Tech Repair in {foundedYear} with a simple goal: give small
                businesses the same quality IT support that big companies get, but with the
                personal attention they deserve.
              </p>
              <p>
                When you call us, you&apos;re not getting a distant call center. You&apos;re getting me
                or one of my certified technicians who knows your business and your systems.
                That&apos;s how we&apos;ve kept clients coming back for over {yearsInBusiness} years.
              </p>
            </div>

            {/* Certifications */}
            {certifications && certifications.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-3">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span
                      key={cert}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 mr-1.5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Schedule a Consultation
              </Button>
              <Button
                href={`tel:${phone.replace(/\D/g, "")}`}
                variant="outline"
                size="lg"
              >
                Call {owner.name.split(" ")[0]}: {phone}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
