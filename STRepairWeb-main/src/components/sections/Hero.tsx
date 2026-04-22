"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type HeroVariant = "home" | "service" | "location" | "page" | "services";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: HeroVariant;
  className?: string;
}

const variantStyles: Record<HeroVariant, string> = {
  home: "py-20 lg:py-32 bg-gray-900 text-white",
  service: "py-16 lg:py-24 bg-primary text-white",
  location: "py-16 lg:py-24 bg-gray-800 text-white",
  page: "py-12 lg:py-20 bg-gray-50",
  services: "py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white",
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "page",
  className,
}: HeroProps) {
  const isLight = variant === "page";
  const hasGridOverlay = variant === "services";

  return (
    <section className={cn(variantStyles[variant], hasGridOverlay && "relative overflow-hidden", className)}>
      {/* Tech grid pattern overlay for services variant */}
      {hasGridOverlay && (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.07)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        </>
      )}
      <Container>
        <motion.div
          className={cn("max-w-3xl mx-auto text-center", hasGridOverlay && "relative z-10")}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {subtitle && (
            <motion.p
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.1em] mb-4",
                isLight ? "text-primary" : "text-primary-light"
              )}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              {subtitle}
            </motion.p>
          )}
          <motion.h1
            className={cn(
              "font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6",
              isLight ? "text-gray-900" : "text-white"
            )}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className={cn(
                "text-lg md:text-xl mb-8",
                isLight ? "text-gray-600" : "text-gray-200"
              )}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              {description}
            </motion.p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              {primaryCTA && (
                <Button
                  href={primaryCTA.href}
                  variant={isLight ? "primary" : "secondary"}
                  size="lg"
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  href={secondaryCTA.href}
                  variant={isLight ? "outline" : "outline"}
                  size="lg"
                  className={!isLight ? "border-white text-white hover:bg-white hover:text-gray-900" : ""}
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
