import React from "react";

const Loader = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500" />
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28" alt="Loading"
        />
      </div>
    </>
  );
};

export default Loader;
