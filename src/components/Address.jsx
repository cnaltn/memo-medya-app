import React from "react";
import MapLocate from "./MapLocate";

const Address = () => {
  return (
    <div className="w-full bg-gray-50 pb-20">
      <div className="container shadow py-8 gap-y-10 flex flex-col">
        <h1 className="text-4xl tags text-left tags underline decoration-amber-600 underline-offset-4 font-semibold text-stone-700">
          Adresimiz
        </h1>
        <div className="tags">
          <MapLocate></MapLocate>
        </div>
      </div>
    </div>
  );
};

export default Address;
