"use client";

import { motion } from "framer-motion";
import { Container, FadeIn } from "@/components/ui";
import { ServiceCard } from "./ServiceCard";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

interface ServiceGridProps {
  title?: string;
  subtitle?: string;
  showAll?: boolean;
  limit?: number;
  variant?: "compact" | "detailed";
  className?: string;
}

export function ServiceGrid({
  title = "Our Services",
  subtitle,
  showAll = true,
  limit = 4,
  variant = "compact",
  className,
}: ServiceGridProps) {
  const displayServices = showAll ? services : services.slice(0, limit);

  return (
    <section className={cn("py-16 lg:py-24 relative overflow-hidden", className)}>
      {/* Decorative blur circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <Container className="relative z-10">
        <FadeIn className="text-center mb-12">
          {subtitle && (
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-gray-900">
            {title}
          </h2>
        </FadeIn>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {displayServices.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <ServiceCard service={service} variant={variant} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
