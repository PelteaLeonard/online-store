import carouselFirstImage from "../../../../images/carousel/carousel-image-1.jpeg";
import carouselSecondImage from "../../../../images/carousel/carousel-image-2.jpeg";
import carouselThirdImage from "../../../../images/carousel/carousel-image-3.jpeg";
import carouselFourthImage from "../../../../images/carousel/carousel-image-4.jpeg";
import carouselFifthImage from "../../../../images/carousel/carousel-image-5.jpeg";
import carouselSixthImage from "../../../../images/carousel/carousel-image-6.jpeg";
import carouselSeventhImage from "../../../../images/carousel/carousel-image-7.jpeg";
import { useEffect, useState } from "react";
import {
  Image,
  Navigation,
  ArrowBackIcon,
  MainContainer,
  InnerContainer,
  ArrowForwardIcon,
  ContentContainer,
  CircleIcon,
} from "./styles";

function Carousel() {
  console.log("Render carousel component");

  const images = [
    carouselFirstImage,
    carouselSecondImage,
    carouselThirdImage,
    carouselFourthImage,
    carouselFifthImage,
    carouselSixthImage,
    carouselSeventhImage,
  ];

  const [imageShown, setImageShown] = useState(1);

  const handleClickLeftArrow = (_) => {
    if (imageShown === 1) {
      setImageShown(7);
    } else {
      setImageShown((currentImageShown) => currentImageShown - 1);
    }
  };

  const handleClickRightArrow = (_) => {
    if (imageShown === 7) {
      setImageShown(1);
    } else {
      setImageShown((currentImageShown) => currentImageShown + 1);
    }
  };

  const handleClickCircle = (index) => {
    setImageShown(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageShown((currentImageShown) => (currentImageShown % 7) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <MainContainer>
      <InnerContainer>
        <ContentContainer>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Carousel img number ${index}`}
              show={imageShown === index + 1}
            />
          ))}
          <ArrowBackIcon onClick={handleClickLeftArrow} />
          <ArrowForwardIcon onClick={handleClickRightArrow} />
          <Navigation>
            {Array.from({ length: images.length }).map((_, index) => {
              return imageShown === index + 1 ? (
                <CircleIcon
                  key={index}
                  isEmpty={false}
                  onClick={() => handleClickCircle(index + 1)}
                />
              ) : (
                <CircleIcon
                  key={index}
                  isEmpty={false}
                  onClick={() => handleClickCircle(index + 1)}
                />
              );
            })}
          </Navigation>
        </ContentContainer>
      </InnerContainer>
    </MainContainer>
  );
}
export default Carousel;
