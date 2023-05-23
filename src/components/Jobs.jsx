import React from "react";
import CustomizedDialogs from "./Openmenu";

const Jobs = ({ jobs_img, jobs_desc, jobs_title, flex_order }) => {
  return (
    <div>
      <div className="flex gap-x-10 tags">
        <div className={`w-[45%] flex ${flex_order}`}>
          <img className="rounded object-cover" src={jobs_img}></img>
        </div>
        <div className="w-[55%] flex flex-col gap-y-5 justify-center">
          <h1 className="text-4xl font-bold">{jobs_title}</h1>
          <p className="text-justify">{jobs_desc}</p>
          <CustomizedDialogs
            title={jobs_title}
            desc={jobs_desc}
          ></CustomizedDialogs>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
