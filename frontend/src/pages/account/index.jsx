import SideBar from "../../components/account/sidebar";
import { Outlet } from "react-router-dom";
import { Container, Main } from "./styles";

function Account() {
  return (
    <Main>
      <Container>
        <SideBar />
        <Outlet />
      </Container>
    </Main>
  );
}
export default Account;
