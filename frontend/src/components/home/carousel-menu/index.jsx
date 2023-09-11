import Menu from "./menu";

import { InnerContainer, MainContainer } from "./styles.jsx";

import Carousel from "./carousel";

function CarouselMenu() {
  return (
    <MainContainer>
      <InnerContainer>
        <Menu />
        <Carousel />
      </InnerContainer>
    </MainContainer>
  );
}

export default CarouselMenu;
