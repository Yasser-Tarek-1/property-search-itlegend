import { useTranslations } from "next-intl";
import React from "react";

const Form = () => {
  const t = useTranslations("global");
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {t("name")}
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={t("name")}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-lg-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {t("phone")}
            </label>
            <input
              type="number"
              className="form-control"
              placeholder={t("phone")}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">
              {t("email")}
            </label>
            <input
              type="email"
              className="form-control"
              placeholder={t("email")}
              required
            />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="mb10">
            <label className="heading-color ff-heading fw600 mb10">
              {t("msg")}
            </label>
            <textarea cols={30} rows={4} placeholder={t("msg")} required />
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button type="submit" className="ud-btn btn-thm gap-2">
              <span className="mx-1">{t("send")}</span>
              <i className="fal fa-arrow-right-long" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
