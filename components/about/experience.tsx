import { BwNista } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import { Variants, motion } from "framer-motion";
type Skills = {
  name: string;
  title: string;
  description: string;
};
export default function Experience() {
  const skills: Skills[] = [
    {
      name: "Frontend Web Developer",
      description:
        "with a focus on creating seamless and engaging experiences for web applications",
      title:
        "Specialize in developing highly interactive and efficient UI using React and NextJs, ",
    },
    {
      name: "React Native Developer",
      description:
        "Dedicated to crafting seamless and engaging user experiences.",
      title:
        "Experienced React Native developer specializing in high-performance, cross-platform mobile app development for iOS and Android platforms. ",
    },
    {
      name: "Full Stack Experience",
      description:
        " Dedicated to delivering high-quality, responsive solutions.  ",
      title:
        "Experienced in creating scalable, full-stack web applications with MongoDB and Express.js",
    },
  ];
  const containerVariant: Variants = {
    hidden: {
      opacity: 0,
      scaleX: 0.5,
      scaleY: 0.5,
    },
    show: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        when: "beforeChildren",
      },
      originX: 0,
    },
  };
  const boxVariant: Variants = {
    show: {
      originX: 1,
      scaleX: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hidden: {
      scaleX: 1,
    },
  };
  return (
    <div className="md:pl-[42vw] pr-[14vw] overflow- relative bg-primary-light pt-[5vh] pb-[12vh] ">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        className="absolute top-36 z-10 left-0 w-[28vw] "
      >
        <div className="relative">
          <motion.div
            variants={boxVariant}
            className="bg-yellow-300 w-full h-full z-10 absolute"
          />
          <Image
            width={350}
            height={950}
            className="w-[320px] h-[550px] object-cover"
            alt=""
            src={"/about.jpg"}
          />
        </div>
      </motion.div>

      {skills.map((s) => (
        <div className="text-gray-600 leading-loose font-medium my-10 ">
          <h2
            className={`text-red-500 my-4  text-lg font-bold ${BwNista.className}`}
          >
            {s.name}
          </h2>
          <span className="text-black font-semibold">{s.title}</span>{" "}
          {s.description}
        </div>
      ))}
    </div>
  );
}
