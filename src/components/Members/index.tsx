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
      transition={{ duration: 1 }}
      className={ax["members_wrapper"]}
    >
      <Marquee autoFill play={play} className={clsx("w-full")} speed={20}>
        {membersDetail.map((member, index) => (
          <div
            key={member.src + String(index)}
            onMouseEnter={() => setPlay(false)}
            onMouseLeave={() => setPlay(true)}
            className="relative mx-2 cursor-grabbing"
          >
            <div className={ax["members_item"]}>
              <div className={ax["members_image-wrapper"]}>
                <img src={member.src} alt="member-photo" />
              </div>
            </div>
            <div className={ax["members_overlay"]} />
            <div className={ax["members_item-details"]}>
              <p>{member.name}</p>
              <p>{member.position}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </motion.div>
  );
};

export default Members;
