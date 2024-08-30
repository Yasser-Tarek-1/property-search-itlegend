// "use client";
import React from "react";
import FloorPlans from "@/components/property/property-single-style/common/FloorPlans";
import InfoWithForm from "@/components/property/property-single-style/common/more-info";
import OverView from "@/components/property/property-single-style/common/OverView";
import PropertyAddress from "@/components/property/property-single-style/common/PropertyAddress";
import PropertyDetails from "@/components/property/property-single-style/common/PropertyDetails";
import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
// import PropertyGallery from "@/components/property/single-v4/property-gallery";
import PropertyGallery from "@/components/property/property-single-style/single-v1/PropertyGallery";
import { useLocale, useTranslations } from "next-intl";
import FeaturedListings from "@/components/home/FeatuerdListings";
import ProperteyFiltering from "@/components/property/ProperteyFiltering";
import ContactUs from "@/components/ContactUs";
import ApartmentTypes from "@/components/home/ApartmentTypes";

export const metadata = {
  title: "Property Search | Search Smarter, Find Faster",
};

const Compound = ({ params }) => {
  const t = useTranslations("global");
  const h = useTranslations("home");
  const local = useLocale();

  return (
    <>
      {/* Property All Single V1 */}
      <section className="pt140 pt60-md pb90 bgc-f7">
        <div className="container">
          {/* End .row */}

          {/* End .row */}
          <div className="row">
            <PropertyHeader id={params.id} isCompound />
          </div>

          <div className="row mb30 mt30">
            <PropertyGallery id={params.id} />
          </div>

          <div className="row wrap">
            <div className="col-lg-8">
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb15">
                  عن مصر إيطاليا للتطوير العقاري
                </h4>
                <ProperytyDescriptions isCompound />
                {/* End property description */}

                {/* <div className="row">
                  <div style={{ flex: 1 }}>
                    <h4 className="title fz17 mb10 mt40">{t("facilities")}</h4>
                    <div className="row">
                      <PropertyDetails isCompound />
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 className="title fz17 mb10 mt40">{t("plans")}</h4>
                    <div>
                      <span>
                        <span className="fw600 fz20">351,500</span> / شهر
                      </span>{" "}
                      |{" "}
                      <span>
                        <span className="fw600 fz20">1,554,000</span> - مقدم
                      </span>{" "}
                      |{" "}
                      <span>
                        <span className="fw600 fz20">7</span> سنوات
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>

              <section className="pt30 pb40 facilities">
                <h3>المرافق</h3>
                <div className="mt30 listing-style14">
                  <div className="list-meta">
                    <p className="d-flex align-items-center gap-2" href="#">
                      <span className="flaticon-hotel" />
                      مستشفيات
                    </p>
                    <p className="d-flex  align-items-center gap-2" href="#">
                      <span className="flaticon-location" />
                      مكان مميز
                    </p>
                    <p className="d-flex align-items-center gap-2" href="#">
                      <span className="flaticon-expand" />
                      مساحات خضراء
                    </p>
                    <p className="d-flex align-items-center gap-2" href="#">
                      <span className="flaticon-walking" />
                      ممرات مشي
                    </p>
                    <p className="d-flex align-items-center gap-2" href="#">
                      <span className="flaticon-bike" />
                      ممرات للدرجات
                    </p>
                    <p className="d-flex align-items-center gap-2" href="#">
                      <span className="flaticon-protection" />
                      حماية 24 ساعه
                    </p>
                    <p className="d-flex align-items-center gap-2" href="#">
                      <span className="flaticon-play" />
                      اماكن ترفيه
                    </p>
                  </div>
                </div>
              </section>

              <section className="pt30 pb40">
                <h3>خطط السداد</h3>
                <div className="cards mt30">
                  <div className="card gold">
                    <div>
                      <h5>10%</h5>
                      <span>مقدم</span>
                    </div>
                    <p>7 سنوات</p>
                    <span>سارى لفترة محدودة</span>
                  </div>
                  <div className="card silver">
                    <div>
                      <h5>7%</h5>
                      <span>مقدم</span>
                    </div>
                    <p>9 سنوات</p>
                    <span>سارى لفترة محدودة</span>
                  </div>
                  <div className="card bronze">
                    <div>
                      <h5>12%</h5>
                      <span>مقدم</span>
                    </div>
                    <p>10 سنوات</p>
                    <span>خطة الدفع الاصليه</span>
                  </div>
                </div>
              </section>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb-0">{t("viewMap")}</h4>
                <div className="row ">
                  <PropertyAddress />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">{t("schemes")}</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans isCompound />
                    </div>
                  </div>
                </div>
              </div>
              {/* End .ps-widget */}
              {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">Get More Information</h4>
                <InfoWithForm />
              </div> */}
            </div>
            {/* End .col-8 */}
            <div className="col-lg-4">
              <div className="column mb30">
                <ContactUs />
              </div>
              <div className="column">
                <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                  <h4 className="form-title mb">{t("interview")}</h4>
                  <p className="text">{t("interviewTime")}</p>
                  <ScheduleTour />
                </div>
                {/* End .Schedule a tour */}
              </div>
            </div>
          </div>

          {/* Recommended  */}
          <div className="pt30">
            <ProperteyFiltering />
          </div>
          {/* Recommended */}

          {/* Top مراحل */}
          <section className="pb40-md pb40 pt-0">
            <div className="container">
              <div className="row  justify-content-between align-items-center">
                <div className="col-auto">
                  <div
                    className="main-title"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h2 className="title">مراحل اخرى</h2>
                    <p className="paragraph">7 نتائج متاحة</p>
                  </div>
                </div>
                {/* End header */}

                <div className="col-auto mb30">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-auto">
                      <button
                        className={`${
                          local == "ar" ? "rotate180" : ""
                        } apartment-type2-prev__active swiper_button `}
                      >
                        <i className="far fa-arrow-left-long" />
                      </button>
                    </div>
                    {/* End prev */}

                    <div className="col-auto">
                      <div className="pagination swiper--pagination apartment-type2_pagination__active" />
                    </div>
                    {/* End pagination */}

                    <div className="col-auto">
                      <button
                        className={`${
                          local == "ar" ? "rotate180" : ""
                        } apartment-type2-next__active swiper_button `}
                      >
                        <i className="far fa-arrow-right-long" />
                      </button>
                    </div>
                    {/* End Next */}
                  </div>
                </div>
                {/* End .col for navigation and pagination */}
              </div>
              {/* End .row */}

              <div className="row">
                <div
                  className="col-lg-12"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="property-city-slider">
                    <ApartmentTypes />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
          </section>
          {/* End Top مراحل */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}
    </>
  );
};

export default Compound;
