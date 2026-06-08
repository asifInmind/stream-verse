"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const headerMenus = [
    { id: 1, text: "home", path: "/" },
    { id: 2, text: "about", path: "/about" },
    { id: 3, text: "how it works", path: "/how-it-works" },
    { id: 4, text: "contact", path: "/contact" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between w-full h-16 px-4 md:px-8 lg:top-8 lg:mx-auto lg:w-[90%] lg:max-w-270 lg:h-22 lg:px-6 lg:rounded-[20px] bg-[#1e1f1e] inset-shadow-xs inset-shadow-gray-50">
        <h2 className="text-xl md:text-2xl font-bold capitalize text-white z-50">
          stream<span className="uppercase text-[#C3EB4D]">verse</span>
        </h2>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 text-white font-medium capitalize">
            {headerMenus.map((menus) => (
              <li key={menus.id}>
                <Link
                  href={menus.path}
                  className="hover:text-[#c3eb4d] transition-colors"
                >
                  {menus.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button text="download app" />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <div
          className={`fixed inset-0 bg-[#1e1f1e] flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out lg:hidden z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col items-center gap-6 text-xl text-white font-medium capitalize">
              {headerMenus.map((menus) => (
                <li key={menus.id}>
                  <Link
                    href={menus.path}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#c3eb4d] transition-colors"
                  >
                    {menus.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div onClick={() => setIsOpen(false)}>
            <Button text="download app" />
          </div>
        </div>
      </header>
    </>
  );
}
