import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui";
import { Service } from "@/types";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: Service;
  variant?: "compact" | "detailed";
  className?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  Wrench: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Shield: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ShieldCheck: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Cpu: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  ),
};

export function ServiceCard({ service, variant = "compact", className }: ServiceCardProps) {
  const icon = iconMap[service.icon] || iconMap.Wrench;

  if (variant === "compact") {
    return (
      <Link href={`/services/${service.slug}`} className="block group">
        <div className="relative">
          {/* Gradient border glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
          <Card hover className={cn("relative h-full overflow-hidden", className)} padding="none">
            {service.image && (
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                {icon}
              </div>
              <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.tagline}</p>
              <span className="text-primary font-medium group-hover:underline">
                Learn more →
              </span>
            </div>
          </Card>
        </div>
      </Link>
    );
  }

  return (
    <div className="relative group h-full">
      {/* Gradient border glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-75 blur transition-all duration-300" />
      <Card className={cn("relative h-full overflow-hidden", className)} padding="none">
        {service.image && (
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
            {icon}
          </div>
          <h3 className="font-serif text-xl font-semibold leading-snug tracking-tight text-gray-900 mb-2">{service.name}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-900 mb-2">Key Features</h4>
          <ul className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature) => (
              <li key={feature.title} className="flex items-start gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {feature.title}
              </li>
            ))}
          </ul>
          <Link
            href={`/services/${service.slug}`}
            className="text-primary font-medium hover:underline"
          >
            Learn more about {service.name} →
          </Link>
        </div>
      </Card>
    </div>
  );
}
