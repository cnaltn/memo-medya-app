import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ScrollReveal from "scrollreveal";
import {
  CCarouselItem,
  CCarousel,
  CImage,
  CCarouselCaption,
} from "@coreui/react";

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

      <div className="relative   flex flex-col items-center justify-center h-screen  overflow-hidden">
        <CCarousel
          controls
          indicators
          transition="crossfade"
          className="w-full absolute z-10 h-screen"
        >
          <CCarouselItem className="">
            <CImage
              className="d-block w-100 h-screen object-cover brightness-50"
              src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
             "
              alt="slide 1"
            />
            <CCarouselCaption className="flex flex-col h-full gap-y-5 items-center justify-center">
              <h1 className=" text-5xl font-bold">
                Yaratıcı. Profesyonel. Etkileyici.
              </h1>
              <p className="text-xl font-thin">
                <span className="font-semibold">Demha Medya</span>, yaratıcı
                belgesel videografik çalışmalarıyla öne çıkan bir şirkettir.
                Profesyonel ekip ve teknolojiyle donatılmış olan{" "}
                <span className="font-semibold">Demha Medya</span>,
                hikayelerinizi etkileyici bir şekilde anlatmak için özgün ve
                çarpıcı görsel anlatımı bir araya getiriyor.
              </p>
              <a
                href="#about"
                className=" rounded hover:bg-amber-600  w-max transition-colors ring-inset ring-1 ring-white px-4 py-2"
              >
                Hakkımızda
              </a>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem className="">
            <CImage
              className="d-block w-100 h-screen object-cover brightness-50"
              src="https://images.pexels.com/photos/15488258/pexels-photo-15488258/free-photo-of-siyah-ve-beyaz-peyzaj-orman-agaclar.jpeg"
              alt="slide 2"
            />
            <CCarouselCaption className="flex flex-col h-full gap-y-5 items-center justify-center">
              <h1 className=" text-5xl font-bold">Sayfa 2</h1>
              <p className="text-xl font-thin">
                <span className="font-semibold">Demha Medya</span> sayfa 2
              </p>
              <a
                href="#about"
                className=" rounded hover:bg-amber-600  w-max transition-colors ring-inset ring-1 ring-white px-4 py-2"
              >
                Hakkımızda
              </a>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem className="">
            <CImage
              className="d-block w-100 h-screen object-cover brightness-50"
              src=" https://images.pexels.com/photos/16747771/pexels-photo-16747771/free-photo-of-isvec-te-agacli-yol.jpeg"
              alt="slide 3"
            />
            <CCarouselCaption className="flex flex-col h-full gap-y-5 items-center justify-center">
              <h1 className=" text-5xl font-bold">Sayfa 3</h1>
              <p className="text-xl font-thin">
                <span className="font-semibold">Demha Medya</span> sayfa 3
              </p>
              <a
                href="#about"
                className=" rounded hover:bg-amber-600  w-max transition-colors ring-inset ring-1 ring-white px-4 py-2"
              >
                Hakkımızda
              </a>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      </div>
    </div>
  );
};

export default Hero;
