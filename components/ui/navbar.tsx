import { PortfolioContext } from "@/context/PortfolioContext";
import { Links, SocialLinks } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Hamburger from "./hamburger";
import { DefaultLinks } from "@/lib/constants";

export default function Navbar({ links = DefaultLinks }: { links?: Links[] }) {
  const route = useRouter();
  const routeLink = route.asPath.split("/")[1];
  const { setIsHovered } = useContext(PortfolioContext);

  const noNavLink = [""];
  const noNavLinkDynamic = ["portfolio"];

  const displayNav =
    !noNavLink.includes(route.asPath) && !noNavLinkDynamic.includes(routeLink);
  return (
    <nav
      className={`${
        displayNav ? "flex" : "hidden"
      } py-5 px-[10vw] content-center `}
    >
      <Link href={"/"} className="block w-fit mr-auto">
        <Image src={"/logo.svg"} width={125} height={125} alt="Logo" />
      </Link>
      <Hamburger links={links} />
    </nav>
  );
}
