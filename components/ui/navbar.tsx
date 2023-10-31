"use client";
import { useWindowScroll } from "@uidotdev/usehooks";
import classNames from "classnames";
import Image from "next/image";
import React, { FunctionComponent } from "react";

interface INavbar {
  className?: string;
}
const Navbar: FunctionComponent<INavbar> = ({ className }) => {
  const [{ y: scrollY }] = useWindowScroll();
  const isScrolled = scrollY && scrollY > 20;
  return (
    <header
      className={classNames(
        "inset-x-0 top-0 z-50 pb-4 transition-all duration-500 bg-slate-800",
        {
          "sticky shadow-md shadow-gray-900": isScrolled,
        },
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between lg:justify-start"
            aria-label="Global"
          >
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">
                Tangnest - The best e-learning platform
              </span>
              <Image
                alt="Tangnest Logo"
                className="h-8 w-auto"
                width={200}
                height={55}
                src="/logo.png"
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
