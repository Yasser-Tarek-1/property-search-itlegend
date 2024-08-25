import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Card = ({ colstyle = false, data }) => {
  const g = useTranslations("global");
  const card = data; // `data` is now a single listing object
  return (
    <div className="item">
      <div
        className={
          colstyle
            ? "listing-style1 listCustom listing-type"
            : "listing-style1 "
        }
      >
        <div className="list-thumb">
          <Image
            width={382}
            height={248}
            className="w-100 h-100 cover"
            src={card.image}
            alt="listings"
          />
          <div className="list-price">
            {card.price} {g("egp")}
          </div>
        </div>
        <div className="list-content">
          <h6 className="list-title">{card.title}</h6>
          <p className="list-text">{card.location}</p>
          <div className="list-meta d-flex align-items-center">
            <span className="flaticon-bed d-flex" /> {card.bed} {g("bed")}
            <span className="flaticon-shower d-flex" /> {card.bath} {g("bath")}
            <span className="flaticon-expand d-flex" /> {card.sqft} {g("sqft")}
          </div>
          <hr className="mt-2 mb-2" />
          <div className="list-meta2 d-flex justify-content-between align-items-center">
            <span className="for-what">المطور العقاري</span>
            <div className="icons d-flex align-items-center">
              <a href="#">
                <span className="flaticon-fullscreen" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
