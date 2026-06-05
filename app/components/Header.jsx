import React from "react";
import Link from "next/link";
import Button from "./Button";
export default function Header() {
  const headerMenus = [
    { id: 1, text: "home", path: "/" },
    { id: 1, text: "about", path: "/about" },
    { id: 1, text: "how it works", path: "/how-it-works" },
    { id: 1, text: "contact", path: "/contact" },
  ];
  return (
    <>
      <header className="absolute top-8 left-0 right-0 mx-auto flex items-center justify-between w-270 h-22 px-3 rounded-[20px] bg-[#1e1f1e] inset-shadow-xs inset-shadow-gray-50">
        <h2 className="text-2xl font-bold capitalize text-white">
          stream <span className="uppercase text-[#C3EB4D]">verse</span>
        </h2>

        <nav>
          <ul className="flex items-center gap-6 text-white font-medium capitalize">
            {headerMenus.map((menus) => (
              <li key={menus.id}>
                <Link href={menus.path} className="hover:text-[#c3eb4d]">
                  {menus.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button text="download app" />
      </header>
    </>
  );
}
