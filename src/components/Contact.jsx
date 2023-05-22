import React from "react";
import Form from "./Form";
import MapLocate from "./MapLocate";
import Address from "./Address";

const Contact = () => {
  return (
    <div id="contact" className="w-full flex h-max bg-gray-50 pt-32 pb-32">
      <div className="container shadow py-8 flex flex-col gap-y-10 h-max rounded">
        <h1 className="text-4xl tags underline underline-offset-4 decoration-amber-600 text-left font-semibold ">
          İletişim
        </h1>

        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
