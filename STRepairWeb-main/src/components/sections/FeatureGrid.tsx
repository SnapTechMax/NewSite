import { Container } from "@/components/ui";
import { Feature } from "@/types";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeatureGrid({
  title,
  subtitle,
  features,
  columns = 3,
  className,
}: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {subtitle && (
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight text-gray-900">
                {title}
              </h2>
            )}
          </div>
        )}
        <div className={cn("grid grid-cols-1 gap-8", gridCols[columns])}>
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <svg
                  className="w-6 h-6"
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
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
