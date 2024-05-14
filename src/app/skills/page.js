"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiWordpress,

} from "react-icons/si";
// import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
export const ProgramS = [
  { name: "Html", Experience: 100, icone: <SiHtml5 /> },
  { name: "Css", Experience: 100, icone: <SiCss3 /> },
  { name: "JavaScript", Experience: 100, icone: <SiJavascript /> },
  { name: "PHP", Experience: 100, icone: <SiPhp /> },
  { name: "Mysql", Experience: 100, icone: <SiMysql /> },
  { name: "WordPress", Experience: 100, icone: <SiWordpress /> },
];
export const Languages = [
  { name: "Arabic", Experience: 100, icone: <div>Ar</div> },
  { name: "English", Experience: 100, icone: <div>En</div> },
];

function Skills() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col justify-between items-center gap-y-8 xl:mt-20 "
    >
      <div className="xl:mt-10">
        <motion.h1
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="text-2xl text-white font-500 uppercase"
        >
          Designs Skills
        </motion.h1>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-14  xl:gap-x-52 xl:gap-y-20">
        {ProgramS.map((link, index) => {
          const conicGradient = `conic-gradient(#ededed ${
            100 - link.Experience
          }deg,#707afe 0deg)`
          return (
            <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            key={index} href={link.path} className={``}>
              <div
                className="text-2xl bg-white/10 px-7 pt-3 pb-12 rounded-lg  xl:text-xl text-white hover:text-accent transition-all"
              >
                <div>
                  <div
                    className="relative h-[90px] w-[90px] rounded-full flex items-center justify-center before:content-[''] before:absolute before:h-[75px] before:w-[75px] before:bg-body before:rounded-[50%]"
                    style={{ background: conicGradient }}
                  >
                    <span className="relative font-bold text-white transition-all hover:text-accent text-4xl">
                      {link.icone}
                    </span>
                    {/* <p className="text-base font-medium absolute bottom-[6px]">
                      {link.Experience}%
                    </p> */}
                    <p className="text-base font-medium mr-[-10px]  ml-[-10px] absolute -bottom-10 ">
                      {link.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div variants={fadeIn("down", "tween", 0.1, 1)} className="mt-20">
        <h1 className="text-2xl text-white font-500 uppercase">Languages</h1>
      </motion.div>
      <div className="grid grid-cols-2 gap-x-12 xl:gap-x-52 mb-20">
        {Languages.map((link, index) => {
          const conicGradient = `conic-gradient(#ededed ${
            100 - link.Experience
          }deg,#707afe 0deg)`;
          return (
            <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            key={index} href={link.path} className={``}>
              <div
                className=" bg-white/10 px-7 pt-3 pb-12 rounded-lg text-2xl xl:text-xl text-white hover:text-accent transition-all"
              >
                <div>
                  <div
                    className="relative h-[90px] w-[90px] rounded-full flex items-center justify-center before:content-[''] before:absolute before:h-[75px] before:w-[75px] before:bg-body before:rounded-[50%]"
                    style={{ background: conicGradient }}
                  >
                    <div className="relative  font-bold text-white hover:text-accent text-2xl  xl:text-3xl">
                      {link.icone}
                    </div>
                    {/* <span className="text-base font-medium absolute bottom-[6px]">
                      {link.Experience}%
                    </span> */}
                    <p className="text-base font-medium absolute -bottom-10">
                      {link.name}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
