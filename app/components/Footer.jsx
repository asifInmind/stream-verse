"use client";
import Image from "next/image";
import youtube from "../../public/icons/Link - YouTube.svg";
import twitter from "../../public/icons/Link - Twitter.svg";
import github from "../../public/icons/Link - GitHub.svg";
import reddit from "../../public/icons/Link - Reddit.svg";
import telegram from "../../public/icons/Link - Telegram.svg";
import discord from "../../public/icons/Link - Discord.svg";
import Link from "next/link";
import Button from "./Button";

export default function Footer() {
  const imageGroup = [
    { id: 1, img: github },
    { id: 2, img: youtube },
    { id: 3, img: twitter },
    { id: 4, img: reddit },
    { id: 5, img: telegram },
    { id: 6, img: discord },
  ];

  return (
    <>
      <footer className="w-full bg-[#1b1b1b] pt-12 pb-8 px-4 sm:px-6 lg:px-8 border-t border-[#303030]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          <div className="w-full lg:w-[30%] flex flex-col justify-between">
            <div>
              <h1 className="text-[28px] font-medium capitalize text-[#fcfafa] mb-2">
                stream{" "}
                <span className="uppercase text-[#b0da29] font-bold">
                  verse
                </span>
              </h1>
              <p className="font-normal text-base text-zinc-300 leading-relaxed max-w-sm">
                Stream and share your life moments in real-time with FLOWLIVE.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {imageGroup.map((image) => (
                  <Image
                    src={image.img}
                    alt="social icon"
                    className="cursor-pointer transition-transform hover:scale-110"
                    key={image.id}
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-zinc-400 mt-8 lg:mt-12">
              © 2026 Solana Foundation. All rights reserved.
            </p>
          </div>

          <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-[#fcfafa] mb-4 uppercase tracking-wider">
                Quick links
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    how it works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#fcfafa] mb-4 uppercase tracking-wider">
                legal
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/legal"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-services"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    terms of services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cookie-policy"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    cookie policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gdpr"
                    className="text-zinc-300 hover:text-[#b0da29] transition-colors text-base capitalize"
                  >
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold text-[#fcfafa] mb-4 uppercase tracking-wider">
                  Downloads
                </h2>
                <p className="text-zinc-300 text-base mb-6 leading-relaxed">
                  Get the FLOWLIVE app now and start streaming.
                </p>
              </div>
              <div className="w-fit">
                <Button text={"Download app"} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
