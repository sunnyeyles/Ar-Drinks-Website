import { ReactNode } from "react";
export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>This is the legal layout</div>
      {children}
    </div>
  );
}
