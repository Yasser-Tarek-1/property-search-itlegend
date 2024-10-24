import React from "react";
import { useTranslations } from "next-intl";
import RecommendedWrapper from "./RecommendedWrapper";

const Recommended = ({ data }) => {
  const t = useTranslations("home");

  return (
    data?.success && (
      <section className="pb40 pt70 bgc-white">
        <div className="container">
          <div className="row align-items-center" data-aos="fade-up">
            <div className="col-lg-9">
              <div className="main-title2">
                <h2 className="title">{t("recommended")}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-listing-slider">
                <RecommendedWrapper data={data?.data || []} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Recommended;
