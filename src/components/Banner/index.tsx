import ax from "./Component.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import clsx from "clsx";
import useMousePosition from "../../utils/useMousePosition";
import { useState } from "react";

const BANNER_IMGS = [
  "https://res.cloudinary.com/jmcloudname/image/upload/c_scale,w_1440/v1/fs-bmec/de6czotkfasi1n2f9nhv",
  "https://res.cloudinary.com/jmcloudname/image/upload/c_scale,w_1440/v1/fs-bmec/fojybccximfia2yfesgi",
  "https://res.cloudinary.com/jmcloudname/image/upload/c_scale,w_1440/v1/fs-bmec/zksitesplhffaoajdm1p",
  "https://res.cloudinary.com/jmcloudname/image/upload/c_scale,w_1440/v1/fs-bmec/egluznfjdjdvugplg5qs",
];

const Banner = () => {
  const { x, y } = useMousePosition();

  const [cursorSize, setCursorSize] = useState(50);
  return (
    <div id={"banner"} className={ax["banner_wrapper"]}>
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
      <motion.div
        className={clsx(
          ax["banner_context-wrapper"],
          ax["banner_context-wrapper__mask"]
        )}
        animate={
          x && y
            ? {
                WebkitMaskPosition: `${x - cursorSize / 2}px ${
                  y - cursorSize / 2
                }px`,
                WebkitMaskSize: cursorSize + "px",
                background: cursorSize === 300 ? "#00a74f" : "#00a74e5d",
              }
            : {}
        }
        onMouseLeave={() => setCursorSize(0)}
        onMouseEnter={() => setCursorSize(40)}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.2,
          WebkitMaskSize: {
            duration: 1,
            type: "spring",
            damping: 30,
            stiffness: 200,
          },
          background: { duration: 0.2 },
        }}
      >
        <div
          className="font-terminatorTwo flex"
          onMouseEnter={() => setCursorSize(300)}
          onMouseLeave={() => setCursorSize(30)}
        >
          <div className="relative text-center">
            Business <span>Management</span>
            <div className={clsx(ax["banner_tagline"], "text-black")}>
              Enterprise Co.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
