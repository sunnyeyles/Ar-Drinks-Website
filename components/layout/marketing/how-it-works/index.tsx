import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Scan, Smartphone, Layers } from "lucide-react";

export function HowItWorks() {
  return (
    <div>
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
                They see the AR content overlay on the actual can through their
                phone camera, powered by our custom NFT marker tracking.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
