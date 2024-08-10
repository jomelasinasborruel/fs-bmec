import ax from "./Component.module.scss";

import Marquee from "react-fast-marquee";
import clsx from "clsx";
import { useState } from "react";
import membersDetail from "./membersDetail.json";
import { motion } from "framer-motion";

const Members = () => {
  const [play, setPlay] = useState(true);

  return (
    <motion.div
      id="members"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 100, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={ax["members_wrapper"]}
    >
      <Marquee autoFill play={play} className={clsx("w-full")} speed={20}>
        {membersDetail.map((member) => (
          <div className={ax["members_item"]}>
            <div
              onMouseEnter={() => setPlay(false)}
              onMouseLeave={() => setPlay(true)}
              className={ax["members_image-wrapper"]}
            >
              <img src={member.src} alt="member-photo" />
              <div className={ax["members_overlay"]} />
              <div className={ax["members_item-details"]}>
                <p>{member.name}</p>
                <p>{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Members;
