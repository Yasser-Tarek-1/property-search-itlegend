import React from "react";

const Social = ({ appSettings }) => {
  const socialIcons = [
    { icon: "fab fa-facebook-f", url: appSettings?.facebook },
    { icon: "fab fa-twitter", url: appSettings?.twitter },
    { icon: "fab fa-instagram", url: appSettings?.instagram },
    { icon: "fab fa-linkedin-in", url: appSettings?.linkedin },
    { icon: "fab fa-tiktok", url: appSettings?.tiktok },
    { icon: "fab fa-snapchat-ghost", url: appSettings?.snapchat },
  ];

  return (
    <div className="social-style1">
      {socialIcons.map((icon, index) =>
        icon.url ? (
          <a
            key={index}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={`${icon.icon} list-inline-item`} />
          </a>
        ) : null
      )}
    </div>
  );
};

export default Social;
