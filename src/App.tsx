import ax from "./assets/styles/Homepage.module.scss";
import "./App.css";
import Banner from "./components/Banner";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMedia } from "use-media";

const ANCHRORS = [
  { label: "About Us" },
  { label: "Services" },
  { label: "Testimonies" },
  { label: "Contact Us" },
];

function App() {
  const isLargeDevice = useMedia("screen and (min-width:1024px)", true);
  return (
    <div className={ax["homepage_wrapper"]}>
      <motion.nav
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 2 }}
        className={ax["nav_wrapper"]}
      >
        <div className={ax["nav_content"]}>
          <div className={ax["nav_logo-wrapper"]}>
            <div className="relative size-[3.75rem] shadow-[0_0_0_1px_#FFFFFF_inset] rounded-[1.25rem]">
              <span className="font-terminatorTwo [text-shadow:_0_0_2px_#000] absolute top-[-5px] left-[-4px] text-[61px] leading-[3.125rem] text-primary">
                f
              </span>
              <span className="font-terminatorTwo [text-shadow:_0_0_2px_#000] absolute top-[22px] right-[-6px] text-[61px] leading-[3.125rem] text-primary">
                s
              </span>
              <div className="absolute right-[0.1875rem] top-[0.125rem] size-2 rounded-full bg-white" />
              <div className="absolute left-[0.0625rem] bottom-[0.25rem] size-2 rounded-full bg-white" />
            </div>
          </div>
          {isLargeDevice && (
            <div className={ax["nav_link-container"]}>
              {ANCHRORS.map((item) => (
                <a>{item.label}</a>
              ))}
            </div>
          )}
          {!isLargeDevice && (
            <button className={ax["nav_btn-dropdown"]}>
              <RxHamburgerMenu />
            </button>
          )}
        </div>
      </motion.nav>

      <Banner />
    </div>
  );
}

export default App;
