import ProperteyFiltering from "@/components/property/ProperteyFiltering";
import React from "react";
export const metadata = {
  title: "Gird Full 3 Column || Homez - Real Estate NextJS Template",
};

const Search = () => {
  return (
    <section className="pt40-md pt180">
      {/* Breadcumb Sections */}
      <ProperteyFiltering search title="اكتشف الكمبوندات (الشيخ زايد)" isCom />
    </section>
  );
};

export default Search;
