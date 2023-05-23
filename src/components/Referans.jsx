import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { FreeMode, Pagination, Autoplay } from "swiper";
import CustomizedDialogs from "./Openmenu";
import Button from "./Button";

const Referans = () => {
  return (
    <div id="ref" className="bg-gray-100 pb-4 pt-32 px-3">
      <div className="w-full flex flex-col bg-white container shadow rounded py-8 gap-y-10">
        <h1 className="text-4xl text-left tags underline decoration-amber-600 underline-offset-4 font-semibold text-stone-700">
          Referanslarımız
        </h1>

        <div className="w-full cards">
          {" "}
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            freeMode={true}
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Zorlu_Holding_logo.svg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/tr/thumb/5/56/%C4%B0%C3%A7i%C5%9Fleri_Bakanl%C4%B1%C4%9F%C4%B1_logo.svg/1024px-%C4%B0%C3%A7i%C5%9Fleri_Bakanl%C4%B1%C4%9F%C4%B1_logo.svg.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Ba%C5%9Fbakanl%C4%B1k_Devlet_Planlama_Te%C5%9Fkilat%C4%B1_logo.svg/1024px-Ba%C5%9Fbakanl%C4%B1k_Devlet_Planlama_Te%C5%9Fkilat%C4%B1_logo.svg.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Milli_E%C4%9Fitim_Bakanl%C4%B1%C4%9F%C4%B1_Logo.svg/1024px-Milli_E%C4%9Fitim_Bakanl%C4%B1%C4%9F%C4%B1_Logo.svg.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/TRT_logo_%282018-%29.svg/1920px-TRT_logo_%282018-%29.svg.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/tr/c/ca/Kanal_D_logo.svg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/tr/0/04/Cine5_logosu.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/tr/2/28/%C3%87aykur_logo.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Karadeniz_Technical_University_logo.svg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/tr/7/75/Garanti_BBVA.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Borusan.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/tr/1/11/Qnb-finansbank.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/b/bc/UNESCO_logo.svg"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Enka_logo.svg/199px-Enka_logo.svg.png"
              ></img>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                className=""
                width={100}
                height={100}
                src="https://upload.wikimedia.org/wikipedia/tr/0/0a/TFF_logo.png"
              ></img>
            </SwiperSlide>
          </Swiper>
        </div>
        <Button label={"Tüm Referanslarımız"}></Button>
      </div>
    </div>
  );
};

export default Referans;
