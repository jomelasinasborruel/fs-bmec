import ax from "./Component.module.scss";
import membersDetail from "./membersDetail.json";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Members = () => {
  return (
    <motion.div
      id="members"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 100, x: 0 }}
      transition={{ duration: 1 }}
      className={ax["members_wrapper"]}
    >
      <Swiper
        loop
        className={"w-full"}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        slidesPerView={"auto"}
        speed={8000}
        onInit={(e) => (e.wrapperEl.style.transitionTimingFunction = "linear")}
      >
        {membersDetail.map((member, index) => (
          <SwiperSlide className="w-fit">
            <div
              key={member.src + String(index)}
              className="relative mx-2 cursor-grabbing w-fit"
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
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Members;
