import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    ScrollReveal().reveal(".headline", {
      reset: true,
      duration: 1200,
    });
    ScrollReveal().reveal(".tags", {
      reset: true,
      duration: 1200,
    });
    ScrollReveal().reveal(".cards", {
      reset: true,
      duration: 1200,
    });
  });

  return (
    <div id="home">
      <Navbar></Navbar>

      <div className="relative   flex items-center h-screen  overflow-hidden">
        <video
          className="absolute z-10 w-full h-screen object-cover brightness-50"
          muted
          autoPlay
          loop
        >
          <source src="/videos/cam1.mp4" type="video/mp4"></source>
        </video>
        <div className="relative headline z-30 container w-full mx-auto">
          <div className="flex  flex-col w-full text-white gap-y-10 text-center justify-center items-center">
            <h1 className=" text-5xl font-bold">
              Yaratıcı. Profesyonel. Etkileyici.
            </h1>
            <p className="text-xl font-thin">
              <span className="font-semibold">Demha Medya</span>, yaratıcı
              belgesel videografik çalışmalarıyla öne çıkan bir şirkettir.
              Profesyonel ekip ve teknolojiyle donatılmış olan{" "}
              <span className="font-semibold">Demha Medya</span>, hikayelerinizi
              etkileyici bir şekilde anlatmak için özgün ve çarpıcı görsel
              anlatımı bir araya getiriyor.
            </p>
            <a
              href="#about"
              className=" rounded ring-inset ring-1 ring-white px-4 py-2"
            >
              Hakkımızda
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
