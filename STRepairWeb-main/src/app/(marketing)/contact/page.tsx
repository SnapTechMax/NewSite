"use client";

import { motion } from "framer-motion";
import { Container, Card, CardContent, FadeIn, Button } from "@/components/ui";
import { ContactForm } from "@/components/forms";
import { company } from "@/data/company";

export default function ContactPage() {
  return (
    <>
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Get in Touch
                </p>
              </motion.div>

              <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                Got a tech problem?
                <span className="relative inline-block">
                  <span className="text-accent">Let's figure it out.</span>
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
                Send a message and we'll get back to you the same day. For anything urgent, call us directly.
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

            {/* Contact Info Cards */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {/* Phone */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${company.phone.replace(/\D/g, "")}`}
                      className="text-xl font-bold text-primary-light hover:text-primary transition-colors"
                    >
                      {company.phone}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">
                      Call for immediate assistance
                    </p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300">
                      {company.address.street}
                      <br />
                      {company.address.city}, {company.address.state}{" "}
                      {company.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary-light flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      Business Hours
                    </h3>
                    <div className="text-gray-300 space-y-1">
                      <p>
                        <span className="font-medium text-white">Mon-Fri:</span>{" "}
                        {company.hours.weekdays}
                      </p>
                      <p>
                        <span className="font-medium text-white">Sat:</span>{" "}
                        {company.hours.saturday}
                      </p>
                      <p>
                        <span className="font-medium text-white">Sun:</span>{" "}
                        {company.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-accent/20 border border-accent/30 rounded-xl p-5">
                <h3 className="font-semibold text-white mb-2">
                  System down?
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  If something critical is out, don't fill out a form. Call us directly and we'll get on it.
                </p>
                <a
                  href={`tel:${company.phone.replace(/\D/g, "")}`}
                  className="text-accent font-semibold hover:text-accent-light transition-colors"
                >
                  Call now
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <FadeIn className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send a message
                </h2>
                <p className="text-gray-600 mb-6">
                  Tell us what's going on. We'll respond the same day.
                </p>
                <ContactForm />
              </CardContent>
            </Card>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
