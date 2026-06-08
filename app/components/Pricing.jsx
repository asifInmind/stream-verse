"use client";
import React, { useState } from "react";
import Image from "next/image";
import selection from "../../public/icons/Selection.svg";
import { motion } from "framer-motion";

export default function Pricing() {
  const [activeCard, setActiveCard] = useState(null);
  const pricing = [
    {
      id: 1,
      title: "Starter Plan",
      description:
        "Perfect for new creators getting started with multi-streaming.",
      price: 9,
      selectionImg: selection,
      list: [
        "Stream on Multiple Platforms",
        "Basic analytics dashboard",
        "720p HD streaming",
        "Upload custom thumbnails",
        "Stream scheduling",
        "Email support",
      ],
    },
    {
      id: 2,
      title: "Pro Plan",
      description: "For growing streamers who need more power and control.",
      price: 19,
      selectionImg: selection,
      list: [
        "Stream to 5 platforms at once",
        "1080p Full HD streaming",
        "Real-time viewer & stats",
        "Comment management",
        "Milestone & trending alerts",
        "Priority support",
      ],
    },
    {
      id: 3,
      title: "Creator suite",
      description: "Advanced tools for professionals and full-time streamers.",
      price: 39,
      selectionImg: selection,
      list: [
        "Unlimited streaming",
        "Cloud recording",
        "Custom branding",
        "RTMP support",
        "Team access",
        "Priority support",
      ],
    },
  ];
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
      <section className="mt-12 mb-12 px-4 max-w-7xl mx-auto">
        <div className="mb-10 px-2">
          <h1 className="title text-3xl sm:text-4xl md:text-[40px] text-center text-[#fcfafa] font-semibold leading-tight">
            Simple Pricing for Every Creator
          </h1>
          <p className="text-center text-[#fcfafa] text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Flexible plans designed to fit all streamers — from casual content
            creators to full-time professionals.
          </p>
        </div>

        <section className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-6 items-stretch">
          {pricing.map((item) => (
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              whileHover={{ scale: 1.02 }}
              key={item.id}
            >
              <div
                onClick={() => setActiveCard(item.id)}
                className={`rounded-4xl border p-3 w-full sm:w-90 lg:w-90 flex flex-col justify-between cursor-pointer transition-all duration-300 min-h-125 group hover:border-[#c3eb4d]
            ${
              activeCard === item.id ? "border-[#C3EB4D]" : "border-[#2E2E2D]"
            }`}
              >
                <div>
                  <div className="w-full rounded-3xl p-5 bg-[#2E2E2D] relative flex flex-col justify-between min-h-55">
                    <div className="flex items-start gap-3">
                      <div
                        className={`h-3 w-3 rounded-full mt-2.5 shrink-0 transition-colors duration-300 group-hover:bg-[#C3EB4D] ${
                          activeCard === item.id
                            ? "bg-[#C3EB4D]"
                            : "bg-[#1E1F1E]"
                        }`}
                      ></div>

                      <div>
                        <h3 className="font-medium text-xl text-[#fcfafa]">
                          {item.title}
                        </h3>
                        <p className="font-normal text-sm sm:text-[16px] text-zinc-300 mt-2">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 pt-2">
                      <button
                        className={`py-2.5 px-4 rounded-xl text-sm font-medium capitalize border transition-all duration-300 cursor-pointer
                    ${
                      activeCard === item.id
                        ? "bg-[#C3EB4D] text-[#141414] border-[#C3EB4D]"
                        : "bg-[#1E1F1E] text-[#fcfcfa] border-zinc-700"
                    }`}
                      >
                        get started
                      </button>

                      <p className="text-3xl sm:text-[36px] font-semibold text-[#fcfcfa]">
                        ${item.price}
                        <span className="text-sm sm:text-[16px] font-normal text-zinc-400">
                          /month
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="p-4">
                    {" "}
                    <ul className="flex flex-col gap-3">
                      {" "}
                      {item.list.map((feature, index) => (
                        <div
                          key={index}
                          className="flex justify-start items-start gap-3"
                        >
                          {" "}
                          <div className="shrink-0 pt-1">
                            {" "}
                            <Image
                              src={selection}
                              alt="selection icon"
                              width={16}
                              height={16}
                            />{" "}
                          </div>{" "}
                          <li className="text-sm sm:text-[16px] font-normal text-zinc-300 leading-tight">
                            {" "}
                            {feature}
                          </li>{" "}
                        </div>
                      ))}{" "}
                    </ul>{" "}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </section>
    </>
  );
}
