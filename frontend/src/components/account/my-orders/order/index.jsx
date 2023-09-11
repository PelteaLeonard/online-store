import { Link } from "react-router-dom";
import {
  Button,
  DetailsButtonWrapper,
  InnerContainer,
  MainContainer,
  MainDetails,
  Text,
} from "./styles";

function Order() {
  return (
    <MainContainer>
      <InnerContainer>
        <MainDetails>
          <Link>Order no. 286833412</Link>
          <Text>Posted on: November 11, 2022, 07:26 | Total: 259,96 Lei</Text>
        </MainDetails>
        <DetailsButtonWrapper>
          <Button>Order details</Button>
        </DetailsButtonWrapper>
      </InnerContainer>
    </MainContainer>
  );
}
export default Order;
