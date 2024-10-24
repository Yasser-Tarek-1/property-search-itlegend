"use server";
import React from "react";
import { getData } from "@/services/fetchData";
import MainList from "@/layout/main/MainList";

const DeveloperCompounds = async ({ id, title }) => {
  let data = await getData(`/api/Compound/GetByDeveloperId${id}`);

  return <MainList title={title} data={data?.data || []} type="compound" />;
};

export default DeveloperCompounds;
