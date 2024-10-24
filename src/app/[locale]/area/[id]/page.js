"use server";
import React from "react";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb.jsx";
import About from "../components/About.jsx";
import { getData } from "@/services/fetchData.js";
import MainList from "@/layout/main/MainList.jsx";
import AboutCompounds from "./@Compounds/page.js";

async function getAreaDetails(id) {
  return await getData(`/api/Area/${id}`);
}

export async function generateMetadata({ params }) {
  const areaDetails = await getAreaDetails(params.id);

  return {
    title: areaDetails?.data?.seoTitle,
    description: areaDetails?.data?.seoDescription,
  };
}

const Area = async ({ params }) => {
  const areaDetails = await getAreaDetails(params.id);

  return (
    <section className="agent-single pt60 pb-0">
      <div className="cta-agent bgc-thm-light mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <Breadcrumb data={areaDetails?.data} />
              <div className="img-box-12 position-relative d-none d-xl-block">
                <Image
                  width={120}
                  height={120}
                  className="img-1 spin-right"
                  src="/images/about/element-12.png"
                  alt="agents"
                />
                <Image
                  width={41}
                  height={11}
                  className="img-2 bounce-x"
                  src="/images/about/element-13.png"
                  alt="agents"
                />
                <Image
                  width={57}
                  height={49}
                  className="img-3 bounce-y"
                  src="/images/about/element-11.png"
                  alt="agents"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <About id={params.id} about={areaDetails?.data || []} />
      <AboutCompounds
        title={
          params.locale == "ar"
            ? areaDetails?.data?.nameAr
            : areaDetails?.data?.nameEn
        }
        id={params.id}
      />
    </section>
  );
};

export default Area;
