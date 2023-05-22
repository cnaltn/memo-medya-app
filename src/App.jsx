import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Referans from "./components/Referans";
import Footer from "./components/Footer";
import "@coreui/coreui/dist/css/coreui.min.css";
import Contact from "./components/Contact";

import Address from "./components/Address";

const App = () => {
  return (
    <div className="">
      <Hero></Hero>
      <About></About>
      <Referans></Referans>
      <Contact></Contact>
      <Address></Address>
      <Footer></Footer>
    </div>
  );
};

export default App;
