"use client";
import React from "react";
import { useTranslations } from "next-intl";
import TopAreasList from "./TopAreasList";

const TopAreas = ({ data }) => {
  const t = useTranslations("home");
  return (
    data?.success && (
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider position-relative">
                <TopAreasList data={data?.data || []} />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default TopAreas;
