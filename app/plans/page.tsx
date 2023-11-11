"use client";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import React, { Fragment, useState } from "react";

const tiers = [
  {
    name: "Pro Courses",
    id: "tier-pro",
    href: "#",
    priceMonthly: "RWF 504,000",
    month: "18",
    description: "Access to 4 different coding programming Starting at",
    features: [
      "Age 15-18",
      "Tech prodigy program",
      "code crafters program",
      "web wizards ",
      "Full stack junior developer program",
      "Access to 4 differents coding  program",
      "starting at 35,000 Rwf Per Month",
      "18 lessons per program",
      "18 months of mentoring ",
      "Full support ",
      "Coding camps ",
      "hackathon Events",
    ],
    featured: true,
  },
  {
    name: "Junior Courses",
    id: "tier-junior",
    href: "#",
    priceMonthly: "RWF 240,000",
    month: "15",
    description: "Access to 2 different coding programming Starting at",
    features: [
      "Age 6-14",
      "Access to 2 differents coding  program",
      "starting at 20,000 Rwf Per Month",
      "Core foundations Pack 1 program",
      "core foundations Pack 2 program",
      "22 lessons per program",
      "15 months of mentoring ",
      "Full support ",
      "Coding camps ",
    ],
    featured: false,
  },
];
const PlansPage = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="relative isolate bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] "
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">
          Pricing
        </h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          Tangnest Kids Coding Club: Membership Pricing Plans
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
        Give Your Child International Tech Education at Home. Our worldwide
        computer science curriculum equips your child for the global stage of
        innovation
      </p>
      <p
        onClick={openModal}
        className="mt-16 text-xl font-semibold text-center text-sky-300 hover:text-sky-400 mx-auto cursor-pointer underline"
      >
        Enjoy 20% Off on Full Program Payment
      </p>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex max-w-screen-lg mx-auto min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  ></Dialog.Title>
                  <div className="mx-auto mt-1 grid max-w-lg grid-cols-1 items-center sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    {tiers.map((tier, tierIdx) => (
                      <div
                        key={tier.id}
                        className={classNames(
                          tier.featured
                            ? "relative bg-white shadow-2xl"
                            : "bg-white/60 sm:mx-8 lg:mx-0",
                          tier.featured
                            ? ""
                            : tierIdx === 0
                            ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                            : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                          "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
                        )}
                      >
                        <h3
                          id={tier.id}
                          className="text-base font-semibold leading-7 text-indigo-600"
                        >
                          {tier.name}
                        </h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                          {tier.description}
                        </p>
                        <p className="mt-4 flex items-baseline gap-x-2">
                          <span className="text-4xl font-bold tracking-tight text-gray-900">
                            {tier.priceMonthly}
                          </span>
                          <span className="text-base text-gray-500">
                            per {tier.month} months
                          </span>
                        </p>
                        <ul
                          role="list"
                          className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10"
                        >
                          {tier.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-x-3  capitalize"
                            >
                              <CheckIcon
                                className="h-6 w-5 flex-none text-indigo-600 "
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={tier.href}
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? "bg-cyan-500 text-white shadow hover:bg-cyan-400"
                              : "text-cyan-600 ring-1 ring-inset ring-cyan-200 hover:ring-cyan-300",
                            "mt-8 block rounded-md py-3.5 px-3.5 text-center text-2xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 sm:mt-10"
                          )}
                        >
                          Enroll Here
                        </a>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PlansPage;
