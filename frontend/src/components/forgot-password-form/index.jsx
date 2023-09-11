import { Divider, Form, FoundButton, LoginLink } from "./styles";

import {
  Title,
  InputField,
  Description,
} from "../shared/authentication/styles";

function ForgotPasswordForm() {
  return (
    <Form>
      <Title>Enter your email address</Title>
      <Description>Found your password using email address</Description>
      <InputField
        size="small"
        placeholder="Your email address..."
        variant="outlined"
        type="email"
      />
      <FoundButton>Found password</FoundButton>
      <Divider>
        <LoginLink to="/login">Login</LoginLink>
      </Divider>
    </Form>
  );
}
export default ForgotPasswordForm;
