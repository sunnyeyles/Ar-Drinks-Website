import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSvg } from "@/components/layout/animations/animated-svg";
export function CTA() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-primary/80 via-primary to-primary/80 p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
                Be the First to Pour AR Magic into Your Packaging
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Join our exclusive Beta Testing Round and help shape the future
                of AR marketing. Sign up now to get early access, priority
                support, and a chance to influence new features.
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
    </div>
  );
}
