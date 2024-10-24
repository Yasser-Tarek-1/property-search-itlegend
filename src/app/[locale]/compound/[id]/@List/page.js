"use server";
import React from "react";
import { getData } from "@/services/fetchData";
import PropertiesList from "../components/PropertiesList";

const Properties = async ({ id, title, searchParams }) => {
  const { OrderBy, page } = searchParams;
  const queryString = new URLSearchParams({
    OrderBy: OrderBy || "Latest",
    PageNumber: page || 1,
  }).toString();

  const pageSize = 9;
  const data = await getData(
    `/api/PropertySearch/search?CompoundId=${id}&${queryString}&pageSize=${pageSize}`
  );
  const properties = data?.data;

  return (
    <PropertiesList
      title={title}
      data={properties?.items}
      pageSize={pageSize}
      totalRecords={properties?.totalRecords}
    />
  );
};

export default Properties;
