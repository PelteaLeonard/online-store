
import {InnerContainer, MainContainer } from "./styles";

import AccountsData from "./accounts-data";

function MyAccount() {
    return (
      <MainContainer>
        <InnerContainer>
            <AccountsData/>
            {/* <Addresses/> */}
        </InnerContainer>
        {/* <Activity/> */}
      </MainContainer>
    );
  }
  export default MyAccount;