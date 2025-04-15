import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
// import { Footer } from "@/components/footer";
import { Footer } from "@/components/layout/footer";
import {
  ArrowRight,
  Scan,
  Smartphone,
  Layers,
  Database,
  Zap,
  Award,
} from "lucide-react";
import { AnimatedGradientBackground } from "@/components/layout/animations/animated-gradient-background";
import { AnimatedSvg } from "@/components/animated-svg";
import { BreakoutScene } from "@/components/layout/animations/breakout-scene";
import { PricingCard } from "@/components/pricing-card";
import { ServicePackage } from "@/components/serice-package";
import { TestimonialCard } from "@/components/testimonial-scene";
import { SplineScene } from "@/components/spline-scene";
import { Hero } from "@/components/layout/marketing/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Hero />
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              How Does It Work?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to bring your beverage cans to life with
              augmented reality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 -mt-8 -mr-8 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-xl"></div>
              <CardHeader>
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Scan className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>1. Scan a QR Code</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Customers use their smartphone camera to scan the provided QR
                  code on the can or packaging.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 -mt-8 -mr-8 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full blur-xl"></div>
              <CardHeader>
                <div className="bg-secondary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>2. Open the AR Page</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  They&apos;re taken to a unique subdomain link—no app install
                  required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 -mt-8 -mr-8 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-xl"></div>
              <CardHeader>
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>3. Experience the 3D Scene</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  They see the AR content overlay on the actual can through
                  their phone camera, powered by our custom NFT marker tracking.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <AnimatedGradientBackground
          className="absolute inset-0 z-0 opacity-20"
          variant="secondary"
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Features That Elevate Your Brand
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful tools to create engaging augmented reality experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Premade 3D Scene Library</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose from a range of customizable AR templates to get
                  started fast.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Scene Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Design your own 3D experiences with our easy editor—every
                  scene generates a unique QR code for direct access.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unique Subdomains</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Maintain brand consistency with personalized URLs for each AR
                  scene.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom NFT Marker Upload</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Link your product packaging to unique NFT markers for secure
                  and verifiable AR experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimized for Multiple Can Sizes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automatically adjust scene alignment for small, medium, or
                  large cans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Collaborate with your entire marketing and design team within
                  a single, unified dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
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
      </section>

      {/* Services Section */}
      <section className="relative py-24">
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
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The leading solution for AR beverage marketing
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <Smartphone className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">
                  Browser-Based, No App Download
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Frictionless experiences mean more customers actually engage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <Zap className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">
                  Easy Setup & Onboarding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Start creating scenes in minutes—no coding required.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Scalable for Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our infrastructure supports everything from local breweries to
                  international beverage brands.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-xl">Trusted by Experts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Developed by AR and 3D professionals who understand the
                  beverage industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24">
        <AnimatedGradientBackground className="absolute inset-0 z-0 opacity-10" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from breweries and beverage makers who have transformed their
              marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="We saw a 300% increase in social media shares after using this platform for our new summer brew can design."
              author="John Doe"
              role="Founder of Example Brewery"
              image="/placeholder.svg?height=80&width=80"
            />

            <TestimonialCard
              quote="Our customers absolutely loved scanning the can. It was the best marketing investment we've made."
              author="Jane Smith"
              role="Marketing Director at Sample Beverage Co."
              image="/placeholder.svg?height=80&width=80"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary/80 via-primary to-primary/80 p-8 md:p-12 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                  Be the First to Pour AR Magic into Your Packaging
                </h2>
                <p className="text-white/90 text-lg mb-6">
                  Join our exclusive Beta Testing Round and help shape the
                  future of AR marketing. Sign up now to get early access,
                  priority support, and a chance to influence new features.
                </p>
                <Button size="lg" variant="secondary" className="gap-2">
                  Request Beta Access <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto">
                <AnimatedSvg type="rocket" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
