import React from "react";
import Form from "./Form";
import MapLocate from "./MapLocate";
import Address from "./Address";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full flex h-max bg-gray-100 pt-28 pb-32 px-3"
    >
      <div className="container bg-white shadow py-8 flex flex-col gap-y-10 h-max rounded">
        <div className="flex gap-x-20  w-full">
          <div className="w-[40%] ">
            {" "}
            <Form></Form>
          </div>
          <div className="w-[60%]  ">
            {" "}
            <Address></Address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
