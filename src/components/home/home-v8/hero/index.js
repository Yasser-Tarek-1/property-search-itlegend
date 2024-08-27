import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home");

  return (
    <>
      <div className="col-lg-6 col-xl-6">
        <div className="inner-banner-style8">
          <h6 className="hero-sub-title animate-up-1 text-white">
            {t("best")}
          </h6>
          <h2 className="hero-title animate-up-2 text-white">{t("urHome")}</h2>
          <p className="hero-text fz15 animate-up-3 text-white">{t("large")}</p>
        </div>
      </div>
      {/* End .col */}

      <div className="col-lg-6 col-xl-4">
        <HeroContent />
      </div>

      {/* <!-- Advance Feature Modal Start --> */}
      <div className="advance-feature-modal">
        <div
          className="modal fade"
          id="advanceSeachModal"
          tabIndex={-1}
          aria-labelledby="advanceSeachModalLabel"
          aria-hidden="true"
        >
          <AdvanceFilterModal />
        </div>
      </div>
      {/* <!-- Advance Feature Modal End --> */}
    </>
  );
};

export default Hero;
