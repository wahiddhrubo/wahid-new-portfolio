import { ItemPayload, WorkProps } from "@/types/types";
import Image from "next/image";
import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { BwNista } from "@/styles/fonts";
import { PortfolioContext } from "@/context/PortfolioContext";
import Link from "next/link";
export default function Works({
  title,
  workType,
  featuredImage,
  _id,
}: ItemPayload) {
  const { setProjectHovered, setHoveredText, setIsHovered } =
    useContext(PortfolioContext);
  const imageAmim: Variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
    hidden: {
      opacity: 0.7,
      y: 30,
    },
  };
  const imageDivAmim: Variants = {
    show: {
      scaleX: 0,
      originX: "right",
      transition: {
        duration: 0.4,
        ease: "easeIn",
        repeat: 0,
      },
    },
  };

  return (
    <div className="h-screen flex relative hover:text-purple py-[22vh] w-fit mx-auto text-left snap-start snap-normal">
      <motion.div
        variants={imageAmim}
        initial="hidden"
        whileInView={"show"}
        className="h-fit w-1/2 mx-auto overflow-hidden relative"
      >
        <Link
          href={`/portfolio/${_id}`}
          onMouseEnter={() => {
            setHoveredText("View Project");
            setProjectHovered(true);
          }}
          onMouseLeave={() => setProjectHovered(false)}
        >
          <Image
            alt=""
            src={featuredImage.url}
            loader={() => featuredImage.url}
            width={850}
            height={450}
            className=" w-[925px]     object-cover mx-auto h-[320px]"
          />
        </Link>
        <motion.div
          variants={imageDivAmim}
          whileInView={"show"}
          className="w-full z-5 top-0 h-full bg-blue-400  absolute left-0"
        />
      </motion.div>
      <div className="h-full w-[45%] overflow-hidden grid content-center ">
        <motion.h2
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${BwNista.className} my-4  font-black text-3xl`}
        >
          {title}
          {workType}
        </motion.h2>
      </div>
    </div>
  );
}
