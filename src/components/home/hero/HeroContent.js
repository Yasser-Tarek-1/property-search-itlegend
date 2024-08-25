"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const HeroContent = () => {
  const local = useLocale();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("buy");
  const t = useTranslations("home");

  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "rent", label: "Rent" },
    { id: "sold", label: "Sold" },
  ];

  return (
    <div className="advance-search-tab mt50 mt30-md mx-auto animate-up-3">
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            className={`${activeTab === tab.id ? "active" : ""} tab-pane`}
            key={tab.id}
          >
            <div className="advance-content-style1">
              <div className="row">
                <div className="col-md-8 col-lg-9">
                  <div className="advance-search-field position-relative text-start">
                    <form className="form-search position-relative">
                      <div className="box-search">
                        <span className="icon flaticon-home-1" />
                        <input
                          className="form-control bgc-f7 bdrs12"
                          type="text"
                          name="search"
                          placeholder={t("placeholder")}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                {/* End .col-md-8 */}

                <div className="col-md-4 col-lg-3">
                  <div className="d-flex align-items-center justify-content-start justify-content-md-center mt-3 mt-md-0 gap-3">
                    <button
                      className="advance-search-btn"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#advanceSeachModal"
                    >
                      <span className="flaticon-settings d-flex" />{" "}
                      {t("advanced")}
                    </button>
                    <button
                      className="advance-search-icon ud-btn btn-thm"
                      onClick={() => router.push(`/${local}/search`)}
                      type="button"
                    >
                      <span className="flaticon-search d-flex items-center justify-content-center" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroContent;
