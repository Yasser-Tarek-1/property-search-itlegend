"use client";
import listings from "@/data/listings";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const PropertyHeader = ({ id, isCompound = false }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  const t = useTranslations("global");
  const h = useTranslations("home");
  const local = useLocale();
  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <div className="d-flex align-items-center gap-3">
            <h2 className="sp-lg-title mb-0">
              {isCompound ? "البوسكو العاصمه الإدارية الجديدة " : data.title}
            </h2>
            <span class="badge bg-secondary d-flex align-items-center">
              {isCompound ? h("compound") : h("properties")}
            </span>
          </div>

          <Link
            href={`/${local}/area/${data.location}`}
            className="pd-meta d-md-flex align-items-center w-fit"
          >
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm w-fit">
              {data.location}
            </p>
          </Link>
        </div>
      </div>
      {/* End .col-lg--8 */}
      <div className="col-lg-4">
        <div className="single-property-content">
          <div className="property-action text-lg-end">
            {isCompound && <span>السعر يبدء من</span>}

            <h3 className="price mb-0">
              {data.price} {t("egp")}
            </h3>
            <Link href={`/${local}/developer/سيراك للتطوير العقاري`}>
              <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm w-fit">
                سيراك للتطوير العقاري
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
