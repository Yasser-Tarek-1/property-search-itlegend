import listings from "@/data/listings";
import { useTranslations } from "next-intl";
import React from "react";

const OverView = ({ id }) => {
  const t = useTranslations("global");
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "bedroom",
      value: data.bed,
    },
    {
      icon: "flaticon-shower",
      label: "bath",
      value: data.bath,
    },
    {
      icon: "flaticon-event",
      label: "delivery",
      value: data.yearBuilding,
    },

    {
      icon: "flaticon-expand",
      label: "theArea",
      value: data.sqft,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "finishing",
      value: "كامل",
    },
  ];

  return (
    <>
      {overviewData.map((item, index) => (
        <div
          key={index}
          className={`col-sm-6 col-lg-4 ${item.xs ? "mb25-xs" : "mb25"}`}
        >
          <div className="overview-element d-flex align-items-center">
            <span className={`icon ${item.icon}`} />
            <div className="ml15 mr15">
              <h6 className="mb-0">{t(item.label)}</h6>
              <p className="text mb-0 fz15">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OverView;
