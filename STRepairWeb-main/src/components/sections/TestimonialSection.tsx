"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container, FadeIn } from "@/components/ui";
import { testimonials } from "@/data/company";
import { cn } from "@/lib/utils";

interface TestimonialSectionProps {
  className?: string;
}

export function TestimonialSection({ className }: TestimonialSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  return (
    <section className={cn("py-16 lg:py-24 bg-white relative overflow-hidden", className)}>

      <Container size="lg" className="relative z-10">
        <FadeIn className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            What Our Clients Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-gray-900">
            Trusted by Businesses Across the Valley
          </h2>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 lg:p-12 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Author Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden ring-2 ring-gray-200">
                  {testimonial.author.photo ? (
                    <Image
                      src={testimonial.author.photo}
                      alt={testimonial.author.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: testimonial.author.avatarColor ?? "#c5c5c5" }}
                    >
                      <span className="font-sans text-3xl lg:text-4xl font-medium text-gray-800 select-none">
                        {testimonial.author.name.split(" ").map((n: string) => n.charAt(0)).join("").slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Quote & Attribution */}
              <div className="flex-1">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {testimonial.source === "google" && (
                    <span className="ml-2 flex items-center gap-1 text-sm text-gray-500">
                      via
                      <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                      Google
                    </span>
                  )}
                  {testimonial.source === "yelp" && (
                    <span className="ml-2 text-sm text-gray-500">via Yelp</span>
                  )}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl lg:text-2xl text-gray-900 leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author.name}</p>
                  <p className="text-gray-600">
                    {testimonial.author.title}
                    {testimonial.author.company && `, ${testimonial.author.company}`}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.author.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
          </AnimatePresence>

          {/* Testimonial Navigation Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === activeIndex
                      ? "bg-primary"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
