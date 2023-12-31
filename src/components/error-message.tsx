type Props = {
  errorMessage: string;
};

export const ErrorMessage = ({ errorMessage }: Props): JSX.Element => (
  <div className="rounded-md bg-red-50 p-4 mb-6">
    <div className="flex">
      <div className="flex-shrink-0">
        {/* <!-- Heroicon name: mini/x-circle --> */}
        <svg
          className="h-5 w-5 text-red-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-red-800">
          There was an error with your submission
        </h3>
        <div className="mt-2 text-sm text-red-700">
          <ul role="list" className="list-disc space-y-1 pl-5">
            <li>{errorMessage}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
