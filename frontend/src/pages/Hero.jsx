import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/img.png";
import img2 from "../assets/images2.jpg";
import img3 from "../assets/images3.jpg";
import img4 from "../assets/images4.jpg";
import img5 from "../assets/images5.jpg";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
      <div className="md:w-1/2 w-full text-center">
        <h1 className="md:text-5xl text-3xl font-bold md:leading-tight">
          All Informative Blogs at One Place
        </h1>
        <p className="py-4">
          Discover a treasure trove of knowledge with All-in-One Informative
          Blogs, your go-to platform for both technical and non-technical
          insights.
        </p>
      </div>
      <div className="md:w-1/2 w-full mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={img1}
              className="w-full lg:h-[420px] sm:h-96 h-80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              className="w-full lg:h-[420px] sm:h-96 h-80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              className="w-full lg:h-[420px] sm:h-96 h-80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img4}
              className="w-full lg:h-[420px] sm:h-96 h-80"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img5}
              className="w-full lg:h-[420px] sm:h-96 h-80"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
