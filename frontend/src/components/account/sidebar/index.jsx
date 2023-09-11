import { Link, useLocation } from "react-router-dom";
import { Container, Item, List, Navigation, RouterLink } from "./styles";
import { useEffect, useState } from "react";

const links = [
  {
    name: "My account",
    url: "/account/account",
  },
  {
    name: "My orders",
    url: "/account/orders",
  },
  {
    name: "My vouchers",
    url: "/account/vouchers",
  },
  {
    name: "My favorites",
    url: "/account/favorites",
  },
  {
    name: "Change data",
    url: "/account/change-data",
  },
];

function SideBar() {
  const location = useLocation();

  return (
    <Container>
      <Navigation>
        <List>
          {links.map(({ name, url }) => (
            <RouterLink key={name} to={url} active={location.pathname === url}>
              <Item>{name}</Item>
            </RouterLink>
          ))}
        </List>
      </Navigation>
    </Container>
  );
}
export default SideBar;
