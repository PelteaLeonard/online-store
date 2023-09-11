import { MenuItem, Select } from "@mui/material";
import {
  ActionsContainer,
  MainContainer,
  OrdersContainer,
  Section,
  Span,
  TextField,
  Title,
} from "./styles";
import Order from "./order";

function MyOrders() {
  return (
    <Section>
      <Title>My Orders</Title>
      <MainContainer>
        <ActionsContainer>
          <Span>see</Span>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Span>from</Span>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <TextField />
        </ActionsContainer>
        <OrdersContainer>
          <Order />
          <Order />
          <Order />
        </OrdersContainer>
      </MainContainer>
    </Section>
  );
}
export default MyOrders;
