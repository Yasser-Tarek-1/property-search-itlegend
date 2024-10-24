"use server";
import React from "react";
import TopAreas from "../components/TopAreas";
import { getData } from "@/services/fetchData";

const HomeTopAreas = async () => {
  let data = await getData("/api/TopAreas/recommended", 10);

  return <TopAreas data={data} />;
};

export default HomeTopAreas;
