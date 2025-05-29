"use client";
import Img1 from "../../../../public/wizziarImgArray.jpg";
import Img2 from "../../../../public/wizziarArray.jpg";
import Img3 from "../../../../public/wizziar.jpg";
import Img4 from "../../../../public/wizziarArray12.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Prenota from "./component-1-container-1/page";
export default function Component2() {
  const ImgAPI = [Img1, Img2, Img3, Img4];
  const [imgIndex, setImgIndex] = useState(1);
  const [img, setImg] = useState(ImgAPI[imgIndex]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIndex((prev) => (prev + 1) % ImgAPI.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setImg(ImgAPI[imgIndex]);
  }, [imgIndex]);

  return (
    <div
      style={{
        zIndex: 1,
        position: "relative",
        height: "595px",
      }}
    >
      <style>{`
                .fade-image {
                    transition: opacity 0.5s ease-in-out;
                    opacity: 1;
                    margin-top: 10px;
                    width: 100%;
                    -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
                    mask-image: linear-gradient(to bottom , rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
                }
                .fade-image.hidden {
                    opacity: 0;
                }
            `}</style>
      <Image
        draggable="false"
        height={650}
        src={img}
        alt=""
        className={fade ? "fade-image" : "fade-image hidden"}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "887px",
          marginTop:"10px",
          background:
            "linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 0.71) 60%, rgba(0, 0, 0, 0.8) 100%)",
          pointerEvents: "none",
        }}
      />
      <Prenota></Prenota>
    </div>
  );
}
