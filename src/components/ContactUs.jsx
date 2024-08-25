import React from "react";
import Form from "./contact/Form";

const ContactUs = () => {
  return (
    <div className="home8-contact-form default-box-shadow1 bdrs12 bdr1 p20 mb30-md bgc-white">
      <h4 className="form-title ">تحتاج إلى مساعدة عقارية؟</h4>
      <p className="mb25">
        املأ بياناتك و سوف يقوم خبير عقارى بالاتصال بك فى اقرب وقت
      </p>
      <Form />
    </div>
  );
};

export default ContactUs;
