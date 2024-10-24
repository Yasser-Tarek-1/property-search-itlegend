"use server";
import React from "react";
import { getData } from "@/services/fetchData";
import TopCompounds from "../components/TopCompounds";

const HomeTopCompounds = async () => {
  let data = await getData("/api/TopCompounds/most-searched", 10);

  return <TopCompounds data={data} />;
};

export default HomeTopCompounds;
