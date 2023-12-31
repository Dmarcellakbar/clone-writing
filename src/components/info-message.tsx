export const InfoMessage = (): JSX.Element => (
  <div className="rounded-md bg-indigo-50 p-4 mb-6">
    <div className="flex">
      <div className="flex-shrink-0">
        {/* <!-- Heroicon name: mini/check-circle --> */}
        <svg
          className="h-5 w-5 text-indigo-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="ml-3">
        <h3 className="text-sm font-medium text-indigo-800">
          Login Token has been sent to your E-Mail!
        </h3>
        <div className="mt-2 text-sm text-indigo-700">
          <p>Please check your email to finish the authentication.</p>
        </div>
      </div>
    </div>
  </div>
);
