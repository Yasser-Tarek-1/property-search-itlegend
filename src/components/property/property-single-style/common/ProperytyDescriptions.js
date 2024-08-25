"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

const ProperytyDescriptions = ({ isCompound }) => {
  const t = useTranslations("global");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <>
      <p className="text mb10">
        تأتي قرية المونت جلالة من قبل شركة تطوير مصر والتي امتازت بتقديمها
        مشروعات بمستوى عالي من الدقة والتميز، فامتد المشروع على مساحة بلغت 2.24
        مليون متر مربع، اشتملت تلك المساحة على قدر كبير من المسطحات الخضراء
        والبحيرات الصناعية المتنوعة، بخلاف وجود قدر كبير من المرافق والخدمات
        المختلفة. اشتمل مشروع المونت جلالة السخنة على قدر كبير من المراحل تنوعت
        بين خمس مراحل مختلفة هي:
      </p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
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
                  _ ايلا Ella IL Mont galala: تتواجد على شكل مدرج، أعلى مستوى
                  البحر، تمتلك إطلالة رائعة على أجمل البحيرات الكريستالية.
                  <br /> _ فيا phia il monte galala: تم تصميمها بعناية شديدة
                  جمعت بين الطراز النوبي واليوناني.
                  <br />_ ايلارا Elara: تمتلك إطلالة مميزة على أجمل المناظر
                  الطبيعية.
                  <br />_ ميستا المونت جلالة السخنة Maesta: تعد المنطقة الأكثر
                  ارتفاعًا في المشروع، وتمتاز بامتلاكها إطلالة بانورامية على
                  البحر الأحمر والبحيرات المختلفة.
                  <br />_ مارينا Marina: أحدث مراحل المشروع التي أطلقتها الشركة
                  المطورة.
                </p>
              </div>
            </div>
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button p-0 collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                // aria-expanded="false"
                aria-expanded={!isCollapsed}
                aria-controls="flush-collapseOne"
                onClick={toggleCollapse}
              >
                {isCollapsed ? t("showMore") : t("showLess")}
              </button>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
