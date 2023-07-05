import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles.css";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import img from "../assets/images/meter1.svg";
import bg from "../assets/images/banner-bg.png"

function Skills() {
  return (
    <>
      <div id="skills" style={{backgroundImage: `url(${bg})`}} className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4">
        <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
          <h1 className="text-4xl ">Skills</h1>
          <p className="text-lg py-3">
            Aqui algunas de las destrezas en las que me he formado
          </p>
          <div className="box flex  justify-between  items-center bg-[#171717] my-6">
            <Swiper
              slidesPerView={3}
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Navigation, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Certificación Java</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Desarrollador Web </h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">React</h1>
                </div>
              </SwiperSlide>

              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">Javascript</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide className=" bg-[#171717]">
                {" "}
                <div className=" bg-[#171717]">
                  <img src={img} alt="" />
                  <h1 className="font-bold text-2xl my-2">CSS</h1>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
