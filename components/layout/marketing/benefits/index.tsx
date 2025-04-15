import { Card } from "@/components/ui/card";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Smartphone, Zap, Database, Award } from "lucide-react";

export function Benefits() {
  return (
    <div>
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
              <CardTitle className="text-xl">Easy Setup & Onboarding</CardTitle>
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
                Developed by AR and 3D professionals who understand the beverage
                industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
