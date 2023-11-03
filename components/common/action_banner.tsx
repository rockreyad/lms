import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { z } from "zod";

export function SuccessBanner({ message }: { message: string }) {
  return (
    <div className="rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">{message}</p>
        </div>
      </div>
    </div>
  );
}

export function ErrorBanner({
  errors,
  message,
}: {
  errors: z.ZodIssue[] | null;
  message?: string;
}) {
  const totalErrors = errors?.length ? errors.length : 0;
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">
            There were {totalErrors} errors with your submission
          </h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {errors?.length &&
                errors.map((error, index) => (
                  <li key={index}>{error.message}</li>
                ))}
            </ul>
          </div>
          {message && (
            <p className="text-sm font-medium text-red-800">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
