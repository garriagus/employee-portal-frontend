"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import navLinks from "@/data/navLinks";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  //className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  return (
    <header>
      <nav className="flex items-center justify-between p-8 max-h-16">
        <div>
          <Link href="/">
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image
                  src="/logo.png"
                  alt="empddh"
                  width={60}
                  height={60}
                  priority
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {navLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
              >
                {link.title}
              </Link>
            ))}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
