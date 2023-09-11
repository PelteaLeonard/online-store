import ForgotPasswordForm from "../../components/forgot-password-form";

import FormLogo from "../../components/shared/authentication/form-logo";

import { Main, Container } from "../../components/shared/authentication/styles";

function ForgotPassword() {
  return (
    <Main>
      <Container>
        <FormLogo />
        <ForgotPasswordForm />
      </Container>
    </Main>
  );
}

export default ForgotPassword;
