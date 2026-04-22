import Link from "next/link";
import { Container, Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container size="sm">
        <div className="text-center">
          <p className="text-primary font-semibold text-lg mb-2">404</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
            moved or doesn&apos;t exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg">
              Go Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/services"
                className="text-primary hover:underline"
              >
                Our Services
              </Link>
              <Link
                href="/locations"
                className="text-primary hover:underline"
              >
                Service Areas
              </Link>
              <Link
                href="/about"
                className="text-primary hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/blog"
                className="text-primary hover:underline"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
