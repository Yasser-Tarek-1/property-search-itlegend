import Banner from "@/components/Banner";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";
import ApartmentTypes from "@/components/home/ApartmentTypes";
// import FeaturedListings from "@/components/home/FeatuerdListings";
import Header from "@/components/home/Header";
import Hero from "@/components/home/home-v8/hero";
import PropertiesByCities from "@/components/home/PropertiesByCities";
import SidebarStickyBar from "@/components/home/SidebarStickyBar";
import HomeHero from "@/components/homeHero/HomeHero";
// import Hero from "@/components/home/hero";
import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
const FeaturedListings = dynamic(
  () => import("@/components/home/FeatuerdListings"),
  { ssr: false }
);

export const metadata = {
  title: "Property Search | Search Smarter, Find Faster",
};

const Home = () => {
  const t = useTranslations("home");
  const local = useLocale();

  return (
    <>
      <HomeHero />

      {/* Banner */}
      <Banner notAos className="banner-1" />
      {/* Banner */}

      {/* Top Areas */}
      <section id="top-area" className="pb40 pt70">
        <div className="container">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">{t("topAreas")}</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            {/* End col-lg-9 */}
          </div>
          {/* End .row */}
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <PropertiesByCities />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Top Areas */}

      {/* Banner */}
      <Banner className="banner-2" />
      {/* Banner */}

      {/* Top Compounds */}
      <section className="pb40 pt70">
        <div className="container">
          <div className="row  justify-content-between align-items-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">{t("topCompounds")}</h2>
                {/* <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p> */}
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button
                    className={`${
                      local == "en" ? "rotate180" : ""
                    } apartment-type2-next__active swiper_button `}
                  >
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
                <div className="col-auto">
                  <div className="pagination swiper--pagination apartment-type2_pagination__active" />
                </div>
                {/* End pagination */}
                <div className="col-auto">
                  <button
                    className={`${
                      local == "en" ? "rotate180" : ""
                    } apartment-type2-prev__active swiper_button`}
                  >
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}
              </div>
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <ApartmentTypes />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Top Compounds */}

      {/* Banner */}
      <Banner className="banner-3" />
      {/* Banner */}

      {/* Recommended  */}
      <section className="pb40 pt70 bgc-white">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">{t("recommended")}</h2>
              </div>
            </div>
          </div>
          {/* End header */}
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <FeaturedListings />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recommended */}
    </>
  );
};

export default Home;
