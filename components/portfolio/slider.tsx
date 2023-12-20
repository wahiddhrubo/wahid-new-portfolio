import { PortfolioContext } from "@/context/PortfolioContext";
import React, { ComponentProps, useContext } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ItemPayload, SlideProps } from "@/types/types";
import Slides from "./slides";
import { AnimatePresence } from "framer-motion";

type DivProps = ComponentProps<"div"> & {
  direction: "left" | "right";
};
export default function SliderComp({ slides }: { slides: ItemPayload[] }) {
  console.log(slides);
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    waitForAnimate: true,
  };
  const { setBorderColor } = useContext(PortfolioContext);

  return (
    <div
      onMouseEnter={() => {
        setBorderColor("white");
      }}
      className="px-[5vw] bg-black "
      style={{ cursor: "url(/cursor-light.png), auto " }}
    >
      <AnimatePresence mode="wait">
        <Slider {...settings}>
          {slides.map((s) => (
            <Slides {...s} key={s._id} />
          ))}
        </Slider>
      </AnimatePresence>
    </div>
  );
}

const CustomArrow = ({ onClick, className, direction }: DivProps) => {
  const { setHoveredText, setProjectHovered } = useContext(PortfolioContext);
  return (
    <div
      className={`w-20 z-50 absolute ${
        direction === "left" ? "left-0" : "right-0"
      } inset-y-0 my-auto h-20 grid content-center text-2xl justify-center rounded-full cursor-none border-white text-white border-2 `}
      onMouseEnter={() => {
        setProjectHovered(true);
        setHoveredText(direction === "left" ? "Previous" : "Next");
      }}
      onClick={onClick}
      onMouseLeave={() => setProjectHovered(false)}
    >
      {direction === "left" ? <FaChevronLeft /> : <FaChevronRight />}
    </div>
  );
};
