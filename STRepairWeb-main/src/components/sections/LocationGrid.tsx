"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Card, CardContent, FadeIn } from "@/components/ui";
import { locations } from "@/data/locations";
import { cn } from "@/lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

interface LocationGridProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function LocationGrid({
  title = "Areas We Serve",
  subtitle,
  className,
}: LocationGridProps) {
  return (
    <section className={cn("py-16 lg:py-24 relative overflow-hidden", className)}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

        {/* Floating location pin decorations */}
        <motion.div
          className="absolute top-12 left-[10%] text-primary/10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-16 right-[15%] text-accent/10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-[5%] text-primary/5"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </motion.div>

        {/* Dotted line path decoration */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="location-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#location-dots)" />
        </svg>
      </div>

      <Container className="relative z-10">
        <FadeIn className="text-center mb-12">
          {subtitle && (
            <motion.p
              className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-primary mb-4"
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
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Serving businesses and residents throughout the San Gabriel Valley with fast, reliable IT support
          </p>
        </FadeIn>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05, delayChildren: 0.1 },
            },
          }}
        >
          {locations.map((location) => (
            <motion.div key={location.id} variants={cardVariants}>
            <Link
              href={`/locations/${location.slug}`}
              className="block group"
            >
              <Card
                variant="bordered"
                padding="sm"
                hover
                className="text-center h-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <CardContent className="py-3">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-primary group-hover:text-white transition-colors"
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
                  </div>
                  <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors mt-2">
                    {location.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {location.state}
                  </p>
                </CardContent>
              </Card>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
