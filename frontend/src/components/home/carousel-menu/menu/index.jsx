import {
  Text,
  Item,
  Link,
  SellIcon,
  Container,
  PersonIcon,
  DiscountIcon,
  InventoryIcon,
  NewReleasesIcon,
  LibraryBooksIcon,
} from "./styles";

function Menu() {
  return (
    <Container>
      <Item>
        <Link>
          <LibraryBooksIcon />
          <Text>All books</Text>
        </Link>
      </Item>
      <Item>
        <Link>
          <SellIcon />
          <Text>Cheapest books</Text>
        </Link>
      </Item>
      <Item>
        <Link>
          <NewReleasesIcon />
          <Text>Newest books</Text>
        </Link>
      </Item>
      <Item>
        <Link>
          <InventoryIcon />
          <Text>Top books packs</Text>
        </Link>
      </Item>
      <Item>
        <Link>
          <DiscountIcon />
          <Text>Books under 10 pounds</Text>
        </Link>
      </Item>
      <Item>
        <Link>
          <PersonIcon />
          <Text>Authors</Text>
        </Link>
      </Item>
    </Container>
  );
}

export default Menu;
