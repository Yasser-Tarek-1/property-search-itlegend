import { agentsData } from "@/data/agency";
import Image from "next/image";
import React from "react";

const SingleAgencyCta = ({ id, colorWhite = true, isArea }) => {
  const data = agentsData.filter((elm) => elm.id == id)[0] || agentsData[0];

  const agentData = {
    name: data.name,
    company: data.agencyTitle,
    reviews: `${data.starRating} • 49 Reviews`,
    phone1: "+848 032 03 01",
    phone2: "+848 032 03 01",
  };
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center gap-4">
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            src={data.imgSrc}
            style={{ borderRadius: "50%", objectFit: "cover" }}
            alt="agents"
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml0-xs   ">
          <div className="d-flex align-items-center gap-3">
            <h2 className={`${colorWhite && "text-white"} title mb-3 `}>
              {isArea ? "العالمين الجديدة" : "سيراك للتطوير العقاري"}
            </h2>
            <span class="badge bg-secondary d-flex align-items-center">
              {isArea ? "منطقة" : "مطور"}
            </span>
          </div>
          <div className="agent-meta mb15 gap-3 d-md-flex align-items-center">
            <a
              className={`${colorWhite && "text-white"} text fz15 pe-2 bdrr1 `}
              href="#"
            >
              51 وحدات متاحة
            </a>
            <a
              className={`${
                colorWhite && "text-white"
              } text fz15 pe-2 ps-2 bdrr1 `}
              href="#"
            >
              <span> سعر يبدأ من</span> <span>5,400,000 جم</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAgencyCta;
