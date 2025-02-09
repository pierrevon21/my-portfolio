import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div className="mt-2 text-green-200">{children}</div>;
};
