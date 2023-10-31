"use client";
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { RiSearchLine } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";

interface ISearchCourse {}
const SearchCourse: FunctionComponent<ISearchCourse> = () => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchParams]);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );
  let search = searchParams.get("search");
  return (
    <div className="group relative w-2/4 mx-auto">
      <span className="group-hover:text-cyan-400 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl">
        <RiSearchLine />
      </span>
      <input
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Search Course"
        defaultValue={search || ""}
        className="w-full pl-14 border group-hover:border-cyan-300 border-gray-300 px-6 py-4 rounded-full text-gray-700 focus:outline-none focus:border-cyan-500 text-2xl font-medium transition-all duration-150 ease-in-out"
        onChange={(e) => {
          router.push(`?${createQueryString("search", e.target.value)}`);
        }}
      />
    </div>
  );
};

export default SearchCourse;
