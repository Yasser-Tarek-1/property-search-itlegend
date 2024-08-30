"use client";
import React from "react";
import HeroV8 from "../home/home-v8/hero";
import SidebarStickyBar from "../home/SidebarStickyBar";
import { useSearchParams } from "next/navigation";
import Hero from "../home/hero";
import Image from "next/image";

const HomeHero = () => {
  const params = useSearchParams();
  const v = params.get("v");

  return (
    <>
      {v == 1 || v != 2 ? (
        <section className="home-banner-style1 p0">
          <div className="home-style1">
            <div className="container">
              <div className="row">
                <div className="col-xl-11 mx-auto">
                  <Hero />
                </div>
              </div>
            </div>
            <a href="#top-area">
              <div className="mouse_scroll animate-up-4">
                <Image
                  width={20}
                  height={105}
                  src="/images/about/home-scroll.png"
                  alt="scroll image"
                />
              </div>
            </a>
          </div>
        </section>
      ) : (
        <>
          <SidebarStickyBar />
          <section className="home-banner-style8 p0">
            <div className="home-style8">
              <div className="container">
                <div className="row align-items-center justify-content-between">
                  <HeroV8 />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default HomeHero;
