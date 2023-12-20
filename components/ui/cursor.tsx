import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PortfolioContext } from "@/context/PortfolioContext";

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const mouseHandler = (e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", mouseHandler);
    return () => window.removeEventListener("mousemove", mouseHandler);
  }, []);
  const { isHovered, projectHovered, hoveredText, borderColor } =
    useContext(PortfolioContext);

  return (
    <>
      <motion.div
        className="  text-black z-[999] text-[10px]  text-center  content-center justify-center pointer-events-none  grid align-middle fixed  border-[1px] border-primary-dark rounded-full"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovered ? 2.5 : 1,
          width: projectHovered ? 80 : 25,
          height: projectHovered ? 80 : 25,
          backgroundColor: projectHovered ? "white" : "transparent",
        }}
        style={{ borderColor }}
      >
        <div className="h-fit my-auto font-semibold">
          {projectHovered ? hoveredText : ""}
        </div>
      </motion.div>
      <motion.div
        className="w-2 fixed h-2 rounded-full z-[999] "
        animate={{
          x: pos.x + 4,
          y: pos.y + 4,
          transition: {
            duration: 0.1,
          },
          display: projectHovered ? "none" : "",
        }}
        style={{ backgroundColor: borderColor }}
      />
    </>
  );
}
