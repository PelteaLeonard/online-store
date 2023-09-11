import { Google } from "@mui/icons-material";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Form,
  Title,
  InputField,
  Description,
  SubmitButton,
  GoogleButton,
  LoginWithText,
  Divider,
} from "../../shared/authentication/styles";

function RegisterForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const authEmail = "leonard.peltea@yahoo.com";

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!email) {
      alert("Email cannot be empty!");
      return;
    }

    if (email !== authEmail) {
      navigate("/continue-register", {
        state: {
          defaultEmail: email,
        },
      });
    } else {
      navigate("/login", {
        state: {
          defaultEmail: email,
        },
      });
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Title>Enter your email address</Title>
      <Description>
        Having an account you see info about your orders
      </Description>
      <InputField
        size="small"
        placeholder="Your email address..."
        variant="outlined"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <SubmitButton type="submit">Continue</SubmitButton>
      <Divider>Or</Divider>
      <LoginWithText>Login with</LoginWithText>
      <GoogleButton variant="outlined" startIcon={<Google />}>
        Google
      </GoogleButton>
    </Form>
  );
}

export default RegisterForm;
