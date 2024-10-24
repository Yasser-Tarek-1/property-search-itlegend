"use server";
import React from "react";
import { getData } from "@/services/fetchData";
import Recommended from "../components/Recommended";

const HomeRecommended = async () => {
  let data = await getData("/api/TopCompounds/recommended", 10);

  return <Recommended data={data} />;
};

export default HomeRecommended;
