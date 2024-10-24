"use server";
import { getData } from "@/services/fetchData";
import React from "react";
import Head from "./components/Head";
import MainList from "@/layout/main/MainList";
import Pagination from "@/layout/Pagination";
import SearchPagination from "./components/SearchPagination";

export async function generateMetadata() {
  return { title: "Property Search | Search Smarter, Find Faster" };
}

const Search = async ({ searchParams }) => {
  const {
    SearchTerm,
    MinPrice,
    MaxPrice,
    PropertyTypeIds,
    Rooms,
    MinArea,
    MaxArea,
    AreaId,
    OrderBy,
    page,
  } = searchParams;

  const queryString = new URLSearchParams({
    SearchTerm: SearchTerm || "",
    MinPrice: MinPrice || "",
    MaxPrice: MaxPrice || "",
    PropertyTypeIds: PropertyTypeIds || "",
    Rooms: Rooms || "",
    MinArea: MinArea || "",
    MaxArea: MaxArea || "",
    AreaId: AreaId || "",
    OrderBy: OrderBy || "Latest",
    PageNumber: page || 1,
  }).toString();
  const pageSize = 9;
  const url = `/api/PropertySearch/search?${queryString}&pageSize=${pageSize}`;
  const data = await getData(url);

  return (
    <section className="pt30-md pt150 pb30">
      <Head headSearchTerm={SearchTerm} />
      <MainList data={data?.data?.items || []} type="property" />
      <SearchPagination
        pageSize={pageSize}
        totalRecords={data?.data?.totalRecords || []}
      />
    </section>
  );
};

export default Search;
