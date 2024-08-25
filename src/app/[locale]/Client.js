"use client";

import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../../public/scss/main.scss";
import "rc-slider/assets/index.css";
import { useEffect } from "react";
import "../../../public/style.css";

if (typeof window !== "undefined") {
  import("bootstrap");
}

export default function Client({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div>
      {children}
      <ScrollToTop />
    </div>
  );
}
