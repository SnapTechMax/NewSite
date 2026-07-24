"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui";
import { company } from "@/data/company";
import { mainNavigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-icon.png"
              alt="Snap Tech Repair"
              width={40}
              height={32}
              className="w-10 h-8 object-contain"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-gray-900">
              Snap Tech<span className="text-primary"> Repair</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {mainNavigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.href)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="text-[0.9375rem] font-medium tracking-wide text-gray-700 hover:text-primary transition-colors"
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 inline-block rounded-full bg-primary px-1.5 py-0.5 align-middle text-[0.625rem] font-bold uppercase leading-none tracking-wide text-white">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <svg
                      className="inline-block w-4 h-4 ml-1"
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
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.href && (
                  <div className="absolute top-full left-0 pt-2 w-56">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA and Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${company.phone.replace(/\D/g, "")}`}
              className="text-gray-700 font-medium hover:text-primary transition-colors"
            >
              {company.phone}
            </a>
            <Button href="/contact" size="sm">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-screen pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block py-2 text-gray-700 font-medium hover:text-primary"
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1.5 inline-block rounded-full bg-primary px-1.5 py-0.5 align-middle text-[0.625rem] font-bold uppercase leading-none tracking-wide text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1 text-gray-600 hover:text-primary text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <a
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                className="block py-2 text-primary font-semibold"
              >
                {company.phone}
              </a>
              <Button href="/contact" className="w-full mt-2">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
