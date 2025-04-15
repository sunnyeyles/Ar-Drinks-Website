import { PricingCard } from "@/components/layout/marketing/pricing/pricing-card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Flexible Plans for Every Size of Brewery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to match your business needs and growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="$99"
            description="Perfect for small breweries testing AR marketing"
            features={[
              "Up to 3 Scenes",
              "2 Team Members",
              "2,000 Scene Views per Month",
              "Basic Analytics",
              "Email Support",
            ]}
            ctaText="Get Started"
            popular={false}
          />

          <PricingCard
            title="Pro"
            price="$299"
            description="Ideal for medium to large breweries looking to offer multiple AR campaigns"
            features={[
              "Up to 10 Scenes",
              "5 Team Members",
              "10,000 Scene Views per Month",
              "Advanced Analytics",
              "Priority Support",
              "Custom Subdomains",
            ]}
            ctaText="Go Pro"
            popular={true}
          />

          <PricingCard
            title="Enterprise"
            price="Custom"
            description="Designed for national and global brands requiring advanced support and higher view counts"
            features={[
              "Unlimited Scenes",
              "Unlimited Team Members",
              "Custom Scene Views per Month",
              "Enterprise Analytics",
              "Dedicated Support",
              "White-label Options",
              "API Access",
            ]}
            ctaText="Contact Sales"
            popular={false}
          />
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Compare Plans & Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
}
