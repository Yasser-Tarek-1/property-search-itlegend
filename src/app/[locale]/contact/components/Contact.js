"use client";
import { useData } from "@/context";
import CallToActions from "@/layout/contact/CallToActions";
import ContactUs from "@/layout/contact/ContactUs";
import { useTranslations } from "next-intl";
import React from "react";

const Contact = () => {
  const t = useTranslations("contact");
  const { appSettings } = useData();
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <>
      <section className="p-0">
        <iframe
          className="home8-map contact-page"
          loading="lazy"
          src={appSettings?.locationLink}
          title="Property Search Location"
          aria-label="Property Search Location"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
      <section data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative ">
              <ContactUs />
            </div>
            <div className="col-lg-5 offset-lg-2">
              <h2 className="mb10 text-capitalize">{t("title")}</h2>
              <p className="text">{t("text")}</p>
            </div>
          </div>
        </div>
      </section>
      <CallToActions phone={appSettings.phone} />
    </>
  );
};

export default Contact;
