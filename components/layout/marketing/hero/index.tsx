import { AnimatedGradientBackground } from "@/components/layout/animations/animated-gradient-background";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BreakoutScene } from "@/components/layout/animations/breakout-scene";
import { SplineScene } from "@/components/layout/animations/spline-scene";
import { AnimatedSvg } from "@/components/layout/animations/animated-svg";

export function Hero() {
  return (
    <div>
      <AnimatedGradientBackground className="absolute inset-0 z-0" />
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
              Beta Access Available
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Bring Your Beverage Cans to Life with Augmented Reality
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Empower breweries and beverage makers to excite customers with
              interactive 3D scenes right from their smartphones.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Request Early Access <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px]">
            {/* Placeholder for Spline.design scene */}
            <SplineScene />

            {/* Animated SVG that appears to break out of container */}
            <div className="absolute -right-16 -bottom-20 w-64 h-64">
              <AnimatedSvg type="can" />
            </div>
          </div>
        </div>
      </div>

      {/* 3D element breaking out of section */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
        <BreakoutScene />
      </div>
    </div>
  );
}
