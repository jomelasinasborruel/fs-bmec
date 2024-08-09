import ax from "./Component.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className={ax["about_wrapper"]}>
      <div className={ax["about_content"]}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
          }}
          className={ax["about_text-wrapper"]}
        >
          <p className={ax["about_title"]}>
            <span className="text-black">We're</span> Fortiserv
          </p>
          <p className={ax["about_description"]}>
            Welcome to Fortiserv, your dedicated partner in tax consultation. At
            Fortiserv, we are passionate about providing expert tax advisory
            services tailored to meet your unique needs. With a team of highly
            skilled professionals and years of industry experience, we offer
            insightful guidance and strategic solutions to help you navigate the
            complexities of tax regulations with confidence.
            <br />
            <br />
            At Fortiserv, we believe that transparency, integrity, and
            personalized service are the cornerstones of a successful client
            relationship. We take the time to understand your unique financial
            situation and tailor our services to meet your specific needs. Our
            proactive approach and meticulous attention to detail ensure that
            you receive the best possible guidance and support.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
        }}
        className={ax["about_image-container"]}
      >
        <img src="https://res.cloudinary.com/jmcloudname/image/upload/v1723220605/fs-bmec/wwhidsq7xyxsv5oc249f.jpg" />
      </motion.div>
    </div>
  );
};

export default About;
