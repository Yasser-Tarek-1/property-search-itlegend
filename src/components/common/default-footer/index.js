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
          <div className="col-lg-3">
            <div className="footer-widget mb-4 mb-lg-5">
              <Link className="footer-logo" href="/">
                <Image
                  width={155}
                  height={60}
                  className="mb40"
                  src="/logo.png"
                  alt="Footer Logo"
                />
              </Link>
              <div className="cta-btns-style1 d-block d-sm-flex align-items-center justify-content-lg-end">
                <a
                  target="_blank"
                  href="tel:+201151731010"
                  className="ud-btn btn-dark"
                >
                  <span className="flaticon-call vam pe-2" />
                  +20 11 51731010
                </a>
              </div>
            </div>
          </div>
          {/* End .col-lg-5 */}

          <div className="col-lg-9">
            <div className="footer-widget mb-4 mb-lg-5">
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
