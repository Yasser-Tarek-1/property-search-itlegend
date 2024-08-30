import Image from "next/image";
import Link from "next/link";
import ContactMeta from "./ContactMeta";
import Social from "./Social";
import MenuWidget from "./MenuWidget";
import Copyright from "./Copyright";
import { useTranslations } from "next-intl";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-widget mb-4 mb-lg-5">
              <Link className="footer-logo mr20" href="/">
                <Image
                  width={190}
                  height={85}
                  // width={155}
                  // height={60}
                  className="mb40"
                  src="/white-logo.png"
                  alt="Footer Logo"
                />
              </Link>
              <ContactMeta />
              <div className="social-widget">
                <h6 className="text-white mb10">
                  تابعنا على وسائل التواصل الاجتماعي
                </h6>
                <Social />
              </div>
            </div>
          </div>
          {/* End .col-lg-5 */}

          <div className="col-lg-8">
            <div className="footer-widget mb-4 mb-lg-">
              <div className="row justify-content-between w-100">
                <MenuWidget />
              </div>
            </div>
          </div>
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
      <Copyright />
      {/* End copyright */}
    </>
  );
};

export default Footer;
