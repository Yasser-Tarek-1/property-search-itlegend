"use client";

import { useLocale } from "next-intl";
import Card from "../Card";
import Link from "next/link";

const FeaturedListings = ({ data, colstyle }) => {
  const local = useLocale();

  return (
    <>
      {data.map((listing) => (
        <div
          className={` ${
            colstyle ? "col-sm-12 col-lg-6" : "col-sm-6 col-lg-4"
          }  `}
          key={listing.id}
        >
          <Link href={`/${local}/property/${listing.title}`}>
            <Card colstyle={colstyle} data={listing} />
          </Link>
        </div>
      ))}
    </>
  );
};

export default FeaturedListings;
