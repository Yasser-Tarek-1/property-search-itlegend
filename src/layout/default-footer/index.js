"use client";
import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import Social from "./Social";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";
import { useData } from "@/context";
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const { appSettings } = useData();
  const locale = useLocale();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="footer-widget mb-4 mb-lg-5">
              <Link className="footer-logo mr20" href={`/${locale}`}>
                <Image
                  width={190}
                  height={85}
                  className="mb40"
                  src="/white-logo.png"
                  alt="Footer Logo"
                />
              </Link>
              <ContactMeta appSettings={appSettings} />
              <div className="social-widget">
                <h6 className="text-white mb10">{t("follow")} </h6>
                <Social appSettings={appSettings} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div className="footer-widget mb-4 mb-lg-5">
              <div className="row justify-content-center w-100">
                <MenuWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
