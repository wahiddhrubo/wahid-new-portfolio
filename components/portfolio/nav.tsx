import Image from "next/image";
import React from "react";
import Hamburger from "../ui/hamburger";
import Link from "next/link";

export default function NavPortfolio() {
  return (
    <div className="absolute z-10 top-0 py-[10vh] w-screen px-[10vw]">
      <Link
        href="/"
        className="hover:tracking-[24px] transition-all duration-300 text-white font-black text-2xl"
      >
        Wd
      </Link>
      <Hamburger color="white" />
    </div>
  );
}
