import ax from "./Component.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

const BANNER_IMGS = [
  "https://res.cloudinary.com/jmcloudname/image/upload/v1723049706/fs-bmec/fojybccximfia2yfesgi.jpg",
  // "https://res.cloudinary.com/jmcloudname/image/upload/v1723049706/fs-bmec/eoyjeatuwsr5cnnbdntf.jpg",
  "https://res.cloudinary.com/jmcloudname/image/upload/v1723049705/fs-bmec/zksitesplhffaoajdm1p.jpg",
  "https://res.cloudinary.com/jmcloudname/image/upload/v1723049707/fs-bmec/de6czotkfasi1n2f9nhv.jpg",
  "https://res.cloudinary.com/jmcloudname/image/upload/v1723049705/fs-bmec/egluznfjdjdvugplg5qs.jpg",
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
        {BANNER_IMGS.map((src, key) => (
          <SwiperSlide
            key={`swiper-image-${key}`}
            className={ax["banner_swiper-slide"]}
          >
            <img src={src}></img>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={ax["banner_context-wrapper"]}>
        <div className="font-terminatorTwo flex">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 100, x: 0 }}
            transition={{ duration: 1 }}
            className="text-primary relative"
          >
            Forti
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 100, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white relative"
          >
            serv
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 100, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className={ax["banner_tagline"]}
        >
          LET'S MAKE THINGS WORK BETTER
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
