"use client";
import { isHTML } from "@/services";
import { useLocale } from "next-intl";
import React from "react";

const Content = ({ data }) => {
  const locale = useLocale();
  const content = locale == "ar" ? data?.contentAR : data?.contentEN;

  return (
    <section className="our-about pb90">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-6">
            <h2>
              {locale == "ar"
                ? data?.shortDescriptionAR
                : data?.shortDescriptionEN}
            </h2>
          </div>
          <div className="col-lg-6">
            {isHTML(content) ? (
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            ) : (
              <div className="text">{content}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
