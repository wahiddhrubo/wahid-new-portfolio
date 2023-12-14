import { PortfolioContext } from "@/context/PortfolioContext";
import React, { ComponentProps, useContext } from "react";
import Slider, { Settings, CustomArrowProps } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type DivProps = ComponentProps<"div"> & {
  direction: "left" | "right";
};
export default function SliderComp() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
  };

  return (
    <div className="px-[5vw] bg-primary-dark my-[-22vh]">
      <Slider {...settings}>
        <div className="h-screen w-screen bg-cyan" />
        <div className="h-screen w-screen bg-yellow-100" />
        <div className="h-screen w-screen bg-slate-100" />
        <div className="h-screen w-screen bg-green-50" />
      </Slider>
    </div>
  );
}

const CustomArrow = ({ onClick, className, direction }: DivProps) => {
  const { setHoveredText, setProjectHovered } = useContext(PortfolioContext);
  return (
    <div
      className={`w-20 z-50 absolute ${
        direction === "left" ? "left-0" : "right-0"
      } inset-y-0 my-auto h-20 grid content-center text-2xl justify-center rounded-full cursor-none border-black border-2 `}
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
