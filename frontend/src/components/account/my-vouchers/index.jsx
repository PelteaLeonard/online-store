import {
  Title,
  Button,
  Section,
  CardTitle,
  Paragraph,
  TopContainer,
  ButtonWrapper,
  BottomContainer,
  NoCardContainer,
  OfferCardContainer,
} from "./styles";

function MyVouchers() {
  return (
    <Section>
      <TopContainer>
        <Title>My voucher</Title>
        <ButtonWrapper>
          <Button>Order details</Button>
        </ButtonWrapper>
      </TopContainer>
      <BottomContainer>
        <OfferCardContainer>
          <NoCardContainer>
            <CardTitle>The best gift is the Card with millions of ideas!</CardTitle>
            <Paragraph>For all those times when you're looking for a gift and you're going through "what to get them, what to get them?"</Paragraph>
          </NoCardContainer>
        </OfferCardContainer>
      </BottomContainer>
    </Section>
  );
}
export default MyVouchers;
