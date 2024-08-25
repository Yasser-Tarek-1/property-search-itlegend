"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const FloorPlans = ({ isCompound = false }) => {
  const t = useTranslations("global");
  const floorPlanData = [
    {
      id: 1,
      title: "projectOutline",
      imageSrc: "/IlMonte_Galala_-_MP.jpg",
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
    <div className="accordion" id="accordionExample">
      {data.map((floorPlan, index) => (
        <div
          className={`accordion-item ${index === 1 ? "active" : ""}`}
          key={floorPlan.id}
        >
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${index === 1 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded={index === 1 ? "true" : "false"}
              aria-controls={`collapse${index}`}
            >
              <span className="w-100 d-md-flex align-items-center">
                <span className="mr10-sm">{t(floorPlan.title)}</span>
              </span>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${
              index === 1 ? "show" : ""
            }`}
            aria-labelledby={`heading${index}`}
            data-parent="#accordionExample"
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
  );
};

export default FloorPlans;
