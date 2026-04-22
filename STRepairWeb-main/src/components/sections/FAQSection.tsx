"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, FadeIn } from "@/components/ui";
import { FAQ } from "@/types";
import { cn } from "@/lib/utils";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={cn("py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50/80 to-gray-50 relative overflow-hidden", className)}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Question mark decorations */}
        <motion.div
          className="absolute top-16 left-[8%] text-primary/[0.06] font-serif text-[120px] font-bold select-none"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          ?
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-[10%] text-accent/[0.05] font-serif text-[100px] font-bold select-none"
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ?
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[5%] text-primary/[0.03] font-serif text-[80px] font-bold select-none"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ?
        </motion.div>

        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0v40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-900"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-grid)" />
        </svg>
      </div>

      <Container size="md" className="relative z-10">
        <FadeIn className="text-center mb-12">
          {subtitle && (
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {subtitle}
            </motion.p>
          )}
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-gray-900">
            {title}
          </h2>
        </FadeIn>
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300",
                  openIndex === index
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-500"
                )}>
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
