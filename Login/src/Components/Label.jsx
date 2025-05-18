import React from "react";

export const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-1 font-medium">
      {children}
    </label>
  );
};
