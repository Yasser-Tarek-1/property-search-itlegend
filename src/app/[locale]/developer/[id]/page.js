import React from "react";
import FormContact from "@/components/property/FormContact";
import SingleAgencyCta from "@/components/property/SingleAgencyCta";
import Image from "next/image";
import Link from "next/link";
import ScheduleTour from "@/components/property/property-single-style/sidebar/ScheduleTour";
import ProperteyFiltering from "@/components/property/ProperteyFiltering";
import ContactUs from "@/components/ContactUs";
import { useLocale } from "next-intl";

export const metadata = {
  title: "Agency Single || Homez - Real Estate NextJS Template",
};

const Developer = ({ params }) => {
  const local = useLocale();
  const tags = [
    "القاهرة الجديدة",
    "سيدي عبد الرحمن",
    "العاصمة الإدارية الجديدة",
  ];

  return (
    <section className="agent-single pt60">
      <div className="cta-agent bgc-dark mx-auto maxw1600 pt60 pb60 bdrs12 position-relative mx20-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <SingleAgencyCta id={params.id} />
              <div className="img-box-12 position-relative d-none d-xl-block">
                <Image
                  width={120}
                  height={120}
                  className="img-1 spin-right"
                  src="/images/about/element-12.png"
                  alt="agents"
                />
                <Image
                  width={41}
                  height={11}
                  className="img-2 bounce-x"
                  src="/images/about/element-13.png"
                  alt="agents"
                />
                <Image
                  width={57}
                  height={49}
                  className="img-3 bounce-y"
                  src="/images/about/element-11.png"
                  alt="agents"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End cta-agent */}
      <div className="container">
        <div className="row wow fadeInUp" data-aos-delay="300">
          <div className="col-lg-8 pr40 pr20-lg">
            <div className="row">
              <div className="col-lg-12">
                <div className="agent-single-details mt30 pb30 bdrb1">
                  <h6 className="fz17 mb30">عن سيراك للتطوير العقاري</h6>
                  <p className="text">
                    شركة سيراك للتطوير العقاري SERAC Developments هي شراكة
                    إماراتية مصرية يمتلكها رجل الأعمال طارق سليمان والشيخ توحيد
                    عبد الله ويمتلك كلا منهما خبرة واسعة في مجالات مختلفة،
                    وتمكنت الشركة من تدشين العديد من المشروعات الناجحة التي حرصت
                    الشركة على تصميمها بأحدث التقنيات الحديثة.
                  </p>
                  <div className="agent-single-accordion">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="flush-headingOne"
                          data-bs-parent="#accordionFlushExample"
                          style={{}}
                        >
                          <div className="accordion-body p-0">
                            <p className="text">
                              أبرز مشروعات شركة سيراك للتطوير العقاري طرحت شركة
                              SERAC Developments العديد من المشروعات التي لاقت
                              اقبالًا كبيرًا من قبل المستثمرين ومن بينها
                            </p>
                          </div>
                        </div>
                        <h2 className="accordion-header" id="flush-headingOne">
                          <button
                            className="accordion-button p-0 collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            Show more
                          </button>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sidebar-widget mb30 mt30 pb20">
              <h6 className="widget-title">مناطق المطور</h6>
              <div className="tag-list mt20">
                {tags.map((tag, index) => (
                  <Link href={`/${local}/area/${tag}`} key={index}>
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* End .col-lg-8 */}

          <div className="col-lg-4">
            <div className="agent-single-form home8-contact-form default-box-shadow1 mb30-md position-relative">
              <ContactUs />
            </div>
          </div>
          {/* End .col-lg-4 */}
        </div>
      </div>
      <ProperteyFiltering title="كمبوندات في سيراك للتطوير العقاري" />
    </section>
  );
};

export default Developer;
