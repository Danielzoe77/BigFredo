import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { space } from "postcss/lib/list";
import { serviceData } from "../constants";

// install Swiper modules

const SliderServ = () => {
  return (
    <div className=" flex items-center justify-center flex-col h-screen bg-[#100829]  ">
      <h1 className="text-white text-4xl font-semibold pt-8 mb-10">Our Services</h1>
      <p className="text-white mb-10 text-xl pb-8 pt-1">
        We provide best quality of service
      </p>
      <Swiper
        breakpoint={{
          340: {
            slidesPerview: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerview: 3,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, FreeMode]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {serviceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col mb-20 gap-6 group relative shadow-lg overflow-hidden cursor-pointer text-white px-6 py-8 rounded-xl h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] ">
              <div
                className="absolute inset-0 bg-cover bg-center "
                style={{ backgroundImage: `url(${item.backgroudImage})` }}
              ></div>
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50  ">
              </div>
              <div className="flex relative flex-col gap-3">
                < item.icon className="text-blue-600 group-hover:text-blue-400  w-[32px] h-[32px] " />
                <h1 className="text-xl lg:text-2xl">{item.title}</h1>
                <p className="lg:text-[18px]">{item.content}</p>
              </div>
              <RxArrowTopRight className="absolute  left-6 bottom-6 group-hover:text-blue-400 text-white w-[35px] h-[35px] group-hover:rotate-45 duration-100 " />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderServ;
