import { PortfolioContext } from "@/context/PortfolioContext";
import Image from "next/image";
import Link from "next/link";
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
  const {
    setBorderColor,
    setIsHovered,
    newId,
    noOfItem,
    setProjectHovered,
    setNewId,
  } = useContext(PortfolioContext);

  useEffect(() => {
    if (newId) {
      router.push(`/portfolio/${newId}`);
      setNewId("");
    }
  }, [newId]);

  useEffect(() => {
    if (typeof id === "string") {
      getWorkById(id);
    }
  }, [id]);

  const paginate = (next: number) => {
    if (next >= noOfItem || next <= 0) {
      console.log(noOfItem);
      return;
    } else {
      getPrevOrNext(next);
    }
  };

  return (
    <>
      {currentWork && (
        <div
          onMouseEnter={() => setProjectHovered(false)}
          className="relative text-white"
        >
          <div
            onMouseEnter={() => setBorderColor("white")}
            className="bg-blue-dark overflow-y-scroll z-20 flex gap-8 flex-wrap px-[5vw] py-[5vh] fixed right-0 w-[35vw] h-screen"
          >
            <div className=" flex w-full justify-between text-3xl text-gray-500  ">
              <Link
                href={"/"}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-2xl text-white bg-blue-600 rounded-full h-8 w-8 grid align-middle content-center justify-center"
              >
                <HiArrowLongLeft />
              </Link>
              <div className="flex">
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                  onClick={() => paginate(currentWork.serial - 1)}
                >
                  <HiArrowLongLeft />
                </div>
                /
                <div
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                  onClick={() => paginate(currentWork.serial + 1)}
                >
                  <HiArrowLongRight />
                </div>
              </div>
            </div>
            <div className="flex  flex-wrap gap-2 text-gray-300 ">
              {currentWork.technology.map((t) => (
                <div>{"#" + t + " "}</div>
              ))}
            </div>
            <h2 className="text-2xl  block w-full font-semibold">
              {currentWork.title}
            </h2>
            {currentWork.description}
            <div className="flex w-full h-fit text-3xl mt-auto text-white justify-between content-end ">
              <div className="h-1 w-[80%] bg-white my-auto "></div>
              <div className="flex gap-3 ml-3">
                <Link
                  href={currentWork.githubLink || ""}
                  target="_blank"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                >
                  <BsGithub />
                </Link>
                <Link
                  href={currentWork.liveLink || ""}
                  target="_blank"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="hover:text-white"
                >
                  <HiArrowTopRightOnSquare />
                </Link>
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
                key={img.url}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
