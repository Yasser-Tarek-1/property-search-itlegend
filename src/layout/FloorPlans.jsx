"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FloorPlans = ({ isCompound = false, masterPlanImage }) => {
  const t = useTranslations("global");
  const floorPlanData = [
    {
      id: 1,
      title: "projectOutline",
      imageSrc: masterPlanImage,
    },
    ...[
      !isCompound && {
        id: 2,
        title: "floorPlan",
        imageSrc: "/175_tw.png",
      },
    ],
  ];

  const data = floorPlanData.filter((data) => {
    const type = typeof data;
    return type == "object" && data;
  });

  return (
    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">{t("schemes")}</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="accordion-style1 style2">
            <div className="accordion" id="floor">
              {data.map((floorPlan, index) => (
                <div
                  className={`accordion-item ${index === 1 ? "active" : ""}`}
                  key={floorPlan.id}
                >
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${
                        index === 1 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 1 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      <div className="w-100 d-flex align-items-center justify-content-between">
                        <span className="mr10-sm">{t(floorPlan.title)}</span>
                        <span>
                          <Image
                            src="/blueprint-scheme.png"
                            alt="scheme"
                            width={24}
                            height={24}
                          />
                        </span>
                      </div>
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 1 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#floor"
                  >
                    <div className="accordion-body text-center">
                      <Image
                        width={736}
                        height={544}
                        className="w-100 h-100 cover"
                        src={floorPlan.imageSrc}
                        alt="listing figureout"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorPlans;
