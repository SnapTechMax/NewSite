"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTASection } from "@/components/sections/CTASection";
import { Container, Card, CardContent, Button, FadeIn } from "@/components/ui";
import { locations } from "@/data/locations";
import { services } from "@/data/services";
import { company } from "@/data/company";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function LocationsPage() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white overflow-hidden">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
            {/* Content */}
            <motion.div
              className="order-2 lg:order-1"
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
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.1em] text-primary-light mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                Where We Serve
              </motion.p>
              <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                San Gabriel Valley IT Support
              </motion.h1>
              {/* Business NAP Info */}
              <motion.div
                className="mb-6 space-y-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <p className="text-xl md:text-2xl font-bold text-white">
                  SnapTech Repair
                </p>
                <p className="text-lg text-gray-300">
                  403 E Arrow Hwy STE 304, San Dimas, CA 91773
                </p>
                <p className="text-xl md:text-2xl font-bold text-accent">
                  <a href="tel:6268382862" className="hover:text-accent-light transition-colors">
                    (626) 838-2862
                  </a>
                </p>
                <p className="text-sm text-gray-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Tue-Sun: 10 AM - 6 PM</span>
                  <span className="text-gray-500">|</span>
                  <span className="text-gray-500">Mon: Closed</span>
                </p>
              </motion.div>

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
                  <svg
                    className="w-5 h-5 mr-2"
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
                  {company.phone}
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="order-1 lg:order-2 relative"
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

      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
          >
            {locations.map((location) => (
              <motion.div key={location.id} variants={cardVariants}>
                <Card hover className="h-full">
                  <CardContent>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        <svg
                          className="w-5 h-5"
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
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {location.name}, {location.state}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {location.county} County
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {location.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {location.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="text-primary font-medium hover:underline"
                    >
                      View IT Services in {location.name} →
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Services Available */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <FadeIn className="text-center mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Available Everywhere
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Services in All Locations
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              All of our services are available throughout our service area. No
              matter where you&apos;re located, you get the same quality and
              responsiveness.
            </p>
          </FadeIn>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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
            {services.map((service) => (
              <motion.div key={service.id} variants={cardVariants}>
                <Card variant="bordered" className="text-center h-full">
                  <CardContent>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{service.tagline}</p>
                    <Button href={`/services/${service.slug}`} variant="ghost" size="sm">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTASection
        title="Need IT Help in Your Area?"
        description="Contact us today for fast, local IT support."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        variant="primary"
      />
    </>
  );
}
