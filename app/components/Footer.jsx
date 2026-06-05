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
      <footer className="w-full max-[1440px] h-104.5 bg-[#1b1b1b] pt-15 border border-t border-[#303030] ">
        <section className=" flex justify-around align-middle w-[80%] max-[1440px] h-75 ms-auto me-auto gap-22">
          <section className=" w-[30%]">
            <h1 className="text-[28px] font-medium capitalize text-[#fcfafa] mb-2">
              stream{" "}
              <span className="uppercase text-[#b0da29] font-bold">verse</span>
            </h1>
            <p className="font-normal text-[16px] text-[#fcfafa] leading-10">
              Stream and share your life moments in real-time with FLOWLIVE.
            </p>
            <div className=" flex gap-2.5 mt-3.75">
              {imageGroup.map((image) => (
                <Image
                  src={image.img}
                  alt="social icons"
                  className="cursor-pointer"
                  key={image.id}
                />
              ))}
            </div>
            <p className="text-[14px] w-[400] text-[#fcfafa] mt-4">
              © 2024 Solana Foundation. All rights reserved.
            </p>
          </section>
          <section className=" flex justify-evenly gap-8 w-[70%]">
            <div className="">
              <h1 className="text-[20px] font-semibold text-[#fcfafa] mb-5 uppercase">
                Quick links
              </h1>
              <li className="list-none p-2.5 ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  home
                </Link>
              </li>
              <li className="list-none p-2.5 ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  about us
                </Link>
              </li>
              <li className="list-none p-2.5 ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  how it works
                </Link>
              </li>
              <li className="list-none p-2.5 ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  contact us
                </Link>
              </li>
            </div>
            <div className="footer-menu-columns">
              <h1 className="text-[20px] font-semibold text-[#fcfafa] mb-5 uppercase">
                leagel
              </h1>
              <li className="list-none p-2.5 ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  privacy policy{" "}
                </Link>
              </li>
              <li className="list-none p-2.5 ps-0 pe-0">
                {" "}
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  terms of services{" "}
                </Link>
              </li>
              <li className="list-none p-2.5 ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  cookie policy{" "}
                </Link>
              </li>
              <li className="list-none p-2.5 ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-normal capitalize"
                >
                  GDPR{" "}
                </Link>
              </li>
            </div>
            <div>
              <h1 className="text-[20px] font-semibold text-[#fcfafa] mb-5 uppercase">
                Downloads
              </h1>
              <li className="list-none p-2.5 ps-0 pe-0">
                <p className="text-[#fcfafa] text-[16px] font-normal capitalize mb-16">
                  get the FLOWLIVE app now and start streaming
                </p>
              </li>
              <div>
                <Button text={"Download app"} />
              </div>
            </div>
          </section>
        </section>
      </footer>
    </>
  );
}
