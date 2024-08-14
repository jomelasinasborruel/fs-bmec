import ax from "./assets/styles/Homepage.module.scss";
import "./App.css";
import Banner from "./components/Banner";
import { AnimatePresence, motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMedia } from "use-media";
import Digits from "./components/Digits";
import { useEffect, useState } from "react";
import clsx from "clsx";
import About from "./components/About";
import Members from "./components/Members";
import Services from "./components/Services";
import ModalContactForm from "./components/Modal/ContactForm/ContactForm";

const ANCHRORS = [
  { label: "About Us", key: "about" },
  { label: "Services", key: "services" },
  { label: "Testimonies", key: "" },
  { label: "Contact Us", key: "contactForm" },
];

function App() {
  const isLargeDevice = useMedia("screen and (min-width:1024px)", true);
  const [isNavFix, setIsNavFix] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleMobileMenu, setTogglemobileMenu] = useState(false);

  const handleLinks = (id: string) => {
    if (id === "contactForm") {
      setToggleModal(true);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (!isLargeDevice) setTogglemobileMenu(false);
  };

  const handleHamburgerBtn = () => {
    setTogglemobileMenu((prev) => !prev);
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
      <ModalContactForm open={toggleModal} onClose={setToggleModal} />
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
                <button
                  key={item.key}
                  onClick={() => handleLinks(item.key ?? "")}
                  className={clsx({
                    [ax["btnContact"]]: item.key === "contactForm",
                  })}
                >
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
              onClick={handleHamburgerBtn}
            >
              <RxHamburgerMenu />
            </button>
          )}
          <AnimatePresence>
            {!isLargeDevice && toggleMobileMenu && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 100 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setTogglemobileMenu(false)}
                className={ax["nav_dropdown"]}
              >
                {ANCHRORS.map((item, index) => (
                  <motion.button
                    key={item.key}
                    onClick={() => handleLinks(item.key ?? "")}
                    initial={{ opacity: 0, y: "-200%" }}
                    animate={{ opacity: 100, y: 0 }}
                    exit={{ opacity: 0, y: "-200%" }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    style={{ zIndex: ANCHRORS.length - index }}
                    className={ax["nav_dropdown__item"]}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
      <Banner />
      <Digits />
      <About />
      <Members />
      <Services />
    </div>
  );
}

export default App;
