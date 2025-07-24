export interface Route {
  path: string;
  title: string;
  description: string;
  component: string;
}

export const routes: Route[] = [
  {
    path: "/",
    title: "Home",
    description: "Building hope, changing lives through compassionate action and community support.",
    component: "Home",
  },
  {
    path: "/about",
    title: "About Us",
    description: "Learn about our mission, values, and the team working to make a difference.",
    component: "About",
  },
  {
    path: "/programs",
    title: "Our Programs",
    description: "Discover the life-changing programs and initiatives we support worldwide.",
    component: "Programs",
  },
  {
    path: "/impact",
    title: "Our Impact",
    description: "See the real-world impact of your donations and our collective efforts.",
    component: "Impact",
  },
  {
    path: "/donate",
    title: "Donate",
    description: "Make a difference today. Every donation helps us build a better tomorrow.",
    component: "Donate",
  },
  {
    path: "/contact",
    title: "Contact Us",
    description: "Get in touch with our team. We'd love to hear from you.",
    component: "Contact",
  },
];
