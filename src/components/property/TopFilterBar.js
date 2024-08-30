"use client";

import React from "react";
import PropertyType from "../sidebar/PropertyType";
import PriceRange from "../sidebar/PriceRange";
import Bedroom from "../sidebar/Bedroom";
import Bathroom from "../sidebar/Bathroom";
import { useTranslations } from "next-intl";

const TopFilterBar = ({
  filterFunctions,
  setCurrentSortingOption,
  colstyle,
  setColstyle,
  search = false,
}) => {
  const t = useTranslations("global");

  return (
    <>
      <div className="col-xl-8 d-none d-lg-flex align-items-center justify-content-between mb30 mt40">
        {search ? (
          <div className="row">
            <div
              style={{ width: "fit-content" }}
              class="advance-search-field position-relative text-start "
            >
              <form class="form-search position-relative">
                <div class="box-search">
                  <span class="icon flaticon-home-1"></span>
                  <input
                    class="form-control bgc-f7 bdrs12"
                    placeholder="أدخل عنوانا أو حيا أو مدينة للبحث"
                    type="text"
                    name="search"
                  />
                </div>
              </form>
            </div>{" "}
            <button
              style={{ width: "fit-content" }}
              class="advance-search-icon ud-btn btn-thm"
              type="button"
            >
              <span class="flaticon-search d-flex items-center justify-content-center"></span>
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="dropdown-lists">
          <ul className="p-0 mb-0 text-center text-xl-start">
            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {t("type")} <i className="fa fa-angle-down" />
              </button>
              <div className="dropdown-menu">
                <div className="widget-wrapper bdrb1 pb25 mb-0 pl20 pr20">
                  <h6 className="list-title"> {t("type")}</h6>
                  <div className="checkbox-style1">
                    <PropertyType filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm dropdown-toggle"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End li Property Type */}

            <li className="list-inline-item position-relative">
              <button
                type="button"
                className="open-btn  dropdown-toggle"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                {t("price")} <i className="fa fa-angle-down " />
              </button>

              <div className="dropdown-menu dd3">
                <div className="widget-wrapper bdrb1 pb25 mb-0 pl20 pr20">
                  <h6 className="list-title"> {t("price")}</h6>
                  {/* Range Slider Desktop Version */}
                  <div className="range-slider-style1">
                    <PriceRange filterFunctions={filterFunctions} />
                  </div>
                </div>
                <div className="text-end mt10 pr10">
                  <button
                    type="button"
                    className="done-btn ud-btn btn-thm drop_btn3"
                  >
                    Done
                  </button>
                </div>
              </div>
            </li>
            {/* End li Price */}
          </ul>
        </div>
      </div>
      {/* End .col-9 */}
      <div className="col-xl-4 d-flex align-items-center justify-content-center mb30 mt40">
        <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
          <div className="pcs_dropdown pr10 d-flex align-items-center">
            <span style={{ minWidth: "80px" }}>ترتيب حسب</span>
            <select
              className="form-select"
              onChange={(e) =>
                setCurrentSortingOption &&
                setCurrentSortingOption(e.target.value)
              }
            >
              <option>الاحدث</option>
              <option>افضل سعر</option>
              <option>اقل سعر</option>
              <option>اعلي سعر</option>
            </select>
          </div>
          <div
            className={`pl15 pr15 bdrl1 bdrr1 d-none d-md-block  cursor ${
              !colstyle ? "menuActive" : "#"
            } `}
            onClick={() => setColstyle(false)}
          >
            Grid
          </div>
          <div
            className={`pl15 pr15 d-none d-md-block  cursor ${
              colstyle ? "menuActive" : "#"
            }`}
            onClick={() => setColstyle(true)}
          >
            List
          </div>
        </div>
      </div>

      {/* End .col-3 */}
    </>
  );
};

export default TopFilterBar;
