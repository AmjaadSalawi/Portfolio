"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "./utils/motion";
import Head from "next/head";

export default function Home() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className=" flex flex-col-reverse xl:flex-row justify-center xl:justify-between items-center xl:pl-40 xl:pr-32 h-[90vh] gap-y-10 gap-x-20"
    >
      <Head>
        <link rel="icon" href="./logo amjaad.png" />
      </Head>
      <div className="flex-1 flex gap-y-5 flex-col px-4 xl:px-0 xl:pl-0 text-white/80 text-xl xl:text-lg font-extralight">
        <motion.h1
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-2xl xl:text-4xl text-white font-500 uppercase"
        >
          Graphic Designer
        </motion.h1>
        <motion.p variants={fadeIn("up", "tween", 0.4, 1)}>
          Hi , I am{" "}
          <span className="text-accent font-normal">Amjaad Salawi</span>, a
          seasoned Graphic Designer with a passion for creative
          problem-solving. 
        </motion.p>
        <Link href={"/about"}>
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="btn btn-sm btn-accent w-[164px] "
          >
            about
          </motion.div>
        </Link>
      </div>
      <div className="mx-auto">
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 1)}
          className="bg-accent shadow-sm w-[300px] pb-[3.3rem] container flex items-center justify-center rounded-tr-full rounded-bl-full  mx-auto"
        >
          <Image
            // src={"/projects/Amjaadlogo.png"}
            // width={200}
            // height={200}
            // alt="Amjaad"
            className="rotate-[7deg]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
