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
  return (
    <>
      <footer className="w-[100%] max-[1440px] h-[418px] bg-[#1b1b1b] pt-15 border border-t-1 border-[#303030] ">
        <section className="footer-main-container flex justify-around align-middle w-[80%] max-[1440px] h-[300px] ms-auto me-auto gap-22">
          <section className="footer-left w-[30%]">
            <h1 className="text-[28px] font-[500] capitalize text-[#fcfafa] mb-2">
              stream{" "}
              <span className="uppercase text-[#b0da29] font-bold">verse</span>
            </h1>
            <p className="font-[400] text-[16px] text-[#fcfafa] leading-10">
              Stream and share your life moments in real-time with FLOWLIVE.
            </p>
            <div className="social-links-icons flex gap-[10px] mt-[15px]">
              <Image
                src={youtube}
                alt="social icons"
                className="cursor-pointer"
              />
              <Image
                src={twitter}
                alt="social icons"
                className="cursor-pointer"
              />
              <Image
                src={github}
                alt="social icons"
                className="cursor-pointer"
              />
              <Image
                src={reddit}
                alt="social icons"
                className="cursor-pointer"
              />
              <Image
                src={telegram}
                alt="social icons"
                className="cursor-pointer"
              />
              <Image
                src={discord}
                alt="social icons"
                className="cursor-pointer"
              />
            </div>
            <p className="text-[14px] w-[400] text-[#fcfafa] mt-4">
              © 2024 Solana Foundation. All rights reserved.
            </p>
          </section>
          <section className="footer-right flex justify-evenly gap-8 w-[70%]">
            <div className="footer-menu-columns">
              <h1 className="text-[20px] font-[600] text-[#fcfafa] mb-5 uppercase">
                Quick links
              </h1>
              <li className="list-none p-[10px] ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  home
                </Link>
              </li>
              <li className="list-none p-[10px] ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  about us
                </Link>
              </li>
              <li className="list-none p-[10px] ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  how it works
                </Link>
              </li>
              <li className="list-none p-[10px] ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  contact us
                </Link>
              </li>
            </div>
            <div className="footer-menu-columns">
              <h1 className="text-[20px] font-[600] text-[#fcfafa] mb-5 uppercase">
                leagel
              </h1>
              <li className="list-none p-[10px] ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  privacy policy{" "}
                </Link>
              </li>
              <li className="list-none p-[10px] ps-0 pe-0">
                {" "}
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  terms of services{" "}
                </Link>
              </li>
              <li className="list-none p-[10px] ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  cookie policy{" "}
                </Link>
              </li>
              <li className="list-none p-[10px] ps-0 pe-0">
                <Link
                  href={"/"}
                  className="text-[#fcfafa] text-[16px] font-[400] capitalize"
                >
                  GDPR{" "}
                </Link>
              </li>
            </div>
            <div className="footer-menu-columns">
              <h1 className="text-[20px] font-semibold text-[#fcfafa] mb-5 uppercase">
                Downloads
              </h1>
              <li className="list-none p-[10px] ps-0 pe-0">
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
