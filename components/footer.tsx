// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// export function Footer() {
//   return (
//     <footer className="bg-muted py-12">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Company</h3>
//             <div className="flex flex-col space-y-2">
//               <Link
//                 href="/about"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/careers"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Careers
//               </Link>
//               <Link
//                 href="/blog"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Blog
//               </Link>
//               <Link
//                 href="/press"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Press
//               </Link>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Resources</h3>
//             <div className="flex flex-col space-y-2">
//               <Link
//                 href="/resources/documentation"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Documentation
//               </Link>
//               <Link
//                 href="/resources/help"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Help Center
//               </Link>
//               <Link
//                 href="/resources/tutorials"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Tutorials
//               </Link>
//               <Link
//                 href="/resources/case-studies"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Case Studies
//               </Link>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Legal</h3>
//             <div className="flex flex-col space-y-2">
//               <Link
//                 href="/legal/privacy-policy"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Privacy Policy
//               </Link>
//               <Link
//                 href="/legal/terms"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Terms of Service
//               </Link>
//               <Link
//                 href="/legal/cookie-policy"
//                 className="text-muted-foreground hover:text-foreground transition-colors"
//               >
//                 Cookie Policy
//               </Link>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Stay Updated</h3>
//             <p className="text-muted-foreground">
//               Subscribe to our newsletter for the latest updates and features.
//             </p>
//             <div className="flex gap-2">
//               <Input
//                 type="email"
//                 placeholder="Your email"
//                 className="max-w-[220px]"
//               />
//               <Button type="submit">Subscribe</Button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p className="text-muted-foreground text-sm">
//             © {new Date().getFullYear()} AR Beverage App. All rights reserved.
//           </p>
//           <div className="flex gap-4">
//             <Link
//               href="#"
//               className="text-muted-foreground hover:text-foreground"
//             >
//               <span className="sr-only">Twitter</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//               >
//                 <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//               </svg>
//             </Link>
//             <Link
//               href="#"
//               className="text-muted-foreground hover:text-foreground"
//             >
//               <span className="sr-only">Instagram</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//               >
//                 <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
//                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                 <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
//               </svg>
//             </Link>
//             <Link
//               href="#"
//               className="text-muted-foreground hover:text-foreground"
//             >
//               <span className="sr-only">LinkedIn</span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="h-5 w-5"
//               >
//                 <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                 <rect width="4" height="12" x="2" y="9"></rect>
//                 <circle cx="4" cy="4" r="2"></circle>
//               </svg>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
