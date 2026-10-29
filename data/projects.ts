export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  result?: string;
};
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "Olakunle turned our idea into a complete online store with sign-in, cart and secure payments. It made it much easier to show our handmade shoes to customers.",
    name: "Rotimi Olakunle",
    role: "Owner, Maestro Originals",
  },
  {
    quote: "Our page is now faster and looks more professional than the old one. Olakunle understood what we needed and delivered it without fuss.",
    name: "Kehinde Oladepo",
    role: "Owner, Herbedge",
  },
  {
    quote: "Our website presents all six of our divisions clearly in one place. Customers can reach us on WhatsApp from any page, and Olakunle was quick to respond whenever we needed changes.",
    name: "Iluobe Aigbokhan Godwin",
    role: "Owner, AIG Global Services",
  },
  {
    quote: "He built us a clean website where customers can see our services, book appointments and order through WhatsApp. I can also update my products myself, which saves me a lot of time.",
    name: "Esther Ayodele",
    role: "Owner, Esty Luxury Hair",
  },
];
export const projects: Project[] = [
  {
    title: "Maestro Originals",
    description:
      "An online store for local handmade shoemakers, with Google sign-in, cart, Paystack checkout, order tracking and an admin dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Firestore", "Paystack"],
    liveUrl: "https://maestro-originals.vercel.app",
    image: "/maestro.png",
    result: "Customers pay with Paystack and shop owners manage orders from an admin dashboard.",
  },
  {
    title: "Esty Luxury Hair",
    description:
      "A live website for a hair business: services, appointment booking, a WhatsApp order shop, and an admin page to manage products.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://esty-luxury-hair.vercel.app",
    image: "/esty.png",
    result: "Clients book appointments and order through WhatsApp, and the owner updates products herself.",
  },
  {
    title: "HerbEdge",
    description:
      "A product landing page for a Vitamin D3 + K2 supplement, rebuilt from WordPress into a fast, modern Next.js site.",
    tech: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://herbedge.vercel.app",
    image: "/herbedge.png",result: "Moved from WordPress to Next.js for a faster, cleaner page.",
  },

  {
    title: "AIG Global Services",
    description:
      "Multi-page company website for a Nigerian business with six divisions: gadgets, homes, autos, currency exchange, solar installation and industrial machines. Includes service pages, WhatsApp enquiry links, a contact page and policy pages.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://aig-global-services.vercel.app",
    image: "/aig.png",
    result: "Six business divisions on one site, with direct WhatsApp enquiries from every page.",
  },

  {
    title: "Kill Time (Sudoku)",
    description:
      "A sudoku game for Android and iOS, also playable in the browser.",
    tech: ["React Native", "Expo", "TypeScript"],
    liveUrl: "https://kill-time-pied.vercel.app",
    image: "/killtime.png",
    result: "One codebase runs on Android, iOS and the browser.",
  },
];
