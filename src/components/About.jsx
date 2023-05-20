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
    <div className="flex w-full h-screen bg-white" id="about">
      <div className="container gap-y-10  flex flex-col justify-center ">
        <div className="">
          <h1 className="text-4xl tags underline underline-offset-4 decoration-amber-600 text-left font-semibold text-stone-700">
            Neler Yapıyoruz?
          </h1>
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-8 text-stone-700">
            <div className=" flex flex-col cards px-4   gap-y-2 py-4 bg-gray-50 shadow rounded">
              <BsFillCameraVideoFill className="text-3xl"></BsFillCameraVideoFill>
              <p className="font-medium text-xl">Video Çekimi</p>
              <p className="text-base">
                Profesyonel video çekimi için doğru yerdesiniz. Deneyimli
                ekibimizle, görsel anlatımınızı güçlendirecek etkileyici
                videolar üretiyoruz. Hikayenizi en iyi şekilde aktaracak
                kaliteli ve özgün içerikler için bize güvenebilirsiniz.
              </p>
            </div>
            <div className=" flex flex-col px-4 cards  gap-y-2 py-4 bg-gray-50 shadow rounded">
              <RiMovie2Fill className="text-3xl"></RiMovie2Fill>
              <p className="font-medium text-xl">Tanıtım Filmi</p>
              <p className="text-base">
                Profesyonel ekip ve eşsiz görsel anlatımımızla, markanızı
                etkileyici bir şekilde tanıtacak film projeleri üretiyoruz.
                Hedef kitlenizi etkileyecek, akılda kalıcı ve yaratıcı bir
                hikaye anlatımı için bize güvenebilirsiniz.
              </p>
            </div>
            <div className=" flex flex-col px-4 cards  gap-y-2 py-4 bg-gray-50 shadow rounded">
              <BsFillStarFill className="text-3xl"></BsFillStarFill>
              <p className="font-medium text-xl">Reklam Filmleri</p>
              <p className="text-base">
                Profesyonel ekip ve özgün yaratıcı fikirlerimizle markanızı
                etkileyici bir şekilde tanıtacak reklam filmleri üretiyoruz.
                Ürün veya hizmetinizi en iyi şekilde vurguluyoruz.
              </p>
            </div>
            <div className=" flex flex-col px-4 cards  gap-y-2 py-4 bg-gray-50 shadow rounded">
              <MdMovie className="text-3xl"></MdMovie>
              <p className="font-medium text-xl">TV Programı</p>
              <p className="text-base">
                İçerik zenginliği, eğlence ve bilgiyi bir araya getiren
                profesyonel bir ekip olarak, izleyicilerinizi büyüleyecek ve
                merakla bekleyecekleri programlar sunuyoruz.
              </p>
            </div>
            <div className=" flex flex-col px-4 cards gap-y-2 py-4 bg-gray-50 shadow rounded">
              <BsCameraFill className="text-3xl"></BsCameraFill>
              <p className="font-medium text-xl">Fotoğraf Çekimi</p>
              <p className="text-base">
                Profesyonel fotoğrafçılarımız, en özel anlarınızı etkileyici ve
                estetik bir şekilde yakalayarak ölümsüzleştiriyor. Yaratıcı
                vizyonumuz, teknik uzmanlığımız ve özenle seçilen mekanlarla,
                sizin için özel bir fotoğraf deneyimi sunuyoruz.
              </p>
            </div>
            <div className=" flex flex-col px-4 cards gap-y-2 py-4 bg-gray-50 shadow rounded">
              <MdAnimation className="text-3xl"></MdAnimation>
              <p className="font-medium text-xl">Grafik Animasyon</p>
              <p className="text-base">
                Profesyonel ekip ve eşsiz görsel anlatımımızla, markanızı
                etkileyici bir şekilde tanıtacak film projeleri üretiyoruz.
                Hedef kitlenizi etkileyecek, akılda kalıcı ve yaratıcı bir
                hikaye anlatımı için bize güvenebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
