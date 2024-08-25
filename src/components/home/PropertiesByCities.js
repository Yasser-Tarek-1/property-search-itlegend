"use client";

import cities from "@/data/propertyByCities";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PropertiesByCities = () => {
  const t = useTranslations("home");
  const local = useLocale();
  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          nextEl: ".property-by-city-next__active",
          prevEl: ".property-by-city-prev__active",
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {cities.map((city) => (
          <SwiperSlide key={city.id} className="pointer topAreas">
            <Link href={`/${local}/area/${city.name}`}>
              <div className="item">
                <div className="feature-style1">
                  <div className="feature-img">
                    <Image
                      width={400}
                      height={400}
                      className="w-100 h-100 cover"
                      src={`${city.image}`}
                      alt="cities"
                    />
                  </div>
                  <div className="feature-content">
                    <div className="top-area">
                      <h6 className="title mb-1">{city.name}</h6>
                      <p className="text mb-0">
                        {city.propertyCount} {t("compound")}
                      </p>
                      <p className="text">
                        {137} {t("properties")}
                      </p>
                    </div>
                    <div className="bottom-area">
                      <div className="ud-btn2 d-flex item-center gap-2">
                        <span>{t("seeDetails")}</span>
                        <i className="fal fa-arrow-right-long" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="rounded-arrow arrowY-center-position">
        <button className="property-by-city-prev__active swiper_button _prev">
          <i className="far fa-chevron-left" />
        </button>
        {/* End prev */}

        <button className="property-by-city-next__active swiper_button _next">
          <i className="far fa-chevron-right" />
        </button>
        {/* End Next */}
      </div>
      {/* End .col for navigation  */}
    </>
  );
};

export default PropertiesByCities;
