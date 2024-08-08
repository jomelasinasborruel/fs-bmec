import ax from "./assets/styles/Homepage.module.scss";
import "./App.css";
import Banner from "./components/Banner";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMedia } from "use-media";
import About from "./components/About";
import { useEffect, useState } from "react";
import clsx from "clsx";

const ANCHRORS = [
  { label: "About Us", anchor: "about-us" },
  { label: "Services", anchor: "" },
  { label: "Testimonies", anchor: "" },
  { label: "Contact Us", anchor: "" },
];

function App() {
  const isLargeDevice = useMedia("screen and (min-width:1024px)", true);
  const [isNavFix, setIsNavFix] = useState(false);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = () => {
    if (scrollY > 80) {
      setIsNavFix(true);
      return;
    }
    setIsNavFix(false);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={ax["homepage_wrapper"]}>
      <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 1 }}
        className={clsx(ax["nav_wrapper"], { "bg-[#e4e4e4]": isNavFix })}
      >
        <div className={ax["nav_content"]}>
          <div className={ax["nav_logo-wrapper"]}>
            <div
              className={clsx(
                "relative size-[3.75rem] shadow-[0_0_0_1px_#FFFFFF_inset] rounded-[1.25rem] transition-colors duration-300",
                { "!shadow-[0_0_0_1px_#000000_inset]": isNavFix }
              )}
            >
              <span className="font-terminatorTwo [text-shadow:_0_0_2px_#000] transition-colors duration-300 absolute top-[-5px] left-[-4px] text-[61px] leading-[3.125rem] text-primary">
                f
              </span>
              <span className="font-terminatorTwo [text-shadow:_0_0_2px_#000] transition-colors duration-300 absolute top-[22px] right-[-6px] text-[61px] leading-[3.125rem] text-primary">
                s
              </span>
              <div
                className={clsx(
                  "absolute right-[0.1875rem] top-[0.125rem] size-2 rounded-full transition-colors duration-300 bg-[#e4e4e4]",
                  { "!bg-[#111111]": isNavFix }
                )}
              />
              <div
                className={clsx(
                  "absolute left-[0.0625rem] bottom-[0.25rem] size-2 rounded-full transition-colors duration-300 bg-[#e4e4e4]",
                  { "!bg-[#111111]": isNavFix }
                )}
              />
            </div>
          </div>
          {isLargeDevice && (
            <div
              className={clsx(ax["nav_link-container"], {
                [ax["nav_link-container--navFix"]]: isNavFix,
              })}
            >
              {ANCHRORS.map((item) => (
                <button onClick={() => handleClickScroll(item.anchor ?? "")}>
                  {item.label}
                </button>
              ))}
            </div>
          )}
          {!isLargeDevice && (
            <button
              className={clsx(ax["nav_btn-dropdown"], {
                [ax["nav_btn-dropdown--navFix"]]: isNavFix,
              })}
            >
              <RxHamburgerMenu />
            </button>
          )}
        </div>
      </motion.nav>

      <Banner />
      <About />
    </div>
  );
}

export default App;
