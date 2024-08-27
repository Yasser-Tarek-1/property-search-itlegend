"use client";
import React from "react";
import FilterItems from "./FilterItems";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const HeroContent = () => {
  const router = useRouter();
  const t = useTranslations("home");
  const local = useLocale();

  return (
    <div className="advance-search-tab mt60 mt30-lg mx-auto animate-up-3">
      <div className="tab-content">
        <div className="active tab-pane">
          <div className="advance-content-style1 at-home8">
            <div className="row">
              <FilterItems />
              <div className="col-md-12">
                <div className="d-bloc mt-3 mt-md-0 mb15">
                  <button
                    className="advance-search-btn"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#advanceSeachModal"
                  >
                    <span className="flaticon-settings" /> {t("advanced")}
                  </button>
                </div>
                <div className="d-grid">
                  <button
                    className="ud-btn btn-dark"
                    type="button"
                    onClick={() => router.push(`/${local}/search`)}
                  >
                    <span className="flaticon-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
