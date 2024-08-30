import React from "react";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const footerMenuItems = [
    {
      label: "Privacy",
      link: "#",
    },
    {
      label: "Terms",
      link: "#",
    },
    {
      label: "Sitemap",
      link: "#",
    },
  ];

  return (
    <div className="container white-bdrt1 py-4">
      <div className="row">
        <div className="text-center text-lg-start">
          <p className="copyright-text text-gray ff-heading mb-0">
            © It Legend {getCurrentYear()} - All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
