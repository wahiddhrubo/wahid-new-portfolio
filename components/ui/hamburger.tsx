import React, { useContext, useEffect, useState } from "react";
import { Variant, Variants, motion, useScroll } from "framer-motion";
import { Links } from "@/types/navTypes";
import Link from "next/link";
import { PortfolioContext } from "@/context/PortfolioContext";
import { useRouter } from "next/router";
type Props = {
  links: Links[];
};
export default function Hamburger({ links }: Props) {
  const { setIsHovered } = useContext(PortfolioContext);
  const route = useRouter();
  const routeLink = route.asPath;
  const [isOpen, setIsOpen] = useState(false);
  const [oldRouteLink, setOldRouteLink] = useState(routeLink);
  console.log(oldRouteLink, routeLink);
  useEffect(() => {
    if (routeLink !== oldRouteLink) {
      setIsOpen(false);
      setOldRouteLink(routeLink);
    }
  }, [routeLink, oldRouteLink]);

  const boxAnim: Variants = {
    container: {
      scaleY: 1,
      opacity: 1,
      originY: 0,
      transition: {
        when: "beforeChildren",
        ease: "easeInOut",
        duration: 0.5,
        delayChildren: 0.2,
      },
    },
    containerInitial: {
      scaleY: 0,
      opacity: 0,
    },
    textAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        when: "afterChildren",
        delay: 0.4,
      },
    },
    textInitial: {
      y: 25,
      opacity: 0,
    },
  };

  const hamburger: Variants = {
    topBar: {
      rotate: isOpen ? 45 : 0,
      originX: 0,
      width: 32,
      backgroundColor: "#3b3b3b",
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    bottomBar: {
      backgroundColor: "#3b3b3b",
      rotate: isOpen ? -45 : 0,
      originX: 0,
      width: 32,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    middleBar: {
      scale: isOpen ? 0 : 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div>
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-[10vw] z-50 space-y-2 top-[10vh]"
      >
        <motion.div
          variants={hamburger}
          animate="topBar"
          className="h-1 w-6  bg-black"
        />
        <motion.div
          variants={hamburger}
          animate="middleBar"
          className="h-1 w-4 bg-black ml-auto "
        />
        <motion.div
          variants={hamburger}
          animate="bottomBar"
          className="h-1 w-6 bg-black "
        />
      </motion.div>
      <motion.div
        variants={boxAnim}
        initial="containerInitial"
        animate={isOpen ? "container" : "containerInitial"}
        className="fixed z-50 selection:bg-primary-dark selection:text-white justify-between md:px-[20vw] py-[10vh] inset-0 w-full h-full bg-yellow-300 text-primary-dark flex gap-10 "
      >
        <div className=" w-fit h-full grid align-middle ">
          <div className=" h-fit my-auto">
            {links.map((l) => (
              <Link
                className={` ${
                  l.url === route.asPath
                    ? "line-through"
                    : "hover:tracking-[16px]"
                } overflow-hidden transition-all duration-200  h-12 my-8  text-4xl grid align-middle`}
                key={l.id}
                href={l.url}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div
                  variants={boxAnim}
                  animate={isOpen ? "textAnimate" : "textInitial"}
                  initial="textInitial"
                  // className="translate-y-[3]"
                >
                  {l.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[55%] h-full grid align-middle space-y-8">
          <div className="space-y-8 h-fit my-auto">
            <h2 className="font-bold w-full text-3xl">
              Let’s find solutions together?
            </h2>
            <div>
              Use my contact below to put a project on the move, let’s work on
              it!
            </div>
            <a
              href="mailto:wahidhrubo@gmail.com"
              className="hover:font-bold text-lg block hover:tracking-[4px] transition-all duration-200 se"
            >
              Wahiddhrubo(a)gmail.com{" "}
            </a>
            <Link
              href={"/contact"}
              className="bg-primary-dark block h-fit w-fit text-white px-10 py-4 "
            >
              Contact Me
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
