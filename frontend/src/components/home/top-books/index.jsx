import Card from "../../card";

import books from "../../../files/book.json";

import {
  Title,
  Section,
  CardsContainer,
  SectionWrapper,
  ArrowBackIcon,
  ArrowForwardIcon,
  Navigation,
  CircleIcon,
  CardsWrapper,
} from "./styles";

import { useState } from "react";

function TopBooks() {
  const [start, setStart] = useState(0);
  const [activeCircle, setActiveCircle] = useState(0);

  const handleClickLeftArrow = (_) => {
    setStart((currentStart) => Math.max(currentStart - 6, 0));
    setActiveCircle((currentActiveCircle) =>
      Math.max(currentActiveCircle - 1, 0)
    );
  };

  const handleClickRightArrow = (_) => {
    setStart((currentStart) => Math.min(currentStart + 6, books.length - 6));
    setActiveCircle((currentActiveCircle) =>
      Math.min(currentActiveCircle + 1, Math.floor(books.length / 6) - 1)
    );
  };

  const handleClickCircle = (index) => {
    setStart(index * 6);
    setActiveCircle(index);
  };

  return (
    <SectionWrapper>
      <Section>
        <Title>Top Books</Title>
        <CardsWrapper>
          <CardsContainer>
            {books
              .slice(start, start + 6)
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
          </CardsContainer>
          <ArrowBackIcon
            disabled={start === 0}
            onClick={handleClickLeftArrow}
          />
          <ArrowForwardIcon
            disabled={start === books.length - 6}
            onClick={handleClickRightArrow}
          />
          <Navigation>
            {Array.from({
              length: Math.ceil(books.length / 6),
            }).map((_, index) => (
              <CircleIcon
                key={index}
                active={index === activeCircle}
                onClick={() => handleClickCircle(index)}
              />
            ))}
          </Navigation>
        </CardsWrapper>
      </Section>
    </SectionWrapper>
  );
}
export default TopBooks;
