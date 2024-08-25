"use client";
import listings from "@/data/listings";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const GalleryBox = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const imageUrls = [
    "https://m.ahstatic.com/is/image/accorhotels/Aswan_xxxxxxxxxxxx_i130214:3by2?wid=326&hei=217&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
    "https://m.ahstatic.com/is/image/accorhotels/El_Quseir_xxxxxxxx_i119309:3by2?wid=326&hei=217&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
    "https://m.ahstatic.com/is/image/accorhotels/aja_p_5187-27:3by2?wid=326&hei=217&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
  ];

  return (
    <>
      <Swiper
        className="overflow-visible"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".single-pro-slide-next__active",
          prevEl: ".single-pro-slide-prev__active",
        }}
        slidesPerView={1}
        initialSlide={1}
        loop={true}
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div className="item">
              <Image
                width={1170}
                height={600}
                className="bdrs12 cover"
                src={imageUrl}
                alt={`Image ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rounded-arrow arrowY-center-position">
        <button className="single-pro-slide-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="single-pro-slide-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default GalleryBox;
