import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    if (window.scrollY < 845 && !setActive("hero")) {
      setActive("hero");
    }
    if (window.scrollY >= 941 && !setActive("about")) {
      setActive("about");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={
        navbar == true
          ? "w-full text-stone-800 bg-white  justify-center z-40 flex fixed transition-colors shadow-lg "
          : "w-full text-white  justify-center z-40 flex fixed transition-colors shadow-lg backdrop-blur-sm"
      }
    >
      <div className="w-full h-20 flex items-center justify-between container ">
        <img className="flex w-32" src="/images/logo_text.png"></img>
        <div className=" h-full flex ">
          <ul className="flex gap-x-5 h-full">
            <li>
              <a
                onClick={() => {
                  setActive("hero");
                }}
                href="#home"
                className={
                  active === "hero"
                    ? "border-b-4 pt-1 border-amber-600 h-full flex items-center"
                    : "flex  h-full items-center"
                }
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActive("about");
                }}
                className={
                  active == "about"
                    ? "border-b-4 pt-1 border-amber-600 h-full  flex items-center"
                    : "flex  h-full items-center"
                }
                href="#about"
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActive("contact");
                }}
                className={
                  active === "contact"
                    ? "border-b-4 pt-1 border-amber-600 h-full flex items-center"
                    : "flex  h-full items-center"
                }
                href=""
              >
                İletişim
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActive("ref");
                }}
                className={
                  active === "ref"
                    ? "border-b-4 pt-1 border-amber-600 h-full flex items-center"
                    : "flex  h-full items-center"
                }
                href=""
              >
                Referanslarımız
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
