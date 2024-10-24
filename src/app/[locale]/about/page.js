"use server";
import CallToActions from "@/layout/contact/CallToActions";
import AboutBreadcumb from "./components/AboutBreadcumb";
import Content from "./components/Content";
import { getData } from "@/services/fetchData";

export const fetchData = async () => {
  const about = await getData("/api/Page/1");
  return about?.data;
};

export async function generateMetadata({ params }) {
  const aboutData = await fetchData();

  const title =
    params.locale == "ar" ? aboutData?.[0]?.titleAR : aboutData?.[0]?.titleEN;
  const description =
    params.locale == "ar"
      ? aboutData?.[0]?.shortDescriptionAR
      : aboutData?.[0]?.shortDescriptionEN;
  const image = aboutData?.[0]?.image;

  return {
    title: title,
    description,
    openGraph: {
      title: title,
      description,
    },
    twitter: {
      card: `${process.env.NEXT_PUBLIC_PAGES_IMAGE}/${image}`,
      title: title,
      description,
    },
  };
}

const About = async () => {
  const aboutData = await fetchData();

  return (
    <>
      <AboutBreadcumb data={aboutData} />
      <Content data={aboutData} />
      <CallToActions phone={120} />
    </>
  );
};

export default About;
