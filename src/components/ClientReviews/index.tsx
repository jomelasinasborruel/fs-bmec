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
        <motion.h1
          initial={{ opacity: 0, y: "50px" }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 1 }}
        >
          Client <span className="text-primary">Reviews</span>
        </motion.h1>
      </div>
      <div id="reviews" className={ax["review_container"]}>
        <img
          src="https://res.cloudinary.com/jmcloudname/image/upload/c_scale,w_1440/fs-bmec/reviews/e9jidjmttz5cz76pnsvy.jpg"
          alt="image"
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
        className={clsx(ax["review_card"], { "lg:!flex-row-reverse": reverse })}
      >
        <div className={ax["review_card_texts-container"]}>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={clsx(ax["review_card__description"], {
              "lg:!left-auto lg:right-[-3.125rem]": reverse,
            })}
          >
            <RxQuote />
          </motion.p>
          {statement}
          <br /> <br />
          <p className={ax["review_card__author"]}>- {author}</p>
        </div>
        <div className={ax["review_card__image-wrapper"]}>
          <img src={image} alt="card-image" />
        </div>
      </div>
    </motion.div>
  );
};

export default ClientReviews;
