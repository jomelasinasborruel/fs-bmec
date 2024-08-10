import ax from "./Component.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={ax["about_wrapper"]}>
      <div id="about" className="absolute -top-20 left-0" />
      <div className={ax["about_content"]}>
        <motion.div
          initial={{ opacity: 0, x: -300, y: 200 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className={ax["about_text-wrapper"]}
        >
          <p className={ax["about_title"]}>
            <span className="text-black">We are</span> Fortiserv
          </p>
          <p className={ax["about_description"]}>
            Welcome to Fortiserv, your dedicated partner in managing your
            business's financial aspects. At Fortiserv, we are passionate about
            providing expert government regulatory advisory services to comply
            with requisites. With a team of highly skilled professionals and
            years of industry experience, we offer insightful guidance and
            strategic solutions to help you navigate the complexities of
            taxation and other regulatory bodies with confidence
            <br />
            <br />
            At Fortiserv, we believe that transparency, integrity, and
            accountability are the cornerstones of a successful client
            relationship. We take time to understand your unique financial
            situation and collaborate on ideas to meet client preferences and to
            make things work better. Our proactive approach and meticulous
            attention to detail ensure that you receive the best guidance and
            support.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className={ax["about_image-container"]}
      >
        <img src="https://res.cloudinary.com/jmcloudname/image/upload/v1723220605/fs-bmec/wwhidsq7xyxsv5oc249f.jpg" />
      </motion.div>
    </div>
  );
};

export default About;
