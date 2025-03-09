"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Gallery() {
  return (
    <>
    <div className="p-[20px]">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Work</h2>
        <div className="gallery-container">
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            style={{ width: "100%", height: "550px" }}
        >
            <SwiperSlide><div className="slide-content"><img src="media/CAROUSELimg-1.jpg" alt=""></img></div></SwiperSlide>
            <SwiperSlide><div className="slide-content"><img src="media/CAROUSELimg-2.png" alt=""></img></div></SwiperSlide>
            <SwiperSlide><div className="slide-content"><img src="media/CAROUSELimg-3.png" alt=""></img></div></SwiperSlide>
            <SwiperSlide><div className="slide-content"><img src="media/CAROUSELimg-4.jpg" alt=""></img></div></SwiperSlide>
            <SwiperSlide><div className="slide-content"><img src="media/CAROUSELimg-5.jpg" alt=""></img></div></SwiperSlide>
        </Swiper>
        </div>
    </div>
    </>
  );
}