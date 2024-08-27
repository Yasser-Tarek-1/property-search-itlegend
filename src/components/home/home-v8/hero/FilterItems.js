"use client";
import Select from "react-select";
import Slider, { Range } from "rc-slider";
import { useState } from "react";
import { useTranslations } from "next-intl";

const FilterItems = () => {
  const [price, setPrice] = useState([20, 70987]);
  const t = useTranslations("home");
  const g = useTranslations("global");

  // price range handler
  const handleOnChange = (value) => {
    setPrice(value);
  };

  return (
    <>
      <div className="col-md-12">
        <div className="advance-search-field position-relative text-start mb20">
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
      {/* End .col-12 */}
      <div className="col-md-12">
        <div className="dropdown-lists at-home8 mb20">
          <div
            className="btn open-btn drop_btn3 text-start dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-auto-close="outside"
          >
            {g("price")} <i className="fas fa-caret-down float-end fz11" />
          </div>
          <div className="dropdown-menu">
            <div className="widget-wrapper pb20 mb0 pl20 pr20">
              {/* Range Slider Mobile Version */}
              <div className="range-slider-style2">
                <div className="range-wrapper at-home10">
                  <Slider
                    range
                    max={100000}
                    min={0}
                    defaultValue={price}
                    onChange={(value) => handleOnChange(value)}
                    id="slider"
                    reverse
                  />
                  <div className="d-flex align-items-center">
                    <span id="slider-range-value1">${price[0]}</span>
                    <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
                    <span id="slider-range-value2">${price[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default FilterItems;
