import CursorFollower from "@/components/ui/cursor";
import Navbar from "@/components/ui/navbar";
import { PortfolioContextProvider } from "@/context/PortfolioContext";
import "@/styles/globals.css";
import { Links, SocialLinks } from "@/types/navTypes";
import type { AppProps } from "next/app";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Montreux, Montseratt } from "@/styles/fonts";

export default function App({ Component, pageProps }: AppProps) {
  const links: Links[] = [
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
  const socialLinks: SocialLinks[] = [
    {
      icon: <FaGithub className="hover:translate-y-[-1px] transition-all  " />,
      id: 0,
      url: "/",
    },
    {
      icon: (
        <FaLinkedin className="hover:translate-y-[-1px] text-blue-500 transition-all " />
      ),
      id: 0,
      url: "/",
    },
    {
      icon: (
        <SiUpwork className="hover:translate-y-[-1px] text-green-600 transition-all " />
      ),
      id: 0,
      url: "/",
    },
  ];
  return (
    <PortfolioContextProvider>
      <div
        className={`${Montreux.className}   bg-primary-light text-primary-dark `}
      >
        <CursorFollower />
        <Navbar links={links} socialLinks={socialLinks} />
        <Component {...pageProps} />
      </div>
    </PortfolioContextProvider>
  );
}
