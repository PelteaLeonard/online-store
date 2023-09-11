import FormLogo from "../../components/shared/authentication/form-logo";

import ContinueRegisterForm from "../../components/register/continue-register-form";

import { Main } from "./styles";

import { Container } from "../../components/shared/authentication/styles";

import { useLocation } from "react-router-dom";

function ContinueRegister() {
  const location = useLocation();

  const defaultEmail = location.state?.defaultEmail;

  return (
    <Main>
      <Container>
        <FormLogo />
        <ContinueRegisterForm defaultEmail={defaultEmail} />
      </Container>
    </Main>
  );
}

export default ContinueRegister;
