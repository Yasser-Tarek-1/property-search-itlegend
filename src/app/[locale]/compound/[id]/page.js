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
import PropertyGallery from "@/components/property/single-v4/property-gallery";
import { useTranslations } from "next-intl";
import FeaturedListings from "@/components/home/FeatuerdListings";
import ProperteyFiltering from "@/components/property/ProperteyFiltering";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Property Search | Search Smarter, Find Faster",
};

const Compound = ({ params }) => {
  const t = useTranslations("global");
  const h = useTranslations("home");

  return (
    <>
      {/* Property All Single V1 */}
      <section className="pt40-md pb90 pb60-md">
        <div className="container">
          {/* End .row */}

          <section className="pt20 pb60 pb30-md bgc-white">
            <PropertyGallery id={params.id} />
          </section>

          {/* End .row */}
          <section className="pt20 pb60 pb30-md">
            <div className="row">
              <PropertyHeader id={params.id} isCompound />
            </div>
          </section>
          <div className="row wrap">
            <div className="col-lg-8">
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <h4 className="title fz17 mb15">
                  عن مصر إيطاليا للتطوير العقاري
                </h4>
                <ProperytyDescriptions isCompound />
                {/* End property description */}

                <div className="row">
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
          <ProperteyFiltering />
          {/* Recommended */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}
    </>
  );
};

export default Compound;
