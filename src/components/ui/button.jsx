import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={
        ("rounded-xl bg-indigo-500 px-5 py-2.5 font-medium text-white shadow-md transition-all duration-200 hover:bg-indigo-600",
        className)
      }
      {...props}
    >
      {children}
    </button>
  );
}
