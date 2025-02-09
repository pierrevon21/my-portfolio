import React from "react";

export const Button = ({ children, variant = "solid", onClick }) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium focus:outline-none transition-all";
  const variantStyle =
    variant === "outline"
      ? "border border-gray-600 text-gray-600 hover:bg-gray-100"
      : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle}`}>
      {children}
    </button>
  );
};
