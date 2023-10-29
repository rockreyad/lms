import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Discover Tangnest LMS - Unlock Your Kid&apos;s Digital Skills{" "}
                  <a
                    href="#"
                    className="whitespace-nowrap font-semibold text-cyan-500"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Unlock Your Child&apos;s Learning Potential
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Empower your child with essential digital skills for life. Our
                curated courses, designed for different age groups, offer a fun
                and educational journey where they&apos;ll gain proficiency in
                key digital tools and technologies. Start their adventure in the
                world of technology today
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="w-[200px] h-[50px] flex justify-center items-center rounded-md bg-cyan-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Enroll Your Child Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="images/hero.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
