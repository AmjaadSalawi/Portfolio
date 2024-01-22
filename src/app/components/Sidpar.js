"use client";

import {
  PiHouse,
  PiUser,
  PiCode,
  PiProjectorScreenChart,
  PiPhone,
} from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { usePathname } from "next/navigation";

export const navData = [
  { name: "Home", path: "/", icone: <PiHouse /> },
  { name: "About", path: "/about", icone: <PiUser /> },
  { name: "Skills", path: "/skills", icone: <PiCode /> },
  { name: "Projects", path: "/projects", icone: <PiProjectorScreenChart /> },
  { name: "Contact", path: "/contact", icone: <PiPhone /> },
];

function Sidpar() {
  const route = usePathname();

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-[-1px] mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16  xl:-max-w-md xl:h-screen"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-1 px-4 md:px-40 xl:px-0 h-[70px] xl:h-max py-8 bg-white/10  backdrop-blur-3xl text-3xl xl:text-md rounded-tl-xl rounded-tr-xl xl:rounded-full "
      >
        {navData.map((link, index) => {
          const isActive = route === link.path;

          return (
            <Link key={index} href={link.path} className="flex gap-x-5 group hover:text-accent">
              <div className="absolute transition-all pl-20 left-0 hidden xl:group-hover:flex w-max">
                <div className="bg-white/20 backdrop-blur-3xl hidden relative mt-[14px] xl:flex text-accent items-center p-[6px] rounded-[6px]">
                  <div className="text-[12px] leading-none hidden xl:block font-semibold capitalize ">{link.name}</div>
                  <div className="border-solid hidden xl:block border-r-white/20 border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2"></div>
                </div>
              </div>
              <nav
                className={`${
                  isActive
                    ? "text-accent mb-[100%] xl:mb-0 bg-body text-3xl xl:text-2xl hover:text-accent"
                    : "text-white mb-0 xl:mb-0 bg-transparent text-2xl xl:text-xl hover:text-accent"
                } rounded-full p-5 xl:p-4 cursor-pointer transition-all hover:text-accent`}
              >
                {link.icone}
              </nav>
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default Sidpar;
