import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const action = async (formData: FormData) => {
  const email = formData.get("email");
  console.log(email);
};

export function NewsletterForm() {
  return (
    <form className="flex gap-2">
      <Input type="email" placeholder="Your email" className="max-w-[220px]" />
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
