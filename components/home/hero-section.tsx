import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeroSection = async () => {
  return (
    <div className="relative bg-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-80 translate-x-1/2 transform fill-slate-800 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0 bg-slate-800">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <div className="hidden sm:mb-10 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                  Discover Tangnest LMS - Unlock Your Kid&apos;s Digital Skills{" "}
                  <Link
                    href="https://tangnest.rw/lms"
                    target="_blank"
                    className="whitespace-nowrap font-semibold text-cyan-500"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                Unlock Your{" "}
                <span className="text-cyan-400">Child&apos;s Learning</span>{" "}
                Potential
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200">
                Tangnest aims to transform screen time for Rwandan children into
                a productive experience. By equipping them with programming
                skills, often referred to as the language of the future. we
                envision a next generation of Rwandans who are thinkers and
                creators, rather than mere passive consumers of social media and
                other technologies
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#choose-age"
                  prefetch
                  className="w-[200px] h-[50px] flex justify-center items-center rounded-md bg-cyan-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                >
                  Enroll Your Child Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="/images/hero.jpeg"
          alt="Hero"
          width={1920}
          height={1280}
        />
      </div>
    </div>
  );
};
