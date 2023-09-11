import { Groups, Info } from "@mui/icons-material";
import {
  Title,
  Container,
  TitleWrapper,
  InfoIconWrapper,
  MainIconWrapper,
  GroupsIcon,
  Link,
} from "./styles";
import { Tooltip } from "@mui/material";

function Card(props) {
  const { url, info, icon, title } = props;

  return (
    <Container>
      <Link to={url}>
        <InfoIconWrapper>
          <Tooltip title={info}>
            <Info />
          </Tooltip>
        </InfoIconWrapper>
        <MainIconWrapper>{icon}</MainIconWrapper>
        <TitleWrapper>
          <Title>{title}</Title>
        </TitleWrapper>
      </Link>
    </Container>
  );
}
export default Card;
