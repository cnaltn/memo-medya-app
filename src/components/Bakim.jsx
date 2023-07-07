import React from "react";

const Bakim = () => {
  return (
    <div className="w-full flex h-screen bg-gray-100">
      <div className="container h-full   flex flex-col  items-center">
        <div className="  w-max items-end   h-full  flex ">
          <p className=" shadow rounded  bg-white p-4">
            <span className=" text-5xl text-stone-700">Yakında buradayız</span>
          </p>
        </div>
        <div className="h-full flex items-end pb-4 ">
          <h1 className="flex flex-col leading-none animate-pulse ">
            <span className="text-4xl leading-none font-semibold">Memo</span>{" "}
            <span className=" text-lg leading-none flex justify-center">
              medya
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Bakim;
