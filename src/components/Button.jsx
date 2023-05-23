import React from "react";

const Button = ({ label }) => {
  return (
    <div>
      <button className="bg-amber-600 hover:bg-amber-700  transition-colors rounded w-max text-white px-3 py-2">
        {label}
      </button>
    </div>
  );
};

export default Button;
