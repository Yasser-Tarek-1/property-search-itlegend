"use server";
import Banner from "./components/Banner";
import HomeHero from "./components/HomeHero";
import HomeTopAreas from "./@TopAreas/page";
import HomeTopCompounds from "./@TopCompounds/page";
import HomeRecommended from "./@Recommended/page";

const Home = async () => {
  return (
    <>
      <HomeHero />
      <Banner notAos className="banner-1" />
      <HomeTopAreas />
      <Banner className="banner-2" />
      <HomeTopCompounds />
      <Banner className="banner-3" />
      <HomeRecommended />
    </>
  );
};

export default Home;
