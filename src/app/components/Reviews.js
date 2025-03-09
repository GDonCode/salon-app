"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function Reviews() {
  return (
    <>
    <h2 className="text-3xl font-bold mt-[60px] mb-10 text-center">What our Customers Say</h2>
    <div className="gallery-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide><div className="slide-content">1</div></SwiperSlide>
        <SwiperSlide><div className="slide-content">2</div></SwiperSlide>
        <SwiperSlide><div className="slide-content">3</div></SwiperSlide>
        <SwiperSlide><div className="slide-content">4</div></SwiperSlide>
        <SwiperSlide><div className="slide-content">5</div></SwiperSlide>
      </Swiper>
    </div>
    </>
  );
}