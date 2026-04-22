"use client";

import { motion } from "framer-motion";
import { Container, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type CTAVariant = "primary" | "secondary" | "dark";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: CTAVariant;
  className?: string;
}

const variantStyles: Record<CTAVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-accent",
  dark: "bg-gray-900",
};

export function CTASection({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "primary",
  className,
}: CTASectionProps) {
  return (
    <section className={cn("py-16 lg:py-20", variantStyles[variant], className)}>
      <Container>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-white/90 mb-8">{description}</p>
          )}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Button
              href={primaryCTA.href}
              variant={variant === "secondary" ? "primary" : "secondary"}
              size="lg"
            >
              {primaryCTA.label}
            </Button>
            {secondaryCTA && (
              <Button
                href={secondaryCTA.href}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
