import ax from "./Digits.module.scss";
import { useMedia } from "use-media";
import digitItems from "./digitItem.json";
import DigitItem from "./DigitItem";

const Digits = () => {
  const isLagreDevice = useMedia("screen and (min-width:768px)", true);
  return (
    <div id="digits" className={ax["digits_wrapper"]}>
      <div className={ax["digits_content"]}>
        {digitItems.map((item, index) => (
          <DigitItem
            key={item.value}
            item={item}
            index={index}
            isLargeDevice={isLagreDevice}
          />
        ))}
      </div>
    </div>
  );
};

export default Digits;
