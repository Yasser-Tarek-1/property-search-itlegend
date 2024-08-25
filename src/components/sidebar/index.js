"use client";

import React from "react";
import SearchBox from "./SearchBox";
// import ListingStatus from "./ListingStatus";
import PropertyType from "./PropertyType";
import PriceSlider from "./PriceRange";
import Bedroom from "./Bedroom";
import Bathroom from "./Bathroom";
import Location from "./Location";
import SquareFeet from "./SquareFeet";
import YearBuilt from "./YearBuilt";
import OtherFeatures from "./OtherFeatures";

const ListingSidebar = ({ filterFunctions }) => {
  return (
    <div className="list-sidebar-style1">
      {/* <div className="widget-wrapper">
        <h6 className="list-title">Find your home</h6>
        <SearchBox filterFunctions={filterFunctions} />
      </div> */}
      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Property Type</h6>
        <div className="checkbox-style1">
          <PropertyType filterFunctions={filterFunctions} />
        </div>
      </div>

      {/* End .widget-wrapper */}

      <div className="widget-wrapper">
        <h6 className="list-title">Price Range</h6>
        {/* Range Slider Desktop Version */}
        <div className="range-slider-style1">
          <PriceSlider filterFunctions={filterFunctions} />
        </div>
      </div>

      <div className="widget-wrapper mb20">
        <div className="btn-area d-grid align-items-center">
          <button className="ud-btn btn-thm">
            <span className="flaticon-search align-text-top pr10" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingSidebar;
