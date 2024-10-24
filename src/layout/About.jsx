"use client";
import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import { isHTML } from "@/services";

const About = ({ isCompound, data }) => {
  const t = useTranslations("global");
  const [isCollapsed, setIsCollapsed] = useState(true);
  const d = useTranslations("details");
  const locale = useLocale();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const content =
    locale == "ar" ? data?.compoundDescriptionAR : data?.compoundDescriptionEN;

  const columns = [
    [
      {
        label: "رووف",
      },
      {
        label: "تراس",
      },
      {
        label: "حديقه",
      },
    ],
  ];

  return (
    <>
      <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
        <h4 className="title fz17 mb15">
          {d("about")}{" "}
          {locale == "ar" ? data?.compoundNameAR : data?.compoundNameEN}
        </h4>
        {isHTML(content) ? (
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        ) : (
          <div className="text">{content}</div>
        )}
        {/* <p className="text mb10">
          تأتي قرية المونت جلالة من قبل شركة تطوير مصر والتي امتازت بتقديمها
          مشروعات بمستوى عالي من الدقة والتميز، فامتد المشروع على مساحة بلغت
          2.24 مليون متر مربع، اشتملت تلك المساحة على قدر كبير من المسطحات
          الخضراء والبحيرات الصناعية المتنوعة، بخلاف وجود قدر كبير من المرافق
          والخدمات المختلفة. اشتمل مشروع المونت جلالة السخنة على قدر كبير من
          المراحل تنوعت بين خمس مراحل مختلفة هي:
        </p>
        <div className="agent-single-accordion">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body p-0">
                  <p className="text">
                    _ ايلا Ella IL Mont galala: تتواجد على شكل مدرج، أعلى مستوى
                    البحر، تمتلك إطلالة رائعة على أجمل البحيرات الكريستالية.
                    <br /> _ فيا phia il monte galala: تم تصميمها بعناية شديدة
                    جمعت بين الطراز النوبي واليوناني.
                    <br />_ ايلارا Elara: تمتلك إطلالة مميزة على أجمل المناظر
                    الطبيعية.
                    <br />_ ميستا المونت جلالة السخنة Maesta: تعد المنطقة الأكثر
                    ارتفاعًا في المشروع، وتمتاز بامتلاكها إطلالة بانورامية على
                    البحر الأحمر والبحيرات المختلفة.
                    <br />_ مارينا Marina: أحدث مراحل المشروع التي أطلقتها
                    الشركة المطورة.
                  </p>
                </div>
              </div>
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button p-0 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded={!isCollapsed}
                  aria-controls="flush-collapseOne"
                  onClick={toggleCollapse}
                >
                  {isCollapsed ? t("showMore") : t("showLess")}
                </button>
              </h2>
            </div>
          </div>
        </div> */}
        {!isCompound && (
          <div className="row">
            <div style={{ flex: 1 }}>
              <h4 className="title fz17 mb10 mt40">{t("facilities")}</h4>
              <div className="row">
                <div className="row">
                  {columns.map((column, columnIndex) => (
                    <div
                      key={columnIndex}
                      className={`col-md-6 col-xl-4${
                        columnIndex === 1 ? " offset-xl-2" : ""
                      }`}
                    >
                      {column.map((detail, index) => (
                        <div
                          key={index}
                          className="d-flex justify-content-between"
                        >
                          <div className="pd-list">
                            <p className="fw600 mb10 ff-heading dark-color">
                              {detail.label}
                            </p>
                          </div>
                          <div className="pd-list">
                            <p className="text mb10">{detail.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h4 className="title fz17 mb10 mt40">{t("plans")}</h4>
              <div className="plans">
                <p className="mb5">
                  <span className="fw600 fz20">1,554,000</span> -{" "}
                  <span>مقدم</span>
                </p>
                <p className="mb5">
                  <span className="fw600 fz20">351,500</span> / <span>شهر</span>
                </p>

                <p className="mb5">
                  <span className="fw600 fz20">7</span> <span>سنوات</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {isCompound && (
        <>
          <section className="pt30 pb40 facilities">
            <h3>المرافق</h3>
            <div className="mt30 listing-style14">
              <div className="list-meta">
                <p className="d-flex align-items-center gap-2" href="#">
                  <span className="flaticon-hotel" />
                  مستشفيات
                </p>
                <p className="d-flex  align-items-center gap-2" href="#">
                  <span className="flaticon-location" />
                  مكان مميز
                </p>
                <p className="d-flex align-items-center gap-2" href="#">
                  <span className="flaticon-expand" />
                  مساحات خضراء
                </p>
                <p className="d-flex align-items-center gap-2" href="#">
                  <span className="flaticon-walking" />
                  ممرات مشي
                </p>
                <p className="d-flex align-items-center gap-2" href="#">
                  <span className="flaticon-bike" />
                  ممرات للدرجات
                </p>
                <p className="d-flex align-items-center gap-2" href="#">
                  <span className="flaticon-protection" />
                  حماية 24 ساعه
                </p>
                <p className="d-flex align-items-center gap-2" href="#">
                  <span className="flaticon-play" />
                  اماكن ترفيه
                </p>
              </div>
            </div>
          </section>
          <section className="pt30 pb40">
            <h3>خطط السداد</h3>
            <div className="cards mt30">
              <div className="card gold">
                <div>
                  <h5>10%</h5>
                  <span>مقدم</span>
                </div>
                <p>7 سنوات</p>
                <span>سارى لفترة محدودة</span>
              </div>
              <div className="card silver">
                <div>
                  <h5>7%</h5>
                  <span>مقدم</span>
                </div>
                <p>9 سنوات</p>
                <span>سارى لفترة محدودة</span>
              </div>
              <div className="card bronze">
                <div>
                  <h5>12%</h5>
                  <span>مقدم</span>
                </div>
                <p>10 سنوات</p>
                <span>خطة الدفع الاصليه</span>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default About;
