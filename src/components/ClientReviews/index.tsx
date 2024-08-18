import { RxQuote } from "react-icons/rx";
import ax from "./Component.module.scss";
import reveiewDeatails from "./reviews.json";
import clsx from "clsx";
import slug from "slug";
import { motion } from "framer-motion";

const ClientReviews = () => {
  return (
    <div className={ax["review_wrapper"]}>
      <div id="reviews" className="absolute -top-24 left-0" />
      <div className={ax["review_title-container"]}>
        <h1 className="lg:text-8xl text-6xl relative z-10 font-caviarDreams text-center">
          Client <span className="text-primary">Reviews</span>
        </h1>
      </div>
      <div id="reviews" className={ax["review_container"]}>
        <img
          src="https://res.cloudinary.com/jmcloudname/image/upload/c_scale,w_1440/fs-bmec/reviews/e9jidjmttz5cz76pnsvy.jpg"
          alt="image"
          className="w-full h-full absolute top-0 left-0 blur-sm object-cover"
        />
        {reveiewDeatails.map((item, index) => {
          return (
            <Review
              key={slug(item.author)}
              reverse={index % 2 === 0}
              author={item.author}
              statement={item.statement}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

const Review = ({
  reverse,
  author,
  statement,
  image,
}: {
  reverse?: boolean;
  author: string;
  statement: string;
  image: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? "10%" : "-10%" }}
      whileInView={{ opacity: 100, x: 0 }}
      transition={{ duration: 1 }}
      className={clsx(ax["review_content"], { "!self-end": reverse })}
    >
      <div
        className={clsx(
          "max-w-[62.5rem] shadow-xl shadow-[#00000067] w-[90vw] bg-[#ffffff] flex lg:flex-row flex-col-reverse",
          { "lg:!flex-row-reverse": reverse }
        )}
      >
        <div className="lg:p-20 p-10 max-lg:pt-20 max-lg:pb-10 lg:w-[60%] text-left font-caviarDreams text-xl relative">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={clsx(
              "absolute lg:top-[-5.625rem] -top-1.5 left-2 lg:left-[-3.125rem] z-10",
              { "lg:!left-auto lg:right-[-3.125rem]": reverse }
            )}
          >
            <RxQuote
              className={clsx("text-[#0d4b0b] text-[5.625rem] lg:text-[200px]")}
            />
          </motion.div>{" "}
          {statement}
          <br /> <br />
          <p className="text-right font-lato font-bold">- {author}</p>
        </div>
        <div className="lg:w-[40%] relative max-lg:h-[31.25rem] max-md:h-[18.75rem]">
          <img
            src={image}
            alt=""
            className="object-cover h-full absolute top-0 left-0 w-full object-top"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ClientReviews;
