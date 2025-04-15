import { NewsletterForm } from "./newsletter-form";
import { FooterLinks } from "./footer-links";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Links */}
          <FooterLinks
            title="Company"
            links={[
              { href: "/about", label: "About Us" },
              { href: "/careers", label: "Careers" },
              { href: "/blog", label: "Blog" },
              { href: "/press", label: "Press" },
            ]}
          />

          {/* Resources Links */}
          <FooterLinks
            title="Resources"
            links={[
              { href: "/resources/documentation", label: "Documentation" },
              { href: "/resources/help", label: "Help Center" },
              { href: "/resources/tutorials", label: "Tutorials" },
              { href: "/resources/case-studies", label: "Case Studies" },
            ]}
          />

          {/* Legal Links */}
          <FooterLinks
            title="Legal"
            links={[
              { href: "/legal/privacy-policy", label: "Privacy Policy" },
              { href: "/legal/terms", label: "Terms of Service" },
              { href: "/legal/cookie-policy", label: "Cookie Policy" },
            ]}
          />

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AR Beverage App. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
