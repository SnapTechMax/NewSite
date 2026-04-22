"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, FadeIn, Button } from "@/components/ui";
import { CTASection } from "@/components/sections/CTASection";
import { company } from "@/data/company";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Wrench: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Shield: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ShieldCheck: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Cpu: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const processSteps = [
  {
    number: "1",
    title: "Call or Message",
    description: "Tell us what's broken",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Free Diagnosis",
    description: "We identify the real problem",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Clear Quote",
    description: "No surprises, no hidden fees",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Fast Resolution",
    description: "Most issues fixed same-day",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const { ratings } = company;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - company.foundedYear;
  const [deviceRepair, managedIT, malware, microsoldering] = services;

  return (
    <>
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
              <motion.p
                className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                Device Repair + Managed IT
              </motion.p>
              <motion.h1
                className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                Your devices fixed.
                <span className="relative inline-block">
                  Your business covered.
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
                Whether it&apos;s a broken screen or a business network that needs proper setup, we handle the tech so you can focus on everything else. Fast repairs, real IT support, no runaround.
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Button href="/contact" variant="secondary" size="lg">
                  Get Help Now
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

            {/* Trust Badge Side */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 rounded-3xl blur-3xl" />

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
                {/* Google Rating */}
                <a
                  href={ratings.google.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 mb-8 group"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.floor(ratings.google.score)
                            ? "text-yellow-400"
                            : "text-gray-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div>
                    <span className="font-bold text-2xl">{ratings.google.score}</span>
                    <span className="text-gray-400 text-sm ml-2">
                      ({ratings.google.reviewCount} Google reviews)
                    </span>
                  </div>
                </a>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="font-mono text-3xl font-bold text-primary-light mb-1">{yearsInBusiness}+</div>
                    <div className="text-sm text-gray-400">Years in Business</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="font-mono text-3xl font-bold text-primary-light mb-1">1000+</div>
                    <div className="text-sm text-gray-400">Devices Repaired</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="font-mono text-3xl font-bold text-accent mb-1">Same</div>
                    <div className="text-sm text-gray-400">Day Service</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl">
                    <div className="font-mono text-3xl font-bold text-accent mb-1">Free</div>
                    <div className="text-sm text-gray-400">Diagnostics</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Certified Technicians</p>
                  <div className="flex flex-wrap gap-2">
                    {company.certifications?.map((cert) => (
                      <span
                        key={cert}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Bento Services Grid */}
      <section className="py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
        <Container>
          {/* Section Header */}
          <FadeIn className="max-w-3xl mb-12 lg:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
              Repair for your devices,
              <span className="relative">
                IT support for your business.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent/30"
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
            </h2>
            <p className="text-lg text-gray-600">
              Walk-in device repair or managed IT for your whole company. Two different problems, one shop that handles both.
            </p>
          </FadeIn>

          {/* Bento Grid */}
          <div className="relative">
            {/* Animated ambient glows */}
            <motion.div
              className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] pointer-events-none"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />

            <motion.div
              className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
              }}
            >
              {/* Device Repair - Featured Large Card */}
              <motion.div variants={cardVariants} className="md:col-span-2 lg:col-span-2">
                <Link href={`/services/${deviceRepair.slug}`} className="group relative block h-full">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                  <div className="relative h-full min-h-[300px] lg:min-h-[340px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    {/* Animated glows */}
                    <motion.div
                      className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.25, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    {/* Grid pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                      }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        {iconMap[deviceRepair.icon]}
                      </div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3">
                        {deviceRepair.name}
                      </h3>
                      <p className="text-xl text-white/90 mb-2 font-medium">
                        {deviceRepair.painPoint}
                      </p>
                      <p className="text-gray-400 mb-6 max-w-lg leading-relaxed">
                        {deviceRepair.painDescription}
                      </p>
                      <div className="mt-auto flex items-center gap-4">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold text-sm rounded-full group-hover:bg-accent-dark group-hover:gap-3 transition-all shadow-lg shadow-accent/25">
                          Fix it now
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                        <span className="text-sm text-gray-400">Same-day service available</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Managed IT - Tall Card */}
              <motion.div variants={cardVariants} className="lg:row-span-2">
                <Link href={`/services/${managedIT.slug}`} className="group relative h-full block">
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-white/40 via-primary-light/40 to-white/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                  <div className="relative h-full min-h-[300px] lg:min-h-full bg-gradient-to-b from-primary to-primary-dark rounded-2xl p-8 overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1">
                    {/* Animated circles */}
                    <motion.div
                      className="absolute -top-12 -right-12 w-48 h-48 border border-white/15 rounded-full"
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute -top-6 -right-6 w-32 h-32 border border-white/15 rounded-full"
                      animate={{ scale: [1, 1.08, 1], rotate: [0, -3, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-24 h-24 bg-white/15 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                        {iconMap[managedIT.icon]}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-white mb-3">
                        {managedIT.name}
                      </h3>
                      <p className="text-lg text-white/90 mb-2 font-medium">
                        {managedIT.painPoint}
                      </p>
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {managedIT.painDescription}
                      </p>
                      <div className="py-4 border-t border-white/10 mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-4xl font-bold text-white">24/7</span>
                          <span className="text-white/60 text-sm">monitoring included</span>
                        </div>
                      </div>
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary font-semibold text-sm rounded-full group-hover:bg-gray-100 group-hover:gap-3 transition-all shadow-lg">
                          Learn more
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Malware Removal - Standard Card */}
              <motion.div variants={cardVariants}>
                <Link href={`/services/${malware.slug}`} className="group relative block h-full">
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/50 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="relative h-full min-h-[280px] bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden transition-all duration-300 shadow-lg group-hover:border-accent/50 hover:shadow-xl hover:-translate-y-1">
                    <motion.div
                      className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                        {iconMap[malware.icon]}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                        {malware.name}
                      </h3>
                      <p className="text-base text-gray-700 mb-2 font-medium">
                        {malware.painPoint}
                      </p>
                      <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                        {malware.painDescription}
                      </p>
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full group-hover:bg-accent group-hover:text-white transition-all">
                          Get clean
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Microsoldering - Standard Card */}
              <motion.div variants={cardVariants}>
                <Link href={`/services/${microsoldering.slug}`} className="group relative block h-full">
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/50 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                  <div className="relative h-full min-h-[280px] bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden transition-all duration-300 shadow-lg group-hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                    <motion.div
                      className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <div className="relative z-10 h-full flex flex-col">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        {iconMap[microsoldering.icon]}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">
                        {microsoldering.name}
                      </h3>
                      <p className="text-base text-gray-700 mb-2 font-medium">
                        {microsoldering.painPoint}
                      </p>
                      <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                        {microsoldering.painDescription}
                      </p>
                      <div className="py-3 border-t border-gray-100 mb-2">
                        <p className="text-xs text-gray-500">
                          <span className="font-semibold text-gray-700">Board-level repairs</span> most shops can&apos;t do
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                          Can we fix it?
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* How We Work Process Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <Container>
          <FadeIn className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              How it works
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
              Simple from the first call.
            </h2>
          </FadeIn>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 1 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                {/* Connector line (hidden on mobile, last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
                )}

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                    <span className="font-mono text-2xl font-bold">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Enhanced Consultation Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
        {/* Tech grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Animated glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <Container size="md" className="relative z-10">
          <FadeIn className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Not sure where to start?
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Give us 15 minutes.
              <span className="block mt-2 text-primary-light">We'll figure it out together.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Tell us what&apos;s going on and we'll tell you exactly what needs to happen. No commitment, no pressure. Just a straight answer from someone who actually knows what they&apos;re doing.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {company.certifications?.map((cert) => (
                <span
                  key={cert}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
                >
                  {cert}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {company.phone}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Request a Free Consultation
              </a>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to stop winging it on IT?"
        description="We work with individuals and businesses across the San Gabriel Valley. Bring in your device or give us a call about your IT needs."
        primaryCTA={{ label: "Get Your Free IT Assessment", href: "/contact" }}
        secondaryCTA={{ label: `Call ${company.phone}`, href: `tel:${company.phone.replace(/\D/g, "")}` }}
        variant="dark"
      />
    </>
  );
}
