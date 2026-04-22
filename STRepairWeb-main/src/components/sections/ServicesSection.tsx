"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, FadeIn } from "@/components/ui";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

interface ServicesSectionProps {
  className?: string;
}

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
  Computer: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export function ServicesSection({ className }: ServicesSectionProps) {
  const [deviceRepair, managedIT, malware, microsoldering, customPCBuilds] = services;

  return (
    <section className={cn("py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden", className)}>
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* Horizontal and vertical lines */}
              <path d="M0 50h35M65 50h35M50 0v35M50 65v35" stroke="currentColor" strokeWidth="0.5" fill="none" />
              {/* Diagonal connectors */}
              <path d="M35 50l15-15M50 35l15 15M65 50l-15 15M50 65l-15-15" stroke="currentColor" strokeWidth="0.3" fill="none" />
              {/* Center node */}
              <circle cx="50" cy="50" r="4" fill="currentColor" />
              {/* Corner nodes */}
              <circle cx="0" cy="50" r="2" fill="currentColor" />
              <circle cx="100" cy="50" r="2" fill="currentColor" />
              <circle cx="50" cy="0" r="2" fill="currentColor" />
              <circle cx="50" cy="100" r="2" fill="currentColor" />
              {/* Small decorative dots */}
              <circle cx="35" cy="50" r="1.5" fill="currentColor" />
              <circle cx="65" cy="50" r="1.5" fill="currentColor" />
              <circle cx="50" cy="35" r="1.5" fill="currentColor" />
              <circle cx="50" cy="65" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-[5%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-[10%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Header - Dark theme */}
        <FadeIn className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-light mb-4">
            Device Repair + Managed IT
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
            Your local IT shop for{" "}
            <span className="relative">
              devices and businesses.
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-accent/50"
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
          <p className="text-lg text-white/70">
            Walk-in repair for broken devices. Managed IT for businesses that need someone reliable on their side. We handle both, and we handle them well.
          </p>
        </FadeIn>

        {/* Main Layout - Image on right, cards on left */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Service Cards Column */}
          <div className="lg:col-span-7 relative">
            <motion.div
              className="relative grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
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

              {/* Featured Card 1 - Device Repair (spans 2 cols) */}
              <motion.div variants={cardVariants} className="md:col-span-2">
                <Link
                  href={`/services/${deviceRepair.slug}`}
                  className="group relative block h-full"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  {/* Inner border glow */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full min-h-[220px] bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 overflow-hidden transition-all duration-500 group-hover:border-white/20 hover:-translate-y-1">
                    {/* Animated decorative elements */}
                    <motion.div
                      className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-48 h-48 bg-accent/25 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.35, 0.25] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    {/* Grid pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '32px 32px'
                      }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with glow */}
                      <div className="relative w-12 h-12 mb-4">
                        <div className="absolute inset-0 bg-primary/50 rounded-xl blur-lg group-hover:bg-primary/70 transition-colors" />
                        <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          {iconMap[deviceRepair.icon]}
                        </div>
                      </div>

                      {/* Service name as headline */}
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                        {deviceRepair.name}
                      </h3>
                      {/* Pain point as subhead */}
                      <p className="text-lg text-white/80 mb-2 leading-tight">
                        {deviceRepair.painPoint}
                      </p>
                      <p className="text-white/60 mb-4 leading-relaxed">
                        {deviceRepair.painDescription}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold text-sm rounded-full group-hover:bg-accent-dark group-hover:gap-3 transition-all shadow-lg shadow-accent/30 group-hover:shadow-accent/50">
                          Get Same-Day Repair
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card - Managed IT */}
              <motion.div variants={cardVariants}>
                <Link
                  href={`/services/${managedIT.slug}`}
                  className="group relative h-full block"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-[2px] bg-gradient-to-b from-primary-light to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  {/* Inner border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-b from-primary-light/60 to-primary/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full min-h-[260px] bg-gradient-to-b from-primary/20 to-primary/10 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-primary/50 hover:-translate-y-1">
                    {/* Animated decorative circles */}
                    <motion.div
                      className="absolute -top-12 -right-12 w-48 h-48 border border-white/10 rounded-full"
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="absolute bottom-8 left-8 w-24 h-24 bg-primary/30 rounded-full blur-xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with glow */}
                      <div className="relative w-10 h-10 mb-4">
                        <div className="absolute inset-0 bg-primary-light/50 rounded-xl blur-md group-hover:bg-primary-light/70 transition-colors" />
                        <div className="relative w-full h-full bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                          {iconMap[managedIT.icon]}
                        </div>
                      </div>

                      {/* Service name as headline */}
                      <h3 className="font-serif text-xl font-bold text-white mb-1 leading-tight">
                        {managedIT.name}
                      </h3>
                      {/* Pain point as subhead */}
                      <p className="text-sm text-white/70 mb-2 leading-tight">
                        {managedIT.painPoint}
                      </p>

                      {/* Stats */}
                      <div className="py-3 border-t border-white/10 mt-auto">
                        <div className="flex items-baseline gap-2">
                          <span className="font-mono text-2xl font-bold text-white">24/7</span>
                          <span className="text-white/50 text-xs">monitoring</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-end mt-3">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/10 text-white font-semibold text-sm rounded-full border border-white/20 group-hover:bg-white group-hover:text-primary group-hover:gap-2 transition-all">
                          See Pricing
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card - Malware Removal */}
              <motion.div variants={cardVariants}>
                <Link
                  href={`/services/${malware.slug}`}
                  className="group relative block h-full"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-accent to-accent/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  {/* Inner border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/60 to-accent/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full min-h-[220px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-accent/50 hover:-translate-y-1">
                    {/* Animated glow */}
                    <motion.div
                      className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with glow */}
                      <div className="relative w-10 h-10 mb-3">
                        <div className="absolute inset-0 bg-accent/40 rounded-lg blur-md group-hover:bg-accent/60 transition-colors" />
                        <div className="relative w-full h-full bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          {iconMap[malware.icon]}
                        </div>
                      </div>

                      {/* Service name as headline */}
                      <h3 className="font-serif text-lg font-bold text-white mb-1 leading-tight">
                        {malware.name}
                      </h3>
                      {/* Pain point as subhead */}
                      <p className="text-sm text-white/60 mb-2 leading-tight">
                        {malware.painPoint}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent/20 text-accent font-semibold text-sm rounded-full border border-accent/30 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                          Remove Malware
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card - Microsoldering */}
              <motion.div variants={cardVariants}>
                <Link
                  href={`/services/${microsoldering.slug}`}
                  className="group relative block h-full"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-primary to-primary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  {/* Inner border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary/60 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full min-h-[220px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-primary/50 hover:-translate-y-1">
                    {/* Animated glow */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with glow */}
                      <div className="relative w-10 h-10 mb-3">
                        <div className="absolute inset-0 bg-primary/40 rounded-lg blur-md group-hover:bg-primary/60 transition-colors" />
                        <div className="relative w-full h-full bg-primary/20 rounded-lg flex items-center justify-center text-primary-light group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          {iconMap[microsoldering.icon]}
                        </div>
                      </div>

                      {/* Service name as headline */}
                      <h3 className="font-serif text-lg font-bold text-white mb-1 leading-tight">
                        {microsoldering.name}
                      </h3>
                      {/* Pain point as subhead */}
                      <p className="text-sm text-white/60 mb-2 leading-tight">
                        {microsoldering.painPoint}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/20 text-primary-light font-semibold text-sm rounded-full border border-primary/30 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                          Free Diagnosis
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Card - Custom PC Builds */}
              <motion.div variants={cardVariants}>
                <Link
                  href={`/services/${customPCBuilds.slug}`}
                  className="group relative block h-full"
                >
                  {/* Outer glow on hover */}
                  <div className="absolute -inset-[2px] bg-gradient-to-br from-accent via-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                  {/* Inner border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-accent/60 via-primary/40 to-accent/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full min-h-[220px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-500 group-hover:border-accent/50 hover:-translate-y-1">
                    {/* Animated glow */}
                    <motion.div
                      className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    />

                    <div className="relative z-10 h-full flex flex-col">
                      {/* Icon with glow */}
                      <div className="relative w-10 h-10 mb-3">
                        <div className="absolute inset-0 bg-accent/40 rounded-lg blur-md group-hover:bg-accent/60 transition-colors" />
                        <div className="relative w-full h-full bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          {iconMap[customPCBuilds.icon]}
                        </div>
                      </div>

                      {/* Service name as headline */}
                      <h3 className="font-serif text-lg font-bold text-white mb-1 leading-tight">
                        {customPCBuilds.name}
                      </h3>
                      {/* Pain point as subhead */}
                      <p className="text-sm text-white/60 mb-2 leading-tight">
                        {customPCBuilds.painPoint}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto flex items-center justify-end">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent/20 text-accent font-semibold text-sm rounded-full border border-accent/30 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                          Build My PC
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

          {/* Technician Image Column */}
          <motion.div
            className="lg:col-span-5 relative hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sticky top-24 h-[600px] rounded-2xl overflow-hidden border border-white/10">
              {/* Glow effect behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 blur-2xl" />

              <div className="relative h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero-technician.jpg"
                  alt="Professional IT technician working on computer repair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 0px, 40vw"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                {/* Caption with glassmorphism */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <p className="font-semibold text-lg text-white">Real skills, honest answers.</p>
                    <p className="text-white/70 text-sm">San Dimas-based. CompTIA certified.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
