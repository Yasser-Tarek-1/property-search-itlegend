import { useTranslations } from "next-intl";
import React from "react";

const ScheduleTour = () => {
  const t = useTranslations("global");

  const tabs = [
    {
      id: "personal",
      label: "personal",
    },
    {
      id: "zoom",
      label: "zoom",
    },
  ];

  return (
    <div className="ps-navtab">
      <ul
        className="nav mb-4 d-flex p0 justify-content-center gap-2"
        id="pills-tab"
        role="tablist"
      >
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id} role="presentation">
            <button
              className={`nav-link${
                tab.id === "personal" ? " active mb5-lg" : ""
              }`}
              id={`pills-${tab.id}-tab`}
              data-bs-toggle="pill"
              data-bs-target={`#pills-${tab.id}`}
              type="button"
              role="tab"
              aria-controls={`pills-${tab.id}`}
              aria-selected={tab.id === "personal" ? "true" : "false"}
            >
              {t(tab.label)}
            </button>
          </li>
        ))}
      </ul>
      {/* End nav-pills */}

      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab) => (
          <div
            className={`tab-pane fade${
              tab.id === "personal" ? " show active" : ""
            }`}
            id={`pills-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`pills-${tab.id}-tab`}
            key={tab.id}
          >
            <form className="form-style1">
              <div className="row">
                <div className="col-lg-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("name")}
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("phone")}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={t("time")}
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="ud-btn btn-thm d-flex items-center gap-2 justify-content-center"
                    >
                      <span>{t("send")}</span>
                      <i className="fal fa-arrow-right-long" />
                    </button>
                  </div>
                </div>
                {/* End .col-12 */}
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTour;
