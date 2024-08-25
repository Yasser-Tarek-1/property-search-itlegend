"use client";
import MainMenu from "@/components/common/MainMenu";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SwitchLang from "../common/SwitchLang";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  //  navbar ? "sticky slideInDown animated" : ""
  return (
    <header
      className={`header-nav nav-homepage-style main-menu sticky slideInDown`}
    >
      <nav className="posr">
        <div className="container posr menu_bdrt1">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="d-flex align-items-center justify-content-between gap-5">
                <div className="logos mr40">
                  <Link className="header-logo logo1" href="/">
                    <Image
                      width={155}
                      height={60}
                      src="/logo.png"
                      alt="Header Logo"
                    />
                  </Link>
                  <Link className="header-logo logo2" href="/">
                    <Image
                      width={155}
                      height={60}
                      src="/logo.png"
                      alt="Header Logo"
                    />
                  </Link>
                </div>
                {/* End Logo */}

                <MainMenu />
                {/* End Main Menu */}
              </div>
            </div>
            {/* End .col-auto */}
            <SwitchLang />
            {/* End .col-auto */}
          </div>
          {/* End .row */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
