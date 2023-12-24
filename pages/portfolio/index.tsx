import NavPortfolio from "@/components/portfolio/nav";
import SliderComp from "@/components/portfolio/slider";
import Works from "@/components/portfolio/works";
import { PortfolioContext } from "@/context/PortfolioContext";
import { BwNista } from "@/styles/fonts";
import { ItemPayload, SlideProps } from "@/types/types";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import React, { useContext, useRef, useEffect } from "react";

export default function Portfolio() {
  const { setBorderColor, setHamburgerColor, getAllWorks, workList } =
    useContext(PortfolioContext);
  const portfolioRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: portfolioRef,
  });

  useEffect(() => {
    getAllWorks();
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [300, -300]);
  return (
    <div ref={portfolioRef}>
      <div className="snap-y bg-blue-dark text-white overflow-x-hidden no-scrollbar snap-mandatory overflow-y-scroll snap-start h-screen">
        <div className="h-screen !cursor-primary-light  snap-start snap-normal">
          <NavPortfolio />
          {workList && <SliderComp slides={workList} />}
        </div>
        <div
          className={"relative"}
          onMouseEnter={() => {
            setBorderColor("white");
            setHamburgerColor("white");
          }}
        >
          <div
            className={`sticky ${BwNista.className}  font-semibold text-3xl w-full text-center top-[12vh] inset-x-0 mx-auto`}
          >
            Featured Works
          </div>
          <motion.div
            // style={{ x }}
            className={`sticky top-[35vh] w-fit text-6xl italic text-gray-300 ml-auto right-[1vw] `}
          >
            Web {"/>"}
          </motion.div>
          {workList?.map((s) => (
            <Works {...s} key={s._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
