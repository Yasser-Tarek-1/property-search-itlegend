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
import PropertyGallery from "@/components/property/property-single-style/single-v1/PropertyGallery";
import { useTranslations } from "next-intl";
// import FeaturedListings from "@/components/home/FeatuerdListings";
import ContactUs from "@/components/ContactUs";
import dynamic from "next/dynamic";
const FeaturedListings = dynamic(
  () => import("@/components/home/FeatuerdListings"),
  { ssr: false }
);

export const metadata = {
  title: "Property Search | Search Smarter, Find Faster",
};

const Property = ({ params }) => {
  const t = useTranslations("global");
  const h = useTranslations("home");

  return (
    <>
      {/* Property All Single V1 */}
      <section className="pt180 pt60-md pb90 bgc-f7">
        <div className="container">
          <div className="row">
            <PropertyHeader id={params.id} />
          </div>
          {/* End .row */}

          <div className="row mb30 mt30">
            <PropertyGallery id={params.id} />
          </div>
          {/* End .row */}

          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 m0">{t("overview")}</h4>
                <p className="title fz15 mb30">
                  <span>{t("reference")}: </span> <span>5421201640</span>
                </p>
                <div className="row">
                  <OverView />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb15">عن سوديك إيست</h4>
                <ProperytyDescriptions />
                {/* End property description */}

                <div className="row">
                  <div style={{ flex: 1 }}>
                    <h4 className="title fz17 mb10 mt40">{t("facilities")}</h4>
                    <div className="row">
                      <PropertyDetails />
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
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb-0">{t("viewMap")}</h4>
                <div className="row">
                  <PropertyAddress />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb30">{t("schemes")}</h4>
                <div className="row">
                  <div className="col-md-12">
                    <div className="accordion-style1 style2">
                      <FloorPlans />
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
          <section className="pt50 pb15">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="main-title2">
                    <h2 className="title">{h("recommended")}</h2>
                  </div>
                </div>
              </div>
              {/* End header */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-listing-slider">
                    <FeaturedListings />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Recommended */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}
    </>
  );
};

export default Property;
