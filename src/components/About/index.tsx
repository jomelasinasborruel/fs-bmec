import ax from "./About.module.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "use-media";

const DIGITS_ITEMS = [
  { value: 10, label: "Years", description: "Of Experience" },
  { value: 103, label: "Satisfied", description: "Clients" },
  { value: 999, label: "Ways", description: "To Serve You" },
];

const About = () => {
  const isLagreDevice = useMedia("screen and (min-width:768px)", true);
  return (
    <div id="about-us" className={ax["about_wrapper"]}>
      <div className={ax["digits_content"]}>
        {DIGITS_ITEMS.map((item, index) => (
          <DigitItem item={item} index={index} isLargeDevice={isLagreDevice} />
        ))}
      </div>
    </div>
  );
};

export default About;

const DigitItem = (props: {
  item: (typeof DIGITS_ITEMS)[0];
  index: number;
  isLargeDevice: boolean;
}) => {
  const digitRef = useRef<HTMLHeadingElement>(null);
  const [isInView, setIsInview] = useState(false);
  useEffect(() => {
    if (!isInView) return;
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (!digitRef.current) return;
      const curr = digitRef.current.innerText;
      digitRef.current.innerText = (
        Number(curr) + (props.item.value > 200 ? 3 : 1)
      ).toString();
      if (Number(digitRef.current.innerText) >= props.item.value)
        clearInterval(interval);
    }, (props.item.value > 200 ? 2000 : 1300) / props.item.value);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: props.isLargeDevice ? props.index * 0.2 : 0,
      }}
      className={ax["digits_item"]}
      onViewportEnter={() => setIsInview(true)}
    >
      <h2 ref={digitRef}>{0}</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: props.isLargeDevice ? 1 : 0 }}
        className={ax["digits_item"]}
      >
        <h3>{props.item.label}</h3>
        <p>{props.item.description}</p>
      </motion.div>
    </motion.div>
  );
};
