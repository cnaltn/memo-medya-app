import React from "react";
import MapLocate from "./MapLocate";

const Address = () => {
  return (
    <div id="address" className="w-full bg-gray-100 pb-20 px-3">
      <div className="container bg-white rounded shadow py-8 gap-y-10 flex flex-col">
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
