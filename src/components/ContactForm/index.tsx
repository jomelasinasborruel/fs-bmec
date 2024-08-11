import ax from "./Component.module.scss";

const ContactForm = () => {
  return (
    <div className={ax["contactForm_wrapper"]}>
      <div id="contactForm" className="absolute -top-20 left-0" />
      <div className={ax["contactForm_content"]}></div>
    </div>
  );
};

export default ContactForm;
