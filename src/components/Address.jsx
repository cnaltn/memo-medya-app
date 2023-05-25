import React from "react";
import MapLocate from "./MapLocate";

const Address = () => {
  return (
    <div id="address" className="  w-full">
      <h1 className="text-4xl tags pb-10 text-left tags underline decoration-amber-600 underline-offset-4 font-semibold text-stone-700">
        Adresimiz
      </h1>
      <div className="tags">
        <MapLocate></MapLocate>
      </div>
    </div>
  );
};

export default Address;
