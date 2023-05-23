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
        <h1 className="text-4xl text-stone-700 tags underline underline-offset-4 decoration-amber-600 text-left font-semibold ">
          İletişim
        </h1>

        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
