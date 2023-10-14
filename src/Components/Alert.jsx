import React from "react";

const Alert = ({ msg, color }) => {
  return (
    <div className="my-3 w-full  flex justify-center text-left">
      <div
        className={`${
          color === "red"
            ? "border-red-500 text-red-600"
            : "border-green-500 text-green-600"
        } p-1 py-2  rounded-md bg-white font-normal border-l-4`}
        role="alert"
      >
        <span className="block text-md ml-2 pr-4">{msg}</span>
      </div>
    </div>
  );
};

export default Alert;
