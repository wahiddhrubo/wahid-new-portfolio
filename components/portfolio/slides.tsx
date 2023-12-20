import { ItemPayload, SlideProps } from "@/types/types";
import Image from "next/image";
import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { BwNista } from "@/styles/fonts";
import { PortfolioContext } from "@/context/PortfolioContext";

export default function Slides({
  title,
  featuredImage,
  type,
  description,
}: ItemPayload) {
  const imgAnim: Variants = {
    animate: {
      scaleX: 0,
      originX: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const textAnim: Variants = {
    header: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
    headerInitial: {
      y: 30,
      opacity: 0,
    },
    type: {
      x: 0,
      opacity: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
    typeInitial: {
      x: -80,
      opacity: 0,
    },
  };
  const { setProjectHovered, setHoveredText } = useContext(PortfolioContext);
  return (
    <div className="md:flex gap-10 !cursor-primary-light px-28 h-screen content-center text-white justify-between ">
      <div className="grid content-center">
        <div className="space-y-8">
          <div className="h-12 overflow-hidden ">
            <motion.div
              variants={textAnim}
              whileInView={"header"}
              initial={"headerInitial"}
              exit={"headerInitial"}
              className={`${BwNista.className} text-4xl font-bold `}
            >
              {title}
            </motion.div>
          </div>
          <motion.div
            variants={textAnim}
            whileInView={"type"}
            initial={"typeInitial"}
            exit={"typeInitial"}
            className="border-l-4 border-yellow-400 px-4"
          >
            {type}
          </motion.div>
          <motion.div
            variants={textAnim}
            whileInView={"header"}
            initial={"headerInitial"}
            exit={"headerInitial"}
          >
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </motion.div>
        </div>
      </div>
      <div
        className="h-fit cursor-none my-auto relative grid content-center "
        onMouseEnter={() => {
          setHoveredText("View Project");
          setProjectHovered(true);
        }}
        onMouseLeave={() => setProjectHovered(false)}
      >
        <motion.div
          variants={imgAnim}
          whileInView="animate"
          className="h-full w-full absolute inset-0 bg-cyan"
        />
        <Image
          alt=""
          src={featuredImage?.url}
          loader={() => featuredImage?.url}
          width={650}
          height={550}
          className="w-[650px] cursor-none h-[450px] object-cover object-bottom"
        />
      </div>
    </div>
  );
}
