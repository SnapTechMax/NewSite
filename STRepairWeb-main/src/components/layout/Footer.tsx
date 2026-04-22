import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";
import { company } from "@/data/company";
import { footerNavigation } from "@/data/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logo-icon.png"
                  alt="Snap Tech Repair"
                  width={40}
                  height={32}
                  className="w-10 h-8 object-contain"
                />
                <span className="font-serif text-xl font-bold tracking-tight text-white">
                  Snap Tech<span className="text-primary"> Repair</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-4">
                Your trusted local IT partner serving small businesses in the
                San Gabriel Valley. Fast, reliable, affordable.
              </p>
              <div className="space-y-2">
                <p>
                  <a
                    href={`tel:${company.phone.replace(/\D/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {company.phone}
                  </a>
                </p>
                <p className="text-gray-400">
                  {company.address.street}
                  <br />
                  {company.address.city}, {company.address.state}{" "}
                  {company.address.zip}
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Service Areas</h3>
              <ul className="space-y-2">
                {footerNavigation.locations.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}, CA
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="text-primary hover:text-primary-light transition-colors"
                  >
                    View All Locations →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links & Hours */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-4">Company</h3>
              <ul className="space-y-2 mb-6">
                {footerNavigation.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-2">Hours</h3>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>Tue-Sun: {company.hours.weekdays}</li>
                <li>Mon: {company.hours.monday}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <Container>
          <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {company.name}. All rights reserved.
            </p>
            <div className="flex gap-4">
              {company.social.facebook && (
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {company.social.twitter && (
                <a
                  href={company.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              )}
              {company.social.linkedin && (
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {company.social.yelp && (
                <a
                  href={company.social.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                  aria-label="Yelp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 011.86 3.017c.239.688-.13 1.405-.19 1.694zM15.73 15.2l-3.93-3.166c-.696-.56-.17-1.64.714-1.474l5.347.997c.616.116 1.005.728.882 1.388-.233 1.256-.898 2.29-1.65 2.56-.482.173-1.007.07-1.363-.305zm-2.09 1.67l1.323 5.1c.166.638-.304 1.254-.96 1.254h-.112c-1.22 0-2.376-.23-3.46-.63-.615-.227-.86-1.01-.508-1.58l2.486-3.91c.468-.732 1.536-.627 1.231-.234zm-3.964-2.806l-4.503 2.18c-.608.295-1.322-.186-1.206-.854.178-1.023.712-2.046 1.388-2.81.416-.47 1.097-.5 1.595-.118l3.536 2.66c.6.452.215 1.372-.81.942zm.69-3.084l-.733-5.16c-.092-.65.45-1.214 1.1-1.145 1.208.13 2.36.49 3.46 1.085.595.323.756 1.106.332 1.617L11.5 11.79c-.518.625-1.47.31-1.13-.81z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
