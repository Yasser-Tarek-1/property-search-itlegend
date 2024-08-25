import AdvanceFilterModal from "@/components/common/advance-filter";
import HeroContent from "./HeroContent";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("home");

  return (
    <>
      <div className="inner-banner-style1 text-center">
        <h6 className="hero-sub-title animate-up-1 text-uppercase">
          {t("best")}
        </h6>
        <h2 className="hero-title animate-up-2">{t("urHome")}</h2>
        <p className="hero-text fz15 animate-up-3">{t("large")}</p>
        <HeroContent />
      </div>
      {/* End Hero content */}

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
