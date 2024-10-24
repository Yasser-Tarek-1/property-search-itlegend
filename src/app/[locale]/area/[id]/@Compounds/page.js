"use server";
import React from "react";
import { getData } from "@/services/fetchData";
import MainList from "@/layout/main/MainList";

const AboutCompounds = async ({ id, title }) => {
  let data = await getData(`/api/Compound/GetByAreaId${id}`);

  return <MainList title={title} data={data?.data || []} type="compound" />;
};

export default AboutCompounds;
