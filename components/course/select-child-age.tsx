"use client";
import React, { Fragment, FunctionComponent, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { RiArrowDownSFill } from "react-icons/ri";
import { Age } from "@/types/age.schema";
import Link from "next/link";

interface ISelectChildAge {
  age: Pick<Age, "id" | "age">[];
}
const SelectChildAge: FunctionComponent<ISelectChildAge> = ({ age }) => {
  const [selected, setSelected] = useState(age[0]);
  return (
    <div id="choose-age" className="bg-cyan-500 flex flex-col gap-8 p-20">
      <p className="text-5xl font-semibold text-white text-center">
        Please Select Your Child age
      </p>
      <div className="w-1/4 mx-auto">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-4 pl-3 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 text-2xl text-center">
              <span className="block truncate">{selected.age}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <RiArrowDownSFill
                  className="h-10 w-10 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base text-center shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {age.map((age, ageIdx) => (
                  <Listbox.Option
                    key={ageIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-8 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={age}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {age.age}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <Link
        href={`/${selected.age}`}
        prefetch={true}
        className="bg-slate-800 text-cyan-500 font-semibold tracking-wider text-2xl uppercase py-4 px-10 rounded-lg shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out w-1/5 mx-auto text-center"
      >
        Next
      </Link>
    </div>
  );
};

export default SelectChildAge;
