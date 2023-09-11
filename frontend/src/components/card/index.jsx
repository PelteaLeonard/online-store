import cn from "classnames";
import { Image } from "cloudinary-react";
import { IconButton, Rating } from "@mui/material";
import {
  ActualPrice,
  AddShoppingCartButton,
  AddShoppingCartIcon,
  BottomContainer,
  ButtonWrapper,
  Container,
  Discount,
  DiscountsContainer,
  ExtraDiscount,
  ImageWrapper,
  Name,
  NameWrapper,
  PricesContainer,
  RatingWrapper,
  RecommendedPrice,
} from "./styles";
import { AddShoppingCart } from "@mui/icons-material";

function Card(props) {
  let {
    dark,
    small,
    imageUri,
    name,
    rating,
    recommendedPrice,
    price,
    discount,
    extraDiscount,
  } = props;

  return (
    <Container dark={dark} small={small}>
      <ImageWrapper small={small}>
        <Image publicId={imageUri} width="0.5" />
      </ImageWrapper>
      <NameWrapper>
        <Name>{name}</Name>
      </NameWrapper>
      <RatingWrapper small={small}>
        <Rating value={rating} readOnly={true} />
      </RatingWrapper>
      <BottomContainer>
        <PricesContainer>
          {recommendedPrice ? (
            <RecommendedPrice small={small}>
              PRP: {recommendedPrice} Lei
            </RecommendedPrice>
          ) : null}
          <ActualPrice small={small}>{price} Lei</ActualPrice>
        </PricesContainer>
        <ButtonWrapper></ButtonWrapper>
        <ButtonWrapper>
          <AddShoppingCartButton aria-label="Add to shopping cart">
            <AddShoppingCartIcon small={small} />
          </AddShoppingCartButton>
        </ButtonWrapper>
      </BottomContainer>
      {discount ? (
        <DiscountsContainer>
          <Discount>-{discount}%</Discount>
          {extraDiscount ? (
            <ExtraDiscount>-{extraDiscount}% EXTRA</ExtraDiscount>
          ) : null}
        </DiscountsContainer>
      ) : null}
    </Container>
  );
}
export default Card;
