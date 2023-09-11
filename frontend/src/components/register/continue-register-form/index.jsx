import { useState } from "react";

import { Checkbox } from "@mui/material";

import { ChevronLeft } from "@mui/icons-material";

import {
  Title,
  BackLink,
  LinkText,
  InputField,
  Description,
  SubmitButton,
} from "../../shared/authentication/styles";

import {
  Form,
  TermsConditionsText,
  TextFieldsContainer,
  TermsConditionsContainer,
} from "./styles";

function ContinueRegisterForm(props) {
  const { defaultEmail } = props;

  const [email, setEmail] = useState(defaultEmail || "");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Form>
      <BackLink to="/register">
        <ChevronLeft />
        <LinkText>Back</LinkText>
      </BackLink>
      <Title>Create a new account</Title>
      <Description>
        We did not find an account associated with this email address, cr
      </Description>
      <TextFieldsContainer>
        <InputField
          size="small"
          placeholder="Your email address..."
          variant="outlined"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputField
          size="small"
          placeholder="Your last name"
          variant="outlined"
        />
        <InputField
          size="small"
          placeholder="Your first name"
          variant="outlined"
        />
        <InputField
          size="small"
          placeholder="Your password"
          variant="outlined"
          type="password"
        />
        <InputField
          size="small"
          placeholder="Your password confirmation"
          variant="outlined"
          type="password"
        />
      </TextFieldsContainer>
      <TermsConditionsContainer>
        <Checkbox />
        <TermsConditionsText>
          I have read and agree to the terms and conditions
        </TermsConditionsText>
      </TermsConditionsContainer>
      <SubmitButton>Register</SubmitButton>
    </Form>
  );
}

export default ContinueRegisterForm;
