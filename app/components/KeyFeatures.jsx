"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import icon1 from "../../public/icons/Frame 72.svg";
import icon2 from "../../public/icons/Frame 72 (1).svg";
import icon3 from "../../public/icons/Frame 72 (2).svg";
import icon4 from "../../public/icons/Frame 72 (3).svg";
import icon5 from "../../public/icons/Frame 72 (4).svg";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: "easeOut",
    },
  }),
};

export default function KeyFeatures() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-[#fcfafa] capitalize tracking-tight">
          key features
        </h1>
        <p className="text-center text-zinc-400 text-base sm:text-lg font-normal mt-2 max-w-md mx-auto">
          Everything you need to maximize your streaming reach
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0}
          whileHover={{ scale: 1.02 }}
          className="bg-linear-to-b from-[#232c2e] to-[#141414] p-6 rounded-3xl border border-[#232c2e] cursor-pointer relative overflow-hidden h-80 flex flex-col justify-between"
        >
          <div>
            <Image
              src={icon1}
              alt="Multi streaming icon"
              width={48}
              height={48}
            />
            <h2 className="text-xl sm:text-2xl font-semibold capitalize text-[#fcfafa] pt-6">
              multi streaming
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 pt-2">
              Go live on YouTube, Facebook, TikTok, and more — all at once from
              one dashboard.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          whileHover={{ scale: 1.02 }}
          className="bg-linear-to-b from-[#2E2A1F] to-[#141414] p-6 rounded-3xl border border-[#2E2A1F] cursor-pointer h-80 flex flex-col justify-between"
        >
          <div>
            <Image
              src={icon2}
              alt="Real time audience icon"
              width={48}
              height={48}
            />
            <h2 className="text-xl sm:text-2xl font-semibold capitalize text-[#fcfafa] pt-6">
              real time audience
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 pt-2">
              View and respond to comments across platforms in a single
              dashboard.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          whileHover={{ scale: 1.02 }}
          className="bg-linear-to-b from-[#242E1F] to-[#141414] p-6 rounded-3xl border border-[#242E1F] cursor-pointer md:col-span-2 lg:col-span-1 h-80 flex flex-col justify-between"
        >
          <div>
            <Image
              src={icon3}
              alt="Advanced analytics icon"
              width={48}
              height={48}
            />
            <h2 className="text-xl sm:text-2xl font-semibold capitalize text-[#fcfafa] pt-6">
              advance analytics
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 pt-2">
              Get detailed insights on viewer engagement and performance.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.3}
          whileHover={{ scale: 1.02 }}
          className="bg-linear-to-b from-[#262B2E] to-[#141414] p-6 rounded-3xl border border-[#262B2E] cursor-pointer lg:col-span-2 h-80 flex flex-col justify-between"
        >
          <div>
            <Image
              src={icon4}
              alt="Stream customization icon"
              width={48}
              height={48}
            />
            <h2 className="text-xl sm:text-2xl font-semibold capitalize text-[#fcfafa] pt-6">
              stream customization
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 pt-2">
              Adjust resolution, audio, and settings for each platform to
              deliver a premium viewer experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          whileHover={{ scale: 1.02 }}
          className="bg-linear-to-b from-[#28262E] to-[#141414] p-6 rounded-3xl border border-[#28262E] cursor-pointer h-80 flex flex-col justify-between"
        >
          <div>
            <Image
              src={icon5}
              alt="Social integration icon"
              width={48}
              height={48}
            />
            <h2 className="text-xl sm:text-2xl font-semibold capitalize text-[#fcfafa] pt-6">
              social integration
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 pt-2">
              Easily link your accounts and manage livestreams in one place.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
