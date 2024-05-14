"use client";
import { useState } from "react";
import Image from "next/image";
import { PiCode, PiEye } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";

export const Progectss = [
  {
    name: "Apple Logo 3D", 
    Tipe: "Ecommerces",
    imagee: "/Portfolio/projects/Apple.png",
    URL: "https://www.behance.net/gallery/189115545/Logo-3D",
    code: "#", 
  },
  {
    name: "Logo Glossy Animation",
    Tipe: "Ecommerces",
    imagee: "/Portfolio/projects/Logo .png",
    URL: "https://www.behance.net/gallery/189115967/Logo",
    code: "#",
  },
  {
    name: "Logo MSC",
    Tipe: "Ecommerces",
    imagee: "/Portfolio/projects/logo.png",
    URL: "https://www.behance.net/gallery/187714175/logo-25",
    code: "#",
  },
  {
    name: "Logo VM",
    Tipe: "Ecommerces",
    imagee: "/Portfolio/projects/VM.png",
    URL: "https://www.behance.net/gallery/187716481/logo",
    code: "#",
  },
  {
    name: "Video Editing",
    Tipe: "Video Editing",
    imagee: "/Portfolio/projects/A.png",
    URL: "https://www.behance.net/gallery/189497703/Video-Editing",
    code: "#",
  },
  {
    name: "Video Editing",
    Tipe: "Video Editing",
    imagee: "/Portfolio/projects/B.png",
    URL: "https://www.behance.net/gallery/189498205/Video-Editing",
    code: "#",
  },
  {
    name: "AI Movie",
    Tipe: "Video Editing",
    imagee: "/Portfolio/projects/E.png",
    URL: "https://www.behance.net/gallery/189580957/AI-Movie?",
    code: "#",
  },
  {
    name: "Annual reports",
    Tipe: "Annual reports",
    imagee: "/projects/.png",
    URL: "https://issuu.com/amjadsalawi98/docs/annual100_-_copy",
    code: "#",
  },
  {
    name: "Motion Graphics Product",
    Tipe: "Infographic & motion graphics",
    imagee: "/Portfolio/projects/banner.png",
    URL: "https://www.behance.net/gallery/189093183/Banner",
    code: "#",
  },
];

function Projects() {
  const [filterType, setFilterType] = useState("all");
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col justify-center gap-y-5 items-center px-3 mt-[-60px] mb-5 xl:mb-8 xl:mt-20"
    >
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 1)}
        className="text-center"
      >
        <h1 className="font-500 mt-10 text-2xl text-white font-500 uppercase">
          Projects
        </h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 0.4, 1)}
        className="flex justify-center items-center xl:gap-x-6 xl:text-xl"
      >
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "all" && "font-black bg-white/10"
          } `}
          onClick={() => setFilterType("all")}
        >
          All
        </p>
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "Ecommerces" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("Ecommerces")}
        >
          Ecommerces
        </p>
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "Website" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("Website")}
        >
          Website
        </p>
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "Wordpress" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("Wordpress")}
        >
          Wordpress
        </p>
        <p
          className={`text-accent cursor-pointer hover:bg-white/10 transition-all px-4 py-1 rounded-lg ${
            filterType === "Static" && "font-bold bg-white/10"
          }`}
          onClick={() => setFilterType("Static")}
        >
          Static
        </p>
        
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="grid grid-cols-2 xl:grid-cols-3 px-2 xl:px-0 gap-x-5 gap-y-7 xl:gap-x-12 xl:gap-y-10"
      >
        {Progectss.filter(
          (dd) => filterType === "all" || dd.Tipe === filterType
        ).map((dd, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-center items-center group"
          >
            <Image
              src={dd.imagee}
              width={250}
              height={100}
              alt=""
              className="rounded-lg"
            />
            <div className="flex justify-center items-center gap-5 xl:gap-10  absolute top-[20%] xl:top-[30%]">
              <Link
                href={dd.code}
                className="border-accent border-solid border-[2px] p-2  rounded-full hover:bg-white/30 hidden group-hover:block transition-all"
              >
                <PiCode className="text-accent font-black text-2xl " />
              </Link>
              <Link
                href={dd.URL}
                className="border-accent border-solid border-[2px] p-2 rounded-full hover:bg-white/30 hidden group-hover:block transition-all"
              >
                <PiEye className="text-accent font-black text-2xl " />
              </Link>
            </div>
            <p className="mt-2 ">{dd.name}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Projects;
