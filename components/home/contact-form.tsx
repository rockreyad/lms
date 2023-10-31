"use client";
import { FormEventHandler, useCallback, useState } from "react";

const ConvertkitSignupForm: React.FC<
  React.PropsWithChildren<{
    formId: string;
  }>
> = ({ formId, children }) => {
  const name = "email";
  const [success, setSuccess] = useState<boolean | undefined>();

  const onSubmit: FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const target = event.target as HTMLFormElement;
      const data = new FormData(target);
      const email = data.get(name);

      const body = JSON.stringify({
        formId,
        email,
      });

      const headers = new Headers({
        "Content-Type": "application/json; charset=utf-8",
      });

      try {
        await fetch(`/api/convertkit/subscribe`, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers,
          body,
        });

        setSuccess(true);
      } catch {
        setSuccess(false);
      }
    },
    [formId]
  );

  if (success === false) {
    return <p>Apologies, an error occurred</p>;
  }

  if (success) {
    return <p>You&apos;re in! Thank you for subscribing.</p>;
  }

  return (
    <>
      <form target="_blank" onSubmit={onSubmit}>
        <div className="bg-cyan-200/10 text-gray-100 px-8 py-12">
          <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-cyan-100/20 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Lets talk about everything!
                </h2>
                <div className="text-gray-700 mt-8">
                  Hate forms? Send us an{" "}
                  <span className="underline">email</span> instead.
                </div>
              </div>
              <div className="mt-8 text-center"></div>
            </div>
            <div className="">
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300/30 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300/30 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea className="w-full h-32 bg-gray-300/30 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="mt-8">
                <button className="uppercase text-sm font-bold tracking-wide bg-cyan-400 hover:bg-cyan-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ConvertkitSignupForm;
