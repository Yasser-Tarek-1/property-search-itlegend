"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslations } from "next-intl";
import toast, { Toaster } from "react-hot-toast";

const Form = ({ id, type = 0 }) => {
  const t = useTranslations("global");
  const f = useTranslations("form");
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object().shape({
    fullName: yup.string().required(f("fullName")),
    mobile: yup
      .string()
      .required(f("mobileReq"))
      .matches(/^01\d{9}$/, f("mobile")),
    email: yup.string().required(f("emailReq")).email(f("email")),
    message: yup.string().required(f("msg")),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const formHandler = async (form, url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        toast.success(f("success"));
        reset();
      } else {
        toast.error(f("error"));
      }
    } catch (error) {
      toast.error(f("error"));
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (formData) => {
    if (type) {
      const request = {
        ...formData,
        requestedItemId: id,
        requestedItemType: type,
      };
      await formHandler(request, "/api/Request");
    } else {
      await formHandler(formData, "/api/ContactUs");
    }
  };

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />{" "}
      <form className="form-style1" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                {t("name")}
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.fullName ? "border-red" : ""
                }`}
                placeholder={t("name")}
                {...register("fullName")}
              />
              {errors.fullName && (
                <p className="error-text">{errors.fullName.message}</p>
              )}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                {t("phone")}
              </label>
              <input
                type="text"
                className={`form-control ${errors.mobile ? "border-red" : ""}`}
                placeholder={t("phone")}
                {...register("mobile")}
              />
              {errors.mobile && (
                <p className="error-text">{errors.mobile.message}</p>
              )}
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">
                {t("email")}
              </label>
              <input
                type="email"
                className={`form-control ${errors.email ? "border-red" : ""}`}
                placeholder={t("email")}
                {...register("email")}
              />
              {errors.email && (
                <p className="error-text">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="col-md-12">
            <div className="mb10">
              <label className="heading-color ff-heading fw600 mb10">
                {t("msg")}
              </label>
              <textarea
                style={{ height: "auto" }}
                className={`form-control ${errors.message ? "border-red" : ""}`}
                cols={30}
                rows={6}
                placeholder={t("msg")}
                {...register("message")}
              />
              {errors.message && (
                <p className="error-text">{errors.message.message}</p>
              )}
            </div>
          </div>

          <div className="col-md-12">
            <div className="d-grid">
              <button
                disabled={isLoading}
                style={{ opacity: isLoading && 0.7 }}
                type="submit"
                className="ud-btn btn-thm gap-2"
              >
                <span className="mx-1">{t("send")}</span>
                {isLoading ? (
                  <div
                    style={{ width: 16, height: 16, borderWidth: "0.15em " }}
                    class="spinner-border text-light mx-2"
                    role="status"
                  >
                    <span class="sr-only">Loading...</span>
                  </div>
                ) : (
                  <i className="fal fa-arrow-right-long" />
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
