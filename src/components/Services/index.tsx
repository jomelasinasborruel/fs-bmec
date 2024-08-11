import ax from "./Component.module.scss";
import { motion } from "framer-motion";
import servicesDetails from "./servicesDetails.json";

const Services = () => {
  return (
    <div className={ax["services_wrapper"]}>
      <div id="services" className="absolute -top-24 left-0" />
      <div className={ax["services_content"]}>
        <div />
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className={ax["services_text-wrapper"]}
        >
          <p className={ax["services_title"]}>
            <span className="text-black">What we </span> offer
          </p>
          <ul>
            {servicesDetails.map((item) => (
              <motion.li
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                }}
                viewport={{ once: true }}
              >
                {item.service}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className={ax["services_image-container"]}
      >
        <img src="https://res.cloudinary.com/jmcloudname/image/upload/v1723220605/fs-bmec/mptd2wbbtuzcwuvxzjkd.jpg" />
      </motion.div>
    </div>
  );
};

export default Services;
