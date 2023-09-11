import { ChevronLeft, Google } from "@mui/icons-material";

import { useState } from "react";

import { Checkbox } from "@mui/material";

import {
  Form,
  PasswordField,
  RememberMeText,
  BottomContainer,
  ForgotPasswordLink,
  RememberMeContainer,
} from "./styles";

import {
  Title,
  BackLink,
  LinkText,
  InputField,
  Description,
  SubmitButton,
} from "../shared/authentication/styles";

function LoginForm(props) {
  const { defaultEmail } = props;

  const [email, setEmail] = useState(defaultEmail);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Form>
      <BackLink to="/register">
        <ChevronLeft />
        <LinkText>Back</LinkText>
      </BackLink>
      <Title>Enter your credentials</Title>
      <Description>Login to see info about your orders</Description>
      <InputField
        size="small"
        placeholder="Your email address..."
        variant="outlined"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <PasswordField
        size="small"
        placeholder="Your password..."
        variant="outlined"
        type="password"
      />
      <SubmitButton>Login</SubmitButton>
      <BottomContainer>
        <RememberMeContainer>
          <Checkbox />
          <RememberMeText>Remember me!</RememberMeText>
        </RememberMeContainer>
        <ForgotPasswordLink to="/forgot-password">
          Forgot password?
        </ForgotPasswordLink>
      </BottomContainer>
    </Form>
  );
}

export default LoginForm;
