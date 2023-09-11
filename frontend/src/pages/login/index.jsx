import FormLogo from "../../components/shared/authentication/form-logo";

import LoginForm from "../../components/login-form";

import { Main, Container } from "../../components/shared/authentication/styles";
import { useLocation } from "react-router-dom";

function Login() {
  const location = useLocation();

  const defaultEmail = location.state?.defaultEmail;

  return (
    <Main>
      <Container>
        <FormLogo />
        <LoginForm defaultEmail={defaultEmail} />
      </Container>
    </Main>
  );
}

export default Login;
