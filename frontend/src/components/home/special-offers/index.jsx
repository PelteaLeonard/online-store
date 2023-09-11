import {
  BooksDealsLink,
  ChevronRightIcon,
  FirstImageButton,
  FirstImageContainer,
  FirstImageSpan,
  FirstImageText,
  FirstImageWrapper,
  ImagesContainer,
  PackageDealsLink,
  SecondImageButton,
  SecondImageContainer,
  SecondImageSpan,
  SecondImageText,
  SecondImageWrapper,
  Section,
  SectionWrapper,
  Title,
} from "./styles";

function SpecialOffers() {
  return (
    <SectionWrapper>
      <Section>
        <Title>Special offers</Title>
        <ImagesContainer>
          <FirstImageWrapper>
            <BooksDealsLink to="/book-deals">
              <FirstImageContainer>
                <FirstImageText>Book deals</FirstImageText>
                <FirstImageButton>
                  <FirstImageSpan>See books</FirstImageSpan>
                  <ChevronRightIcon />
                </FirstImageButton>
              </FirstImageContainer>
            </BooksDealsLink>
          </FirstImageWrapper>
          <SecondImageWrapper>
            <PackageDealsLink to="/package-deals">
              <SecondImageContainer>
                <SecondImageText>Package deals</SecondImageText>
                <SecondImageButton>
                  <SecondImageSpan>See packages</SecondImageSpan>
                  <ChevronRightIcon />
                </SecondImageButton>
              </SecondImageContainer>
            </PackageDealsLink>
          </SecondImageWrapper>
        </ImagesContainer>
      </Section>
    </SectionWrapper>
  );
}
export default SpecialOffers;
