"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Container, FadeIn, Button } from "@/components/ui";
import { ServiceSchema, FAQSchema } from "@/components/schema";
import { Service } from "@/types";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

interface ServicePageTemplateProps {
  service: Service;
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ShieldCheck: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Cpu: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
  Computer: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const pageUrl = `https://snaptechrepair.com/services/${service.slug}`;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - company.foundedYear;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Get other services for cross-linking
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Structured Data */}
      <ServiceSchema service={service} />
      {service.faqs.length > 0 && (
        <FAQSchema faqs={service.faqs} pageUrl={pageUrl} />
      )}

      {/* Pain-First Hero Section */}
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
                  {iconMap[service.icon]}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {service.shortName}
                </p>
              </motion.div>

              <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {service.painPoint}{" "}
                <span className="relative inline-block">
                  <span className="text-accent">We&apos;ll fix it.</span>
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
                {service.painDescription}
              </motion.p>

              {/* Immediate Service CTA */}
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
                    For Immediate Service, Call Now
                  </span>
                </motion.div>
              </motion.div>

              {/* Phone CTA */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Button
                  href={`tel:${company.phone.replace(/\D/g, "")}`}
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white/10 text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {company.phone}
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
                {/* Form header */}
                <div className="mb-6">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                    Get a Free Quote
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Tell us what&apos;s broken. We&apos;ll get back to you within the hour.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 placeholder-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 placeholder-gray-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">
                      What&apos;s the issue?
                    </label>
                    <textarea
                      id="issue"
                      name="issue"
                      value={formData.issue}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Brief description of the problem..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-6 rounded-lg transition-colors shadow-lg shadow-accent/25"
                  >
                    Get My Free Quote
                  </button>
                </form>

                {/* Trust signals */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Response within 1 hour</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Service Description + Features */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden relative">
        {/* Ambient glows */}
        <motion.div
          className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Description */}
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                About This Service
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {service.name}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Benefits List */}
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  variants={cardVariants}
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/30 to-accent/30 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="relative bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Image + CTA Section */}
      {service.image && (
        <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
          {/* Tech grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <Container className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeIn className="order-2 lg:order-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                  Why Choose Us
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                  Expert {service.name} You Can Trust
                </h2>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  With {yearsInBusiness}+ years of experience and hundreds of satisfied clients, we deliver quality repairs backed by warranties and ongoing support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="secondary" size="lg">
                    Schedule Service
                  </Button>
                  <Button
                    href={`tel:${company.phone.replace(/\D/g, "")}`}
                    variant="outline"
                    size="lg"
                    className="border-white/50 text-white hover:bg-white hover:text-gray-900"
                  >
                    Call Now
                  </Button>
                </div>
              </FadeIn>

              <motion.div
                className="order-1 lg:order-2 relative"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </Container>
        </section>
      )}

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <FAQSection
          title={`Common Questions About ${service.name}`}
          subtitle="FAQs"
          faqs={service.faqs}
        />
      )}

      {/* Other Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              More Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              Other Ways We Can Help
            </h2>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {otherServices.map((otherService) => (
              <motion.div key={otherService.slug} variants={cardVariants}>
                <Link
                  href={`/services/${otherService.slug}`}
                  className="group relative block h-full"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="relative h-full bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {iconMap[otherService.icon]}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                      {otherService.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {otherService.tagline}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Service in each location - deep linking */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-100">
        <Container>
          <div className="mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-3">
              Service Areas
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              {service.name} across the San Gabriel Valley.
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl">
              We work with customers across the valley. Click your city for location-specific details.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/services/${service.slug}/${loc.slug}`}
                className="block p-4 bg-white rounded-lg border border-gray-100 hover:border-primary hover:shadow-md transition-all text-center"
              >
                <p className="font-semibold text-gray-900">{loc.name}</p>
                <p className="text-xs text-gray-500 mt-1">{loc.state}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <CTASection
        title={`Ready for ${service.name}?`}
        description="Get a free quote today. No obligation, no pressure. Just honest advice from people who know tech."
        primaryCTA={{ label: "Get Your Free Quote", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: `tel:${company.phone.replace(/\D/g, "")}` }}
        variant="dark"
      />
    </>
  );
}
