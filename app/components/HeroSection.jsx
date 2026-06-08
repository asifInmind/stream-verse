"use client";
import Image from "next/image";
import Button from "./Button";
import hero from "../../public/images/hero.png";
import { motion } from "framer-motion";
export default function HeroSection() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 90 },
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
  return (
    <>
      <section className="relative flex justify-center items-center mt-20 sm:mt-62 lg:mt-60 px-4 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full flex justify-center items-center"
        >
          <Image src={hero} alt="hero image" priority />
        </motion.div>
      </section>

      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        whileInView="visible"
        custom={0}
        whileHover={{ scale: 1.02 }}
      >
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 mt-10 sm:mt-14 lg:mt-20">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-tight font-bold text-center capitalize text-[#fcfafa]">
            all-in-one <br /> streaming{" "}
            <span className="text-[#c3eb4d]">platform</span>
          </h1>
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] font-normal leading-7 sm:leading-8 lg:leading-9 text-center text-[#fcfafa] mt-4 max-w-3xl mx-auto">
            FLOWLIVE is the ultimate livestreaming solution for content
            creators. Broadcast across multiple social media platforms like
            YouTube, TikTok, Instagram, Facebook, and BIGO—all at the same time.
          </p>
          <div className="flex items-center justify-center mt-6">
            <Button text={"go live now"} />
          </div>
        </section>
      </motion.div>
    </>
  );
}
