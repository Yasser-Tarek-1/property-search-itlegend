"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import "../../../public/scss/main.scss";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import "../../../public/style.css";
import { DataProvider } from "@/context";

if (typeof window !== "undefined") {
  import("bootstrap");
}

export default function Client({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true,
    });
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <DataProvider>
      <div className="wrapper ovh" style={{ position: "relative" }}>
        {children}
        <ScrollToTop />
      </div>
    </DataProvider>
  );
}
