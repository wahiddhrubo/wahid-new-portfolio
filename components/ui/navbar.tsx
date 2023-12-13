import { Links, SocialLinks } from "@/types/navTypes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Navbar({
  links,
  socialLinks,
}: {
  links: Links[];
  socialLinks: SocialLinks[];
}) {
  const route = useRouter();
  const routeLink = route.asPath.split("/")[1];
  return (
    <nav className="flex py-5 px-[10vw] content-center ">
      <div className="flex gap-8  h-fit my-auto w-fit ">
        {links.map((l) => (
          <Link
            className={`relative ${
              routeLink !== l.url.split("/")[1] && "after:scale-x-0"
            } hover:after:scale-100 after:transition-all after:duration-300 after:origin-left after:left-0 after:bottom-[-2px]  after:absolute after:bg-black after:w-full after:h-[2px] `}
            href={l.url}
            key={l.id}
          >
            {l.name}
          </Link>
        ))}
      </div>

      <Link href={"/"} className="block w-fit mx-auto">
        <Image src={"/logo.svg"} width={125} height={125} alt="Logo" />
      </Link>
      <div className="flex gap-8 text-2xl h-fit my-auto w-fit ">
        {socialLinks.map((s) => (
          <Link className="" href={s.url} key={s.id}>
            {s.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
}
