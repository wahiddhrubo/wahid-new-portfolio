import { PortfolioContext } from "@/context/PortfolioContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import { BsGithub } from "react-icons/bs";
import {
  HiArrowLongLeft,
  HiArrowLongRight,
  HiArrowTopRightOnSquare,
} from "react-icons/hi2";

export default function Work() {
  const router = useRouter();
  const { getPrevOrNext, getWorkById, currentWork } =
    useContext(PortfolioContext);
  const { id } = router.query;
  const { setBorderColor, setIsHovered, setHoveredText } =
    useContext(PortfolioContext);

  useEffect(() => {
    if (typeof id === "string") {
      getWorkById(id);
    }
  }, [id]);
  return (
    <>
      {currentWork && (
        <div className="relative text-white">
          <div
            onMouseEnter={() => setBorderColor("white")}
            className="bg-blue-dark z-20 flex gap-8 flex-wrap px-[5vw] py-[5vh] fixed right-0 w-[35vw] h-screen"
          >
            <div className=" flex w-full justify-between text-3xl text-gray-500  ">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-2xl text-white bg-blue-600 rounded-full h-8 w-8 grid align-middle content-center justify-center"
              >
                <HiArrowLongLeft />
              </div>
              <div className="flex">
                <HiArrowLongLeft
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                />
                /
                <HiArrowLongRight
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                />
              </div>
            </div>
            <h2 className="text-2xl  block w-full font-semibold">
              {currentWork.title}
            </h2>
            {currentWork.description}
            <div className="flex w-full h-fit text-3xl mt-auto text-white justify-between content-end ">
              <div className="h-1 w-[80%] bg-white my-auto "></div>
              <div className="flex gap-3 ml-3">
                <HiArrowTopRightOnSquare
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                />
                <BsGithub
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                />
              </div>
            </div>
          </div>
          <div onMouseEnter={() => setBorderColor("black")}>
            {currentWork.gallery.map((img) => (
              <Image
                src={img.url}
                loader={() => img.url}
                width={850}
                height={1920}
                className="w-[65vw] mb-8"
                alt=""
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}