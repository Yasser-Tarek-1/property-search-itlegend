import React from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import HeroHeaderGallery from "@/layout/HeroHeaderGallery";
import Overview from "../components/Overview";
import About from "@/layout/About";
import Map from "@/layout/Map";
import FloorPlans from "@/layout/FloorPlans";
import FormsContainer from "@/layout/FormsContainer";
// const FeaturedListings = dynamic(
//   () => import("@/components/home/FeatuerdListings"),
//   { ssr: false }
// );

export async function generateMetadata() {
  return { title: "Property Search | Search Smarter, Find Faster" };
}

const Property = ({ params }) => {
  const t = useTranslations("global");
  const h = useTranslations("home");

  return (
    <>
      <section className="pt140 pt60-md pb90 bgc-f7">
        <div className="container">
          <HeroHeaderGallery id={params.id} isCompound={false} />
          <div className="row wrap">
            <div className="col-lg-8">
              <Overview />
              <About isCompound={false} />
              <Map />
              <FloorPlans isCompound={false} />
            </div>
            <div className="col-lg-4">
              <FormsContainer />
            </div>
          </div>
          <section className="pt50 pb15">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="main-title2">
                    <h2 className="title">{h("recommended")}</h2>
                  </div>
                </div>
              </div>
              {/* End header */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="feature-listing-slider">
                    {/* <FeaturedListings /> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Property;
