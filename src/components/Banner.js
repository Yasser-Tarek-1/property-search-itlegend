import Image from "next/image";
import React from "react";

const Banner = ({ image, notAos = false, className }) => {
  return (
    <section className="pt40 pb40">
      <div className="container">
        <div
          className={`${className} home-banner`}
          data-aos={!notAos && "fade-up"}
          data-aos-delay="100"
        >
          <div className="overlay">
            <h5>SEARCH SMARTER, FIND FASTER</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
