"use client";
import React, { useEffect, useState } from "react";
import MainCard from "./MainCard";
import CardLoading from "../CardLoading";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function MainList({
  data,
  type,
  title,
  colstyle = false,
  isCompoundDetails = false,
}) {
  const locale = useLocale();
  const isLoading = false;
  const g = useTranslations("global");
  const router = useRouter();

  // if user in Compound Details
  const filterData = [
    { value: "Latest", lable: locale == "ar" ? "الاحدث" : "Latest" },
    {
      value: "LowestPrice",
      lable: locale == "ar" ? "أدنى سعر" : "Lowest Price",
    },
    {
      value: "HighestPrice",
      lable: locale == "ar" ? "أعلى سعر" : "Highest Price",
    },
  ];

  const [orderBy, setOrderBy] = useState(filterData[0].value);

  useEffect(() => {
    if (isCompoundDetails) {
      const currentParams = new URLSearchParams(window.location.search);
      currentParams.set("OrderBy", orderBy);

      router.push(`${window.location.pathname}?${currentParams.toString()}`, {
        shallow: true,
        scroll: false,
      });
    }
  }, [orderBy]);

  return (
    <>
      <section className="breadcumb-section pb5 pt5">
        <div className="container">
          <div className="row mt25 mb75 justify-content-between gap-3">
            <div className="col-lg-08 w-fit">
              <div className="breadcumb-style1">
                {title && data?.length > 0 && (
                  <h2 className="title ">
                    {type == "compound" ? g("discover") : g("discoverPro")}{" "}
                    {title}
                  </h2>
                )}
              </div>
            </div>
            {isCompoundDetails && (
              <div className="col-lg-03 w-fit d-flex align-items-center justify-content-center">
                <div className="page_control_shorting d-flex align-items-center justify-content-center justify-content-sm-end">
                  <div className="pcs_dropdown pr10 d-flex align-items-center">
                    <span style={{ minWidth: "80px" }}>
                      {locale == "ar" ? "ترتيب حسب" : "Order by"}
                    </span>
                    <select
                      className="form-select"
                      onChange={(e) => setOrderBy(e.target.value)}
                    >
                      {filterData.map(({ value, lable }, idx) => {
                        return (
                          <option key={idx} value={value}>
                            {lable}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="pt0 pb90">
        <div className="container">
          <div className="row" style={{ rowGap: 32 }}>
            {!isLoading
              ? data?.map((compound) => (
                  <div
                    className={` ${
                      colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
                    }`}
                    key={compound.id}
                  >
                    <MainCard type={type} colstyle={colstyle} data={compound} />
                  </div>
                ))
              : [{}, {}, {}].map((_, idx) => {
                  return (
                    <div
                      key={idx}
                      className={` ${
                        colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
                      }`}
                    >
                      <CardLoading />
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
}
