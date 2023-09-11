import cn from "classnames";

import Card from "../../../card";

import books from "../../../../files/book.json";

import styles from "./styles.module.css";

import { useState } from "react";

import { ArrowBack, ArrowForward, Circle } from "@mui/icons-material";

function Carousel() {
  const [start, setStart] = useState(0);
  const [activeCircle, setActiveCircle] = useState(0);

  const handleClickLeftArrow = (_) => {
    setStart((currentStart) => Math.max(currentStart - 4, 0));
    setActiveCircle((currentActiveCircle) =>
      Math.max(currentActiveCircle - 1, 0)
    );
  };

  const handleClickRightArrow = (_) => {
    setStart((currentStart) => Math.min(currentStart + 4, books.length - 4));
    setActiveCircle((currentActiveCircle) =>
      Math.min(currentActiveCircle + 1, Math.floor(books.length / 4) - 1)
    );
  };

  const handleClickCircle = (index) => {
    setStart(index * 4);
    setActiveCircle(index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Top offers</h2>
      <div className={styles.cardsWrapper}>
        <div className={styles.cardsContainer}>
          {books
            .slice(start, start + 4)
            .map(
              ({
                imageUri,
                name,
                rating,
                recommendedPrice,
                price,
                discount,
                extraDiscount,
              }) => (
                <Card
                  key={name}
                  dark={true}
                  small={true}
                  imageUri={imageUri}
                  name={name}
                  rating={rating}
                  recommendedPrice={recommendedPrice}
                  price={price}
                  discount={discount}
                  extraDiscount={extraDiscount}
                />
              )
            )}
        </div>
        <ArrowBack
          className={cn({
            [styles.leftArrow]: true,
            [styles.disabled]: start === 0,
          })}
          onClick={handleClickLeftArrow}
        />
        <ArrowForward
          className={cn({
            [styles.rightArrow]: true,
            [styles.disabled]: start === books.length - 4,
          })}
          onClick={handleClickRightArrow}
        />
        <div className={styles.navigation}>
          {Array.from({
            length: Math.ceil(books.length / 4),
          }).map((_, index) => {
            return index === activeCircle ? (
              <Circle
                key={index}
                className={styles.fullCircle}
                onClick={() => handleClickCircle(index)}
              />
            ) : (
              <Circle
                key={index}
                className={styles.emptyCircle}
                onClick={() => handleClickCircle(index)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
