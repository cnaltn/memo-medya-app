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
import CustomizedDialogs from "./Openmenu";
import Jobs from "./Jobs";

const About = () => {
  return (
    <div className="flex w-full h-max bg-gray-100 pt-32 px-3" id="about">
      <div className="container gap-y-10 py-8 bg-white  shadow rounded text-stone-700  flex flex-col justify-center ">
        <div className="">
          <h1 className="text-4xl tags underline underline-offset-4 decoration-amber-600 text-left font-semibold ">
            Neler Yapıyoruz?
          </h1>
        </div>
        <div className="flex flex-col leading-relaxed">
          <div className="flex flex-col gap-y-24 gap-x-10 tags">
            <Jobs
              jobs_img={
                "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              jobs_title={"Video Çekimi"}
              jobs_desc={
                "Profesyonel video çekimi için doğru yerdesiniz. Deneyimli ekibimizle, görsel anlatımınızı güçlendirecek etkileyici videolar üretiyoruz. Hikayenizi en iyi şekilde aktaracak kaliteli ve özgün içerikler için bize güvenebilirsiniz."
              }
            ></Jobs>
            <Jobs
              jobs_img={
                "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              jobs_title={"TV Programı"}
              jobs_desc={
                "İçerik zenginliği, eğlence ve bilgiyi bir araya getiren profesyonel bir ekip olarak, izleyicilerinizi büyüleyecek ve merakla bekleyecekleri programlar sunuyoruz"
              }
              flex_order={"order-1"}
            ></Jobs>
            <Jobs
              jobs_img={
                "https://images.pexels.com/photos/403495/pexels-photo-403495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              jobs_title={"Fotoğraf Çekimi"}
              jobs_desc={
                "İçerik zenginliği, eğlence ve bilgiyi bir araya getiren profesyonel bir ekip olarak, izleyicilerinizi büyüleyecek ve merakla bekleyecekleri programlar sunuyoruz"
              }
              flex_order={"order-0"}
            ></Jobs>
            <Jobs
              jobs_img={
                " https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              jobs_title={"Reklam Filmleri"}
              jobs_desc={
                "Profesyonel ekip ve özgün yaratıcı fikirlerimizle markanızı etkileyici bir şekilde tanıtacak reklam filmleri üretiyoruz. Ürün veya hizmetinizi en iyi şekilde vurguluyoruz."
              }
              flex_order={"order-1"}
            ></Jobs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
