
import { Rating } from "@mui/material";
import {LinkText, MainContainer} from "./styles";
import { CarouselContainer, DetailsContainer, Title } from "./styles";

function BookDetails() {
  return (
    <MainContainer>
      <CarouselContainer></CarouselContainer>
      <DetailsContainer>
        <LinkText>Jeneva Rose</LinkText>
        <Title>Una dintre noi a murit</Title>
        <Rating />
      </DetailsContainer>
    </MainContainer>
  );
}

export default BookDetails;
