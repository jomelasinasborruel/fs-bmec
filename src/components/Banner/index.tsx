import ax from "./Banner.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

const BANNER_IMGS = [
  "src/assets/images/bg-banner-1.jpg",
  "src/assets/images/bg-banner-2.jpg",
  "src/assets/images/bg-banner-3.jpg",
  "src/assets/images/bg-banner-4.jpg",
  "src/assets/images/bg-banner-5.jpg",
];

const Banner = () => {
  return (
    <div className={ax["banner_wrapper"]}>
      <Swiper
        autoplay
        effect="fade"
        speed={3000}
        modules={[Autoplay, EffectFade]}
        loop
        className={ax["banner_swiper-wrapper"]}
      >
        {BANNER_IMGS.map((src) => (
          <SwiperSlide className={ax["banner_swiper-slide"]}>
            <img src={src}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={ax["banner_context-wrapper"]}>
        <div className="font-terminatorTwo flex">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 2 }}
            className="text-primary relative"
          >
            Forti
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 2 }}
            className="text-white relative"
          >
            serv
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className={ax["banner_tagline"]}
        >
          LET'S MAKE THINGS WORK BETTER
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
