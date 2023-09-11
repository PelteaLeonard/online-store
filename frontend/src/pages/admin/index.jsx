import Card from "../../components/admin/card";
import {
  Main,
  Wrapper,
  BookIcon,
  Container,
  GroupsIcon,
  AuthorIcon,
  ReviewIcon,
  PublishingIcon,
} from "./styles";

const cards = [
  {
    url: "/manage-clients",
    info: "You can manage the members in this section",
    icon: <GroupsIcon />,
    title: "Manage clients",
  },
  {
    url: "/manage-authors",
    info: "You can manage the authors in this section",
    icon: <AuthorIcon />,
    title: "Manage authors",
  },
  {
    url: "/manage-reviews",
    info: "You can manage the reviews in this section",
    icon: <ReviewIcon />,
    title: "Manage reviews",
  },
  {
    url: "/manage-books",
    info: "You can manage the books in this section",
    icon: <BookIcon />,
    title: "Manage books",
  }
];

// authors, reviews, books, members, categories

function Admin() {
  return (
    <Main>
      <Wrapper>
        <Container>
          {cards.map(({ url, info, icon, title }) => (
            <Card key={title} url={url} info={info} icon={icon} title={title} />
          ))}
        </Container>
      </Wrapper>
    </Main>
  );
}

export default Admin;
