import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AnimatedGradientBackground } from "../../animations/animated-gradient-background";

export function Features() {
  return (
    <div>
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
                Choose from a range of customizable AR templates to get started
                fast.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Scene Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Design your own 3D experiences with our easy editor—every scene
                generates a unique QR code for direct access.
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
                Link your product packaging to unique NFT markers for secure and
                verifiable AR experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Optimized for Multiple Can Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Automatically adjust scene alignment for small, medium, or large
                cans.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Collaborate with your entire marketing and design team within a
                single, unified dashboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
