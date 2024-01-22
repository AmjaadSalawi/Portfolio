"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";

const Contact = () => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    // Initialize EmailJS with your User ID
    emailjs.init("qNzFFnPtc5uj6I6jtv0vr");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const btn = document.getElementById("button");
    btn.value = "Sending...";

    const serviceID = "service_1pc454d";
    const templateID = "template_btip6nb";

    try {
      await emailjs.sendForm(serviceID, templateID, event.target);
      btn.value = "Send Email";
      setStatus("Sent!");
    } catch (error) {
      btn.value = "Send Email";
      setStatus(JSON.stringify(error));
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="flex flex-col items-center justify-center xl:mt-20"
    >
      <div className="mt-[-20px] xl:mt-20 mb-4 xl:mb-10">
        <motion.h1
          variants={fadeIn("down", "tween", 0.2, 1)}
          className="text-2xl text-white font-500 uppercase"
        >
          Contact us
        </motion.h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-x-20 gap-y-10 items-center">
        <motion.div
          variants={fadeIn("down", "tween", 0.4, 1)}
          className="flex flex-col justify-center items-center bg-white/10 rounded-md px-6 py-10 min-w-[300px]"
        >
          <h1 className="text-accent font-bold text-lg">Email</h1>
          <Link href={"mailto:AmjadSalawi98@gmail.com"}>
            <p className="text-white font-extralight mt-1">
              AmjadSalawi98@gmail.com
            </p>
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("down", "tween", 0.4, 1)}
          className="flex flex-col justify-center items-center bg-white/10 rounded-md px-6 py-10 min-w-[300px]"
        >
          <h1 className="text-accent font-bold text-lg">Phone</h1>
          <Link href={"tel:+966 557969241"}>
            <p className="text-white font-extralight mt-1">+966 557969241</p>
          </Link>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 1)}
        className="min-w-[300px] xl:mx-auto my-10 p-6 bg-white/10 rounded-md shadow-md"
      >
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="from_name"
              className="block text-accent text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email_id"
              className="block text-accent text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="text"
              name="email_id"
              id="email_id"
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-accent text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="border rounded w-full py-2 px-3"
            />
          </div>

          <input
            type="submit"
            id="button"
            value="Send Email"
            className="bg-accent inline-grid font-light text-white py-2 px-4 rounded cursor-pointer"
          />
        </form>

        {status && <div className="mt-4 text-green-500">{status}</div>}
      </motion.div>
    </motion.div>
  );
};

export default Contact;
