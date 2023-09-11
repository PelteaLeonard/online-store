import {
  AvatarWrapper,
  ChangeDataButtonWrapper,
  DetailsContainer,
  FieldContainer,
  InnerContainer,
  MainContainer,
  Section,
  Title,
} from "./styles";

import { Avatar } from "@mui/material";

function AccountsData() {
  return (
    <MainContainer>
      <Section>
        <Title>Account data</Title>
        <InnerContainer>
          <AvatarWrapper>
            <Avatar
              alt={"User profile image"}
              src={"https://mui.com/static/images/avatar/1.jpg"}
            />
          </AvatarWrapper>
          <DetailsContainer>
            <FieldContainer>Alias</FieldContainer>
            <FieldContainer>Name</FieldContainer>
            <FieldContainer>Email</FieldContainer>
            <FieldContainer>Phone</FieldContainer>
          </DetailsContainer>
        </InnerContainer>
      </Section>
      <ChangeDataButtonWrapper></ChangeDataButtonWrapper>
    </MainContainer>
  );
}
export default AccountsData;
