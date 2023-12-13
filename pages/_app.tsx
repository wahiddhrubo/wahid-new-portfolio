import Navbar from "@/components/ui/navbar";
import "@/styles/globals.css";
import { Links, SocialLinks } from "@/types/navTypes";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Montseratt = Montserrat({
  weight: ["700", "500"],
  subsets: ["latin"],
});
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
    <div
      className={`${Montseratt.className} bg-primary-light text-primary-dark `}
    >
      <Navbar links={links} socialLinks={socialLinks} />
      <Component {...pageProps} />
    </div>
  );
}
