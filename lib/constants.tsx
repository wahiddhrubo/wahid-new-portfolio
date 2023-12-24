import { Links, SocialLinks } from "@/types/types";

export const DefaultLinks: Links[] = [
  {
    id: 3,
    name: "Home",
    url: "/",
  },
  {
    id: 0,
    name: "About",
    url: "/about",
  },
  {
    id: 1,
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 2,
    name: "Contact",
    url: "/contact",
  },
];
export const DefaultSocialLinks: SocialLinks[] = [
  {
    id: 3,
    name: "Linkedin",
    url: "/",
  },
  {
    id: 0,
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01de943653821a2006",
  },
  {
    id: 1,
    name: "Fiverr",
    url: "/",
  },
];

export const BACKEND_URL = "https://portfolio-backend-azure.vercel.app";
