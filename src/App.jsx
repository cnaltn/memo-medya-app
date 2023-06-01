import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Referans from "./components/Referans";
import Footer from "./components/Footer";
import "@coreui/coreui/dist/css/coreui.min.css";
import Contact from "./components/Contact";
import { useState } from "react";
import Bakim from "./components/bakim";

const App = () => {
  const [bakim, setBakim] = useState(true);

  return (
    <div>
      {bakim === true ? <Bakim></Bakim> : ""}
      <div className={bakim === true ? "hidden" : ""}>
        <Hero></Hero>
        <About></About>
        <Referans></Referans>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
