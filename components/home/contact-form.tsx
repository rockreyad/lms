"use client";
import { subscribeConvertKit } from "@/module/actions/contact_form.action";
import { useFormState, useFormStatus } from "react-dom";
import { ImSpinner8 } from "react-icons/im";
import { ErrorBanner, SuccessBanner } from "../common/action_banner";

const initialState = {
  error: false,
  message: null,
  errors: null,
};

const ConvertkitSignupForm = () => {
  const [state, formAction] = useFormState(subscribeConvertKit, initialState);
  const { error: isError, message, errors } = state;
  const errorsList = errors !== null && errors?.length ? errors : null;

  return (
    <>
      <form action={formAction} method="POST">
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
              {/* form action message */}
              <div className="mb-4">
                {isError && (
                  <ErrorBanner errors={errorsList} message={message} />
                )}
                {!isError && message && <SuccessBanner message={message} />}
              </div>
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300/30 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder=""
                  name="full_name"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300/30 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  name="message"
                  className="w-full h-32 bg-gray-300/30 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <SubmitButton />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <div className="mt-8">
      <button
        disabled={pending}
        className="uppercase text-sm font-bold tracking-wide bg-cyan-400 hover:bg-cyan-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
      >
        {!pending ? (
          <span>Send Message</span>
        ) : (
          <ImSpinner8 size="1rem" className="animate-spin mx-auto" />
        )}
      </button>
    </div>
  );
};

export default ConvertkitSignupForm;
