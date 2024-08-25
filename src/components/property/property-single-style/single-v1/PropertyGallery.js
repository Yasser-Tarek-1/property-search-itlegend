"use client";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Image from "next/image";
import listings from "@/data/listings";

const images = [
  {
    src: "https://m.ahstatic.com/is/image/accorhotels/El_Gouna_xxxxxx_i103185:3by2?wid=555&hei=370&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
    alt: "2.jpg",
  },
  {
    src: "https://m.ahstatic.com/is/image/accorhotels/El_Gouna_xxxxxx_i103185:3by2?wid=555&hei=370&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
    alt: "3.jpg",
  },
  {
    src: "https://m.ahstatic.com/is/image/accorhotels/El_Gouna_xxxxxx_i103185:3by2?wid=555&hei=370&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
    alt: "4.jpg",
  },
  {
    src: "https://m.ahstatic.com/is/image/accorhotels/El_Gouna_xxxxxx_i103185:3by2?wid=555&hei=370&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
    alt: "5.jpg",
  },
];

const PropertyGallery = ({ id }) => {
  const data = listings.filter((elm) => elm.id == id)[0] || listings[0];
  return (
    <>
      <Gallery>
        <div className="col-sm-6">
          <div className="sp-img-content mb15-md h-100">
            {/* preview-img-1 */}
            <div className="popup-img sp-img w-100 h-100">
              <Item
                original={
                  "https://m.ahstatic.com/is/image/accorhotels/El_Gouna_xxxxxx_i103185:3by2?wid=555&hei=370&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB"
                }
                thumbnail={
                  "https://m.ahstatic.com/is/image/accorhotels/El_Gouna_xxxxxx_i103185:3by2?wid=555&hei=370&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB"
                }
                width={1024}
                height={768}
              >
                {({ ref, open }) => (
                  <Image
                    src={
                      "https://m.ahstatic.com/is/image/accorhotels/El_Gouna_xxxxxx_i103185:3by2?wid=555&hei=370&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB"
                    }
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
        {/* End .col-6 */}

        <div className="col-sm-6 ">
          <div className="row ">
            {images.map((image, index) => (
              <div className="col-6 ps-sm-0 h-100" key={index}>
                <div className="sp-img-content w-100 h-100 ">
                  {/* preview-img-${index + 2} */}
                  <div className={`popup-img  sp-img mb10 w-100 h-100 `}>
                    <Item
                      original={image.src}
                      thumbnail={image.src}
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
                          src={image.src}
                          alt={image.alt || "alt"}
                        />
                      )}
                    </Item>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Gallery>
    </>
  );
};

export default PropertyGallery;
