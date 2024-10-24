import React from "react";
import ContactUs from "@/layout/contact/ContactUs";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import { useTranslations } from "next-intl";

const FormsContainer = () => {
  const t = useTranslations("global");

  return (
    <>
      {/* <div className="column mb30"> */}
      <ContactUs />
      {/* </div> */}
      {/* <div className="column">
        <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
          <h4 className="form-title mb">{t("interview")}</h4>
          <p className="text">{t("interviewTime")}</p>
          <ScheduleTour />
        </div>
      </div> */}
    </>
  );
};

export default FormsContainer;
