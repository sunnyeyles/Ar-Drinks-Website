import { ServicePackage } from "@/components/layout/marketing/services/service-package";
import { AnimatedGradientBackground } from "../../animations/animated-gradient-background";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <div>
      <AnimatedGradientBackground
        className="absolute inset-0 z-0 opacity-20"
        variant="tertiary"
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Need More Than a Template? We&apos;ve Got You Covered.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of AR specialists and network of award-winning 3D artists
            are here to help you create truly one-of-a-kind experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServicePackage
            title="Bronze"
            description="Minor tweaks to existing templates"
            features={[
              "One-on-one consultation session",
              "Quick turnaround",
              "Basic customization",
            ]}
          />

          <ServicePackage
            title="Silver"
            description="Original 3D artwork designed to match your brand"
            features={[
              "Advanced interactive elements",
              "Dedicated project manager",
              "Two revision rounds",
            ]}
          />

          <ServicePackage
            title="Gold"
            description="Fully tailored 3D environment"
            features={[
              "Comprehensive brand integration",
              "Ongoing support and updates",
              "Unlimited revisions",
              "Priority development",
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="gap-2">
            Contact Our 3D Experts <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
