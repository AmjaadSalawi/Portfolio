"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import {
  PiUser,
  PiFlag,
  PiMapPin,
  PiGraduationCap,
  PiBagSimpleBold,
  PiHourglass,
} from "react-icons/pi";

function About() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className=" flex flex-col-reverse xl:flex-row justify-center xl:justify-between items-center xl:pl-40 xl:pr-32 min-h-[90vh] gap-y-10 gap-x-20"
    >
      <div className="flex gap-y-5 xl:gap-y-10 flex-col pt-7 xl:pt-36 pb-10 xl:pb-20 px-4 xl:px-0 ">
        <motion.h1
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="text-2xl xl:text-4xl text-white font-500 uppercase "
        >
          About
        </motion.h1>
        <div className="text-white/80 text-xl xl:text-lg font-extralight">
          <motion.p variants={fadeIn("up", "tween", 0.2, 1)}>
          I am a professional graphic designer. I have experience in designing, Logos, Social Media, video editing, Annual report and motion. I use some Adobe programs. Not only that, but I will provide high-quality work that will happy all my clients.
          </motion.p>
          <br />
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)}>
            
          </motion.p>
          <br />
          <motion.p variants={fadeIn("up", "tween", 0.4, 1)}>
            
          </motion.p>
        </div>
        <div className=" flex gap-x-4 gap-y-3 flex-col xl:flex-row xl:mr-[-90px] pt-5 xl:pt-0">
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex flex-col gap-y-3 justify-center items-start"
          >
            <nav className="flex justify-center items-center gap-x-1">
              <PiUser className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p>Name:</p>
              <span className="text-accent font-bold xl:text-sm">
                Amjaad Salawi
              </span>
            </nav>
            <nav className="flex justify-center items-center gap-x-1">
              <PiFlag className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p>Nationality:</p>
              <span className="text-accent font-bold xl:text-sm">Saudi</span>
            </nav>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex flex-col gap-y-3 justify-center items-start"
          >
            <nav className="flex justify-center items-center gap-x-1">
              <PiMapPin className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p>Address:</p>
              <span className="text-accent font-bold xl:text-sm">              
              Saudi Arabia - Jazan </span>
            </nav>
            <nav className="flex justify-center items-center gap-x-1">
              <PiHourglass className="text-accent text-3xl mr-2 rounded-full p-1 bg-white/10" />
              <p>Study:</p>
              <span className="text-accent font-bold xl:text-sm">
              CS / Jazan University
              </span>
            </nav>
          </motion.div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="flex flex-col gap-y-3 justify-center items-start"
          >
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn("down", "tween", 0.6, 1)}
        className="xl:container pl-0 flex justify-center items-cente w-full mr-0 pt-0 xl:pt-48 pb-10 xl:pb-20  xl:mr-[-50px]"
      >
        <div className="bg-accent shadow-sm pb-10 pt-10 flex items-center justify-center rounded-tl-full rounded-br-full  mx-auto">
          <Image
            // src={"/projects/Amjaad.png"}
            // width={300}
            // height={200}
            // alt=""
            className="rounded-tl-xl rounded-br-xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
