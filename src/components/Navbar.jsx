import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-white");
  const [active, setActive] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbarColor("bg-white");
      setTextColor("text-stone-800");
    } else {
      setNavbarColor("bg-transparent");
      setTextColor("text-white");
    }
    // if (window.scrollY < 845 && !setActive("hero")) {
    //   setActive("hero");
    // }
    // if (window.scrollY >= 900 && window.scrollY < 2500 && !setActive("about")) {
    //   setActive("about");
    // }
    // if (window.scrollY >= 2636 && window.scrollY < 3000 && !setActive("ref")) {
    //   setActive("ref");
    // }
    // if (window.scrollY >= 3000 && !setActive("contact")) {
    //   setActive("contact");
    // }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div
      className={`w-full  ${textColor}  ${navbarColor} justify-center z-40 flex fixed transition-colors backdrop-blur-lg shadow-lg drop-shadow-lg px-3`}
    >
      <div className="w-full h-20 flex items-center justify-between container ">
        <h1 className="flex flex-col leading-none ">
          <span className="text-4xl leading-none font-semibold">Memo</span>{" "}
          <span className=" text-lg leading-none justify-center flex">
            medya
          </span>
        </h1>
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
                  setActive("ref");
                }}
                className={
                  active === "ref"
                    ? "border-b-4 pt-1 border-amber-600 h-full flex items-center"
                    : "flex  h-full items-center"
                }
                href="#ref"
              >
                Referanslarımız
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
                href="#contact"
              >
                İletişim
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setActive("address");
                }}
                className={
                  active === "address"
                    ? "border-b-4 pt-1 border-amber-600 h-full flex items-center"
                    : "flex  h-full items-center"
                }
                href="#address"
              >
                Adresimiz
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
