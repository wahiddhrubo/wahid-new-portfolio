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
  const { isHovered, projectHovered, hoveredText } =
    useContext(PortfolioContext);

  return (
    <>
      {projectHovered ? (
        <motion.div
          className="bg-white pointer-events-none  grid align-middle text-black z-[999] w-20  text-[10px] fixed h-20 text-center border-[1px] border-primary-dark rounded-full"
          animate={{ x: pos.x - 30, y: pos.y - 30 }}
        >
          <div className="h-fit my-auto font-semibold">{hoveredText}</div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-transparent pointer-events-none z-[999] w-10 grid align-middle fixed h-10 border-[1px] border-primary-dark rounded-full"
          animate={{ x: pos.x - 12, y: pos.y - 12, scale: isHovered ? 1.5 : 1 }}
        ></motion.div>
      )}
    </>
  );
}
