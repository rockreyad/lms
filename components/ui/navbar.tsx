import Image from "next/image";
import React, { FunctionComponent } from "react";

interface INavbar {
  className?: string;
}
const Navbar: FunctionComponent<INavbar> = ({ className }) => {
  return (
    <header className={`absolute inset-x-0 top-0 z-50 ${className}`}>
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
