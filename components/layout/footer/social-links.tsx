import Link from "next/link";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href="#" className="text-muted-foreground hover:text-foreground">
        <span className="sr-only">Twitter</span>
        <Twitter className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground">
        <span className="sr-only">Instagram</span>
        <Instagram className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground">
        <span className="sr-only">LinkedIn</span>
        <Linkedin className="h-5 w-5" />
      </Link>
    </div>
  );
}
