import CallToActions from "@/components/contact/CallToActions";
import Form from "@/components/contact/Form";
import Office from "@/components/contact/Office";
import ContactUs from "@/components/ContactUs";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Contact  || Homez - Real Estate NextJS Template",
};

const Contact = () => {
  const t = useTranslations("contact");
  return (
    <>
      {/* Our Contact With Map */}
      <section className="p-0">
        <iframe
          className="home8-map contact-page"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27468.054117776952!2d32.30116551301061!3d30.619672600644652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f8597f201556e7%3A0x9bd6053867337ff3!2z2KzYp9mF2LnYqSDZgtmG2KfYqSDYp9mE2LPZiNmK2LM!5e0!3m2!1sar!2seg!4v1724507130423!5m2!1sar!2seg"
          title="Property Search Location"
          aria-label="Property Search Location"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </section>
      {/* End Our Contact With Map */}

      {/* Start Our Contact Form */}
      <section data-aos="fade-up" data-aos-delay="200">
        <div className="container">
          <div className="row d-flex align-items-end">
            <div className="col-lg-5 position-relative ">
              <ContactUs />
            </div>
            {/* End .col */}

            <div className="col-lg-5 offset-lg-2">
              <h2 className="mb10 text-capitalize">{t("title")}</h2>
              <p className="text">{t("text")}</p>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Our Contact Form */}

      {/* Our CTA */}
      <CallToActions />
      {/* Our CTA */}

      {/* End Our Footer */}
    </>
  );
};

export default Contact;
