'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import styles from "./swipper.module.css"; // Import the CSS module
import Image from "next/image";

import img1 from "../../../../../../../../public/scroll-1.jpg"
import img2 from "../../../../../../../../public/scroll-2.jpg"
import img3 from "../../../../../../../../public/scroll-3.jpg"
import img4 from "../../../../../../../../public/scroll-4.jpg"
import img5 from "../../../../../../../../public/scroll-5.jpg"
import img6 from "../../../../../../../../public/scroll-6.jpg"
import img7 from "../../../../../../../../public/scroll-7.jpg"
import img8 from "../../../../../../../../public/scroll-8.jpg"

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        loop={true} 
        slidesPerView="auto"
        spaceBetween={50} 
        className={styles.swipper}
        freeMode={true} 
      >
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img1} alt=""></Image></SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img2} alt=""></Image></SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img3} alt=""></Image></SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img4} alt=""></Image></SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img5} alt=""></Image></SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img6} alt=""></Image></SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img7} alt=""></Image></SwiperSlide>
        <SwiperSlide style={{ width: "450px" }}><Image style={{marginRight:"25px"}} height={500} width={950} src={img8} alt=""></Image></SwiperSlide>
      </Swiper>
    </>
  );
}