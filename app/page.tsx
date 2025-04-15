import { CTA } from "@/components/layout/marketing/cta";
import { Footer } from "@/components/layout/footer";
import { HowItWorks } from "@/components/layout/marketing/how-it-works";
import { Hero } from "@/components/layout/marketing/hero";
import { Testimonials } from "@/components/layout/marketing/testimonials";
import { Features } from "@/components/layout/marketing/features";
import { Services } from "@/components/layout/marketing/services";
import { Pricing } from "@/components/layout/marketing/pricing";
import { Benefits } from "@/components/layout/marketing/benefits";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <Hero />
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 bg-white">
        <HowItWorks />
      </section>

      {/* Features Section */}
      <section className="relative py-24">
        <Features />
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white">
        <Pricing />
      </section>

      {/* Services Section */}
      <section className="relative py-24">
        <Services />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <Benefits />
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24">
        <Testimonials />
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <CTA />
      </section>

      {/* Footer Section */}
      <section>
        <Footer />
      </section>
    </main>
  );
}
