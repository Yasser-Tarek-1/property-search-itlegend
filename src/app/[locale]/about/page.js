import Agents from "@/components/about/Agents";
import CallToActions from "@/components/contact/CallToActions";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const metadata = {
  title: "About  || Homez - Real Estate NextJS Template",
};

const About = () => {
  const nav = useTranslations("nav");
  const about = useTranslations("about");
  return (
    <>
      {/* Breadcrumb Sections */}
      <section className="breadcumb-section2 p-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <h2 className="title"> {nav("about")}</h2>
                <div className="breadcumb-list d-flex gap-1">
                  <Link href="/">{nav("home")}</Link> <span>/</span>{" "}
                  <span href="#">{nav("about")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Breadcrumb Sections */}

      {/* Our About Area */}
      <section className="our-about pb90">
        <div className="container">
          <div className="row" data-aos="fade-up" data-aos-delay="300">
            <div className="col-lg-6">
              <h2>{about("mission")}</h2>
            </div>
            <div className="col-lg-6">
              <p className="text mb25">{about("text")}</p>
              <p className="text mb55">{about("text2")}</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Our About Area */}

      {/* Exclusive Agents */}
      {/* <section className="pb90">
        <div className="container">
          <div className="row  justify-content-center">
            <div className="col-auto">
              <div
                className="main-title"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2 className="title">Our Exclusive Agetns</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="300">
              <div className="property-city-slider">
                <Agents />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Exclusive Agents */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* End Our Footer */}
    </>
  );
};

export default About;
