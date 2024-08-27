import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="pt40 pb40">
      <div className="container">
        <div className="home-banner" data-aos="fade-up" data-aos-delay="100">
          <Image
            src="/banner.webp"
            alt="banner"
            layout="responsive"
            width={1000}
            height={230}
            className="object-cover"
          />
          <div className="overlay">
            <h5>SEARCH SMARTER, FIND FASTER</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
