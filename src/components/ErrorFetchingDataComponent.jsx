import React from "react";
import error_img from "../imgs/undraw_fixing_bugs_w7gi.png";

const ErrorFetchingDataComponent = () => {
  const onRetry = () => {
    window.location.reload();
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <div className="inline-block w-full max-w-md p-4">
          <img
            src={error_img}
            alt="Error fetching data"
            className="mx-auto mb-4"
          />
          <h2 className="text-lg mb-2 text-gray-700">Error Fetching Data</h2>
          <p className="mb-4 text-gray-600">
            There was a problem fetching your data. This could be due to a
            temporary issue. You can try again or contact support if this
            persists.
          </p>
          <button
            onClick={onRetry}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorFetchingDataComponent;
