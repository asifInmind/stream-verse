import React from "react";
import Link from "next/link";
import Button from "./Button";
export default function Header() {
  return (
    <>
      <header className="flex justify-between align-middle w-[1080px] h-[88px] m-auto p-[12px] rounded-[20px] bg-[#1e1f1e] absolute left-0 right-0 top-8">
        <section className="header-logo">
          <h2 className="text-2xl font-bold capitalize text-white w-[214px] h-[62px] p-[12px]">
            stream <span className="uppercase text-[#C3EB4D]">verse</span>
          </h2>
        </section>
        <section className="header-menus">
          <nav className="">
            <ul className="text-white flex items-center space-x-6 font-medium w-[512px] h-[52px] gap-[10px] capitalize">
              <li className="">
                <Link
                  href={"/"}
                  className="text-[18px] leading-[28px] hover:text-[#C3EB4D]"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="text-[18px] leading-[28px] hover:text-[#C3EB4D]"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href={"/how-it-works"}
                  className="text-[18px] leading-[28px] hover:text-[#C3EB4D]"
                >
                  how it works
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact-us"}
                  className="text-[18px] leading-[28px] hover:text-[#C3EB4D]"
                >
                  contact us
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="header-buttons">
          <Button text={"download app"} />
        </section>
      </header>
    </>
  );
}
