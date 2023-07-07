import React from "react";
import { CSpinner, CButton } from "@coreui/react";

const Footer = () => {
  return (
    <div className="w-full flex h-40 bg-gray-200">
      <div className="container flex flex-col  items-center justify-center gap-y-2">
        <h1 className="   text-stone-700">Memo Medya Demo v.04</h1>
        <h1 className="   text-stone-700">Developed by Can Altun with 🧡</h1>
        <div className="flex items-center animate-pulse gap-x-2 bg-amber-600 rounded px-4 py-2 text-white cursor-default">
          <CSpinner component="span" size="sm" aria-hidden="true"></CSpinner>
          <p className="">Still in progress...</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
