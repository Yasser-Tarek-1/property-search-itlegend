"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { formatPrice } from "@/services";

// const fakaData = [
//   "449e58c6-005b-4b57-97d7-5173de2926bf.webp",
//   "b3b11e2b-17ea-4ebc-9a88-e2db8dac000a.webp",
//   "449e58c6-005b-4b57-97d7-5173de2926bf.webp",
//   "b3b11e2b-17ea-4ebc-9a88-e2db8dac000a.webp",
//   "449e58c6-005b-4b57-97d7-5173de2926bf.webp",
//   "b3b11e2b-17ea-4ebc-9a88-e2db8dac000a.webp",
//   "b3b11e2b-17ea-4ebc-9a88-e2db8dac000a.webp",
// ];

const HeroHeaderGallery = ({ isCompound = true, data }) => {
  const locale = useLocale();
  const t = useTranslations("global");
  const h = useTranslations("home");
  const d = useTranslations("details");

  const image = `${process.env.NEXT_PUBLIC_COMPOUNDS_IMAGE}`;
  const mediaPaths = data?.mediaPaths || [];
  const mediaPathsLength = mediaPaths?.length;
  const title = locale == "ar" ? data?.compoundNameAR : data?.compoundNameEN;

  return (
    <>
      <div className="row justify-content-between">
        <div className="col-lg-8">
          <div className="single-property-content mb30-md">
            <div className="d-flex align-items-center gap-3">
              <h2 className="sp-lg-title mb-0">{title}</h2>
              <span className="badge bg-secondary d-flex align-items-center">
                {isCompound ? h("compound") : h("properties")}
              </span>
            </div>
            <Link
              href={`/${locale}/area/${data?.areaId}`}
              className="pd-meta d-md-flex align-items-center w-fit"
            >
              <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm w-fit">
                {locale == "ar" ? data?.areaNameAR : data?.areaNameEN}
              </p>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 w-fit">
          <div className="single-property-content">
            <div className="property-action">
              {isCompound && <span> {d("priceStart")}</span>}
              <h3 className="price mb-0">
                {formatPrice(data?.priceStartsFrom)} {t("egp")}
              </h3>
              <Link href={`/${locale}/developer/${data?.developerId}`}>
                <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm w-fit">
                  {locale == "ar"
                    ? data?.developerNameAR
                    : data?.developerNameEN}
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb30 mt30 w-100">
        {mediaPathsLength > 0 && (
          <Gallery>
            <div
              className={`col-12 col-md-${
                mediaPathsLength === 1
                  ? "12"
                  : mediaPathsLength === 3
                  ? "4"
                  : "6"
              }`}
            >
              <div className="sp-img-content mb15-md h-100">
                <div className="popup-img sp-img w-100 h-100">
                  <Item
                    original={`${image}/${mediaPaths[0]}`}
                    thumbnail={`${image}/${mediaPaths[0]}`}
                    width={1024}
                    height={768}
                  >
                    {({ ref, open }) => (
                      <Image
                        src={`${image}/${mediaPaths[0]}`}
                        width={590}
                        height={510}
                        ref={ref}
                        onClick={open}
                        alt="image"
                        role="button"
                        className="w-100 h-100 cover"
                      />
                    )}
                  </Item>
                </div>
              </div>
            </div>

            {mediaPathsLength > 1 && (
              <div
                className={`overflow-hidden d-none d-md-block col-md-${
                  mediaPathsLength === 3 ? "8" : "6"
                } p-0 `}
              >
                <div
                  className={`row ${
                    mediaPathsLength === 2 ? "justify-content-center" : ""
                  }`}
                >
                  {mediaPaths.slice(1, 5).map((img, index) => (
                    <div
                      className={`col-${
                        mediaPathsLength === 2 ? "12" : "6"
                      } ps-sm-0 h-100`}
                      style={{ padding: "0 0.75rem" }}
                      key={index}
                    >
                      <div className="sp-img-content w-100 h-100">
                        <div
                          className={`${
                            (index == 2 || index == 3) && "mt10"
                          } popup-img sp-img w-100 h-100`}
                        >
                          <Item
                            original={`${image}/${img}`}
                            thumbnail={`${image}/${img}`}
                            width={1024}
                            height={768}
                          >
                            {({ ref, open }) => (
                              <Image
                                width={270}
                                height={250}
                                className="w-100 h-100 cover"
                                ref={ref}
                                onClick={open}
                                role="button"
                                src={`${image}/${img}`}
                                alt="alt"
                              />
                            )}
                          </Item>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Hidden items for slider (if more than 5 images) */}
            {mediaPaths.slice(5).map((img, index) => (
              <Item
                original={`${image}/${img}`}
                thumbnail={`${image}/${img}`}
                width={1024}
                height={768}
                key={index + 6}
              >
                {({ ref, open }) => (
                  <Image
                    ref={ref}
                    width={1024}
                    height={768}
                    onClick={open}
                    role="button"
                    src={`${image}/${img}`}
                    alt="alt"
                    style={{ display: "none" }}
                  />
                )}
              </Item>
            ))}
          </Gallery>
        )}
      </div>
    </>
  );
};

export default HeroHeaderGallery;
