import { PortfolioContext } from "@/context/PortfolioContext";
import { Links, SocialLinks } from "@/types/navTypes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Hamburger from "./hamburger";

export default function Navbar({
  links,
  socialLinks,
}: {
  links: Links[];
  socialLinks: SocialLinks[];
}) {
  const route = useRouter();
  const routeLink = route.asPath.split("/")[1];
  const { setIsHovered } = useContext(PortfolioContext);
  return (
    <nav className="flex py-5 px-[10vw] content-center ">
      <Link href={"/"} className="block w-fit mr-auto">
        <Image src={"/logo.svg"} width={125} height={125} alt="Logo" />
      </Link>
      <Hamburger links={links} />
    </nav>
  );
}
