import CursorFollower from "@/components/ui/cursor";
import Navbar from "@/components/ui/navbar";
import { PortfolioContextProvider } from "@/context/PortfolioContext";
import "@/styles/globals.css";
import { Links, SocialLinks } from "@/types/types";
import type { AppProps } from "next/app";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montreux, Montseratt } from "@/styles/fonts";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PortfolioContextProvider>
      <div
        className={`${Montreux.className} cursor-none  bg-primary-light text-primary-dark `}
      >
        <AnimatePresence mode="wait">
          <CursorFollower />
          <Navbar />
        </AnimatePresence>

        <Component {...pageProps} />
      </div>
    </PortfolioContextProvider>
  );
}
