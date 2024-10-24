import React from "react";
import { useTranslations } from "next-intl";

const Overview = () => {
  const t = useTranslations("global");
  const data = {};

  const overviewData = [
    {
      icon: "flaticon-bed",
      label: "bedroom",
      value: data?.bed,
    },
    {
      icon: "flaticon-shower",
      label: "bath",
      value: data?.bath,
    },
    {
      icon: "flaticon-event",
      label: "delivery",
      value: data?.yearBuilding,
    },

    {
      icon: "flaticon-expand",
      label: "theArea",
      value: data?.sqft,
      xs: true,
    },
    {
      icon: "flaticon-home-1",
      label: "finishing",
      value: "كامل",
    },
  ];

  return (
    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
      <h4 className="title fz17 m0">{t("overview")}</h4>
      <p className="title fz15 mb30">
        <span>{t("reference")}: </span> <span>5421201640</span>
      </p>
      <div className="row">
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
      </div>
    </div>
  );
};

export default Overview;
