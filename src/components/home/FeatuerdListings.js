"use client";
import listings from "@/data/listings";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import Card from "../Card";

const FeaturedListings = () => {
  const local = useLocale();
  const isClient = typeof window !== "undefined";

  return (
    <>
      {isClient && (
        <>
          <Swiper
            spaceBetween={30}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".featured-next__active",
              prevEl: ".featured-prev__active",
            }}
            pagination={{
              el: ".featured-pagination__active",
              clickable: true,
            }}
            slidesPerView={1}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {listings.map((listing) => (
              <SwiperSlide key={listing.id} className="mb-5">
                <Link href={`/${local}/property/${listing.title}`}>
                  <Card data={listing} colstyle={false} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="rounded-arrow arrowY-center-position">
            <button className="featured-prev__active swiper_button _prev">
              <i className="far fa-chevron-left" />
            </button>
            {/* End prev */}

            <button className="featured-next__active swiper_button _next">
              <i className="far fa-chevron-right" />
            </button>
            {/* End Next */}
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedListings;
