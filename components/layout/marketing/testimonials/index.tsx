import { TestimonialCard } from "@/components/layout/marketing/testimonials/testimonial-card";
import { AnimatedGradientBackground } from "@/components/layout/animations/animated-gradient-background";
export function Testimonials() {
  return (
    <div>
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
    </div>
  );
}
