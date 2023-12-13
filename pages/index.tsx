import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="md:grid md:align-middle  min-h-screen px-[10vw] h-fit w-full ">
      <div className="md:flex  justify-center lg:gap-[10%]">
        <div className="md:w-[45%]  h-full grid align-middle content-center">
          <Image
            alt="Developer"
            src={"/Hone-bg.png"}
            width={750}
            height={400}
            className="bg-transparent mx-auto "
          />
        </div>
        <div className=" grid md:content-center md:w-[45%]">
          <div className="md:text-left space-y-8 text-center  ">
            <h2 className="font-bold md:text-6xl text-2xl leading-tight ">
              Turning Vision Into Reality With Code
            </h2>
            <div className="text-sm md:text-md leading-normal">
              As a skilled full-stack React developer, I am dedicated to turning
              ideas into innovative web and mobile applications. Explore my
              latest projects and , showcasing my expertise in React.js as well
              as in React native .
            </div>
            <div className="flex content-center justify-center md:justify-start h-fit gap-8 ">
              <button className="bg-primary-dark flex gap-2 content-center text-primary-light px-8 py-4 rounded-md hover:opacity-90 transition-all duration-150">
                Resume
                <BsBoxArrowUpRight />
              </button>
              <Link href={"/contact"} className="h-fit my-auto">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
