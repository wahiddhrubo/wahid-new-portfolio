import localFont from "next/font/local";
import { Montserrat } from "next/font/google";

export const bwNista = localFont({
  src: [
    {
      path: "../public/fonts/BwNista-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/BwNista-Bold.otf",
      weight: "700",
      style: "normal",
    },

    {
      path: "../public/fonts/BwNista-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const Montreux = localFont({
  src: "../public/fonts/montreux/MontreuxC-Rg.otf",
});

export const Montseratt = Montserrat({
  weight: ["700", "500"],
  subsets: ["latin"],
});
