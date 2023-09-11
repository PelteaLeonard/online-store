import { Container, LinearProgress, Text, Wrapper } from "./styles";

function ShippingProgress() {
  return (
    <Container>
      <Wrapper>
        <LinearProgress
          variant="determinate"
          value={10}
        />
        <Text>Free shipping from 30£!</Text>
      </Wrapper>
    </Container>
  );
}
export default ShippingProgress;
