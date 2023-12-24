import { PortfolioContext } from "@/context/PortfolioContext";
import { DefaultSocialLinks } from "@/lib/constants";
import { BwNista } from "@/styles/fonts";
import { FooterProps } from "@/types/types";
import Link from "next/link";
import React, { useContext } from "react";

export default function Footer({ social = DefaultSocialLinks }: FooterProps) {
  const { setIsHovered, setHamburgerColor, setBorderColor } =
    useContext(PortfolioContext);
  return (
    <div
      onMouseEnter={() => {
        setHamburgerColor("white");
        setBorderColor("white");
      }}
      className={`min-h-screen text-white pt-[15vh] py-[5vh] flex flex-wrap justify-between px-[16vw] bg-black  font-semibold`}
    >
      <div className="md:w-[45%] h-fit my-auto w-[100%]">
        <h2
          className={`text-3xl leading-relaxed my-8 font-bold ${BwNista.className}`}
        >
          Let's build something <span className="text-yellow-300"> good </span>
          Together?
        </h2>
        <Link
          href={"/contact"}
          className=" border-2 px-8 py-3  my-8 block w-fit border-red-500  "
        >
          Contact Me
        </Link>
      </div>
      <div className="md:w-[35%] h-fit my-auto w-[100%]">
        <h2 className={`text-3xl font-bold  ${BwNista.className}`}>
          You can find me on:
        </h2>
        {social.map((s) => (
          <Link
            href={s.url}
            target="_blank"
            className="w-full text-sm block my-5 transition-all duration-150 hover:tracking-[5px]  "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {s.name}
          </Link>
        ))}
      </div>
      <div className=" w-full text-center mt-auto h-fit text-sm font-light">
        Copyright © {new Date().getFullYear()} Wahid Dhrubo. All rights
        reserved.
      </div>
    </div>
  );
}
