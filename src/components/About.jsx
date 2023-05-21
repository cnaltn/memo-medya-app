import React from "react";
import {
  BsFillCameraVideoFill,
  BsCameraReelsFill,
  BsCameraFill,
  BsFillStarFill,
  BsCameraVideo,
} from "react-icons/bs";

import { MdAnimation, MdMovie } from "react-icons/md";

import { RiMovie2Fill } from "react-icons/ri";

const About = () => {
  return (
    <div className="flex w-full h-max bg-gray-50 pt-32 pb-36" id="about">
      <div className="container gap-y-10 py-8 bg-white  shadow rounded text-stone-700  flex flex-col justify-center ">
        <div className="">
          <h1 className="text-4xl tags underline underline-offset-4 decoration-amber-600 text-left font-semibold ">
            Neler Yapıyoruz?
          </h1>
        </div>
        <div className="flex flex-col  gap-y-24 leading-relaxed">
          <div className="flex gap-x-10 tags">
            <div className="w-[45%] flex">
              <img
                className="rounded object-cover"
                src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></img>
            </div>
            <div className="w-[55%] flex flex-col gap-y-5 justify-center">
              <h1 className="text-4xl font-bold">Video Çekimi</h1>
              <p className="text-justify">
                Profesyonel video çekimi için doğru yerdesiniz. Deneyimli
                ekibimizle, görsel anlatımınızı güçlendirecek etkileyici
                videolar üretiyoruz. Hikayenizi en iyi şekilde aktaracak
                kaliteli ve özgün içerikler için bize güvenebilirsiniz.
              </p>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 transition-colors text-white w-max rounded">
                Daha Fazlasını Öğren
              </button>
            </div>
          </div>
          <div className="flex gap-x-10 tags">
            <div className="w-[45%] flex order-2">
              <img
                className="rounded object-cover"
                src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></img>
            </div>
            <div className="w-[55%] flex flex-col gap-y-5 justify-center">
              <h1 className="text-4xl font-bold">TV Programı</h1>
              <p className="text-justify">
                İçerik zenginliği, eğlence ve bilgiyi bir araya getiren
                profesyonel bir ekip olarak, izleyicilerinizi büyüleyecek ve
                merakla bekleyecekleri programlar sunuyoruz
              </p>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 transition-colors text-white w-max rounded">
                Daha Fazlasını Öğren
              </button>
            </div>
          </div>
          <div className="flex gap-x-10 tags">
            <div className="w-[45%] flex ">
              <img
                className="rounded object-cover"
                src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></img>
            </div>
            <div className="w-[55%] flex flex-col gap-y-5 justify-center">
              <h1 className="text-4xl font-bold">Tanıtım Filmi</h1>
              <p className="text-justify">
                Profesyonel ekip ve eşsiz görsel anlatımımızla, markanızı
                etkileyici bir şekilde tanıtacak film projeleri üretiyoruz.
                Hedef kitlenizi etkileyecek, akılda kalıcı ve yaratıcı bir
                hikaye anlatımı için bize güvenebilirsiniz.
              </p>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 transition-colors text-white w-max rounded">
                Daha Fazlasını Öğren
              </button>
            </div>
          </div>
          <div className="flex gap-x-10 tags">
            <div className="w-[45%] flex order-2 ">
              <img
                className="rounded object-cover"
                src="https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              ></img>
            </div>
            <div className="w-[55%] flex flex-col gap-y-5 justify-center">
              <h1 className="text-4xl font-bold">Reklam Filmleri</h1>
              <p className="text-justify">
                Profesyonel ekip ve özgün yaratıcı fikirlerimizle markanızı
                etkileyici bir şekilde tanıtacak reklam filmleri üretiyoruz.
                Ürün veya hizmetinizi en iyi şekilde vurguluyoruz.
              </p>
              <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 transition-colors text-white w-max rounded">
                Daha Fazlasını Öğren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
