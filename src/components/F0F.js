import React from "react";

export default function F0F() {
  return (
    <div className="mt-32 text-center">
      <h1 className="text-2xl font-bold text">404 - Not Found</h1>
      
      <p>Sorry, the page you are looking for does not exist.</p>
      
        <p className="mb-7">Go back to the home page</p>
        <a
          className="cursor-pointer px-4 py-2 text-white rounded bg-blue-800"
          href="/"
        >
          home
        </a>
      
    </div>
  );
}
