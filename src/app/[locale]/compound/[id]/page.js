"use server";
import React from "react";
import HeroHeaderGallery from "@/layout/HeroHeaderGallery";
import About from "@/layout/About";
import Map from "@/layout/Map";
import FloorPlans from "@/layout/FloorPlans";
import FormsContainer from "@/layout/FormsContainer";
import { getData } from "@/services/fetchData";
import Phases from "./components/Phases";
import Properties from "./@List/page";

export async function generateMetadata() {
  return { title: "Property Search | Search Smarter, Find Faster" };
}

const Compound = async ({ params, searchParams }) => {
  const data = await getData(`/api/CompoundDetails/${params.id}`);
  const compoundData = data?.data || {};
  const title =
    params.locale == "ar"
      ? compoundData?.compoundNameAR
      : compoundData?.compoundNameEn;
  return (
    <>
      <section className="pt140 pt60-md pb90 bgc-f7">
        <div className="container">
          <HeroHeaderGallery data={compoundData} />
          <div className="row wrap">
            <div className="col-lg-8">
              <About isCompound={true} data={compoundData} />
              <Map
                title={title}
                lat={compoundData?.latitude}
                lng={compoundData?.longitude}
              />
              <FloorPlans
                isCompound={true}
                masterPlanImage={`${process.env.NEXT_PUBLIC_COMPOUNDS_MASTER_IMAGE}/${compoundData?.masterPlanImage}`}
              />
            </div>
            <div className="col-lg-4">
              <FormsContainer />
            </div>
          </div>
          <Properties
            id={params.id}
            title={title}
            searchParams={searchParams}
          />
          <Phases />
        </div>
      </section>
    </>
  );
};

export default Compound;
