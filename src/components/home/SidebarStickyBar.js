import Image from "next/image";
import React from "react";

const socialIcons = [
  { icon: "fab fa-facebook-f", url: "#" },
  { icon: "fab fa-twitter", url: "#" },
  { icon: "fab fa-instagram", url: "#" },
  { icon: "fab fa-linkedin-in", url: "#" },
];

const contactInfo = {
  telephone: {
    number: "+201150167013",
    url: "tel:+20 1150167013",
  },
  email: {
    address: "info@realton.com",
    url: "mailto:info@realton.com",
  },
};

const SidebarStickyBar = () => {
  return (
    <div className="home8-sidebar-wrapper d-none d-xxl-block">
      <div className="wrapper">
        <a className="tel" href={contactInfo.telephone.url}>
          {contactInfo.telephone.number}
        </a>
        <a className="mail" href={contactInfo.email.url}>
          {contactInfo.email.address}
        </a>
        <div className="social-style2">
          {socialIcons.map((socialIcon, index) => (
            <a key={index} className="text-center" href={socialIcon.url}>
              <i className={socialIcon.icon + " d-block"} />
            </a>
          ))}
        </div>
        <a href="#explore-property">
          <div className="mouse_scroll at-home8 text-center d-block">
            <Image
              width={20}
              height={105}
              src="/images/about/home-scroll2.png"
              alt="scroll image"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SidebarStickyBar;
