import FormLogo from "../../components/shared/authentication/form-logo";

import RegisterForm from "../../components/register/register-form";

import { Main, Container } from "../../components/shared/authentication/styles";

function Register() {
  return (
    <Main>
      <Container>
        <FormLogo />
        <RegisterForm />
      </Container>
    </Main>
  );
}

export default Register;
