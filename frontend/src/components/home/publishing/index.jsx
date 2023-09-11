import {
  Card,
  Image,
  Title,
  Section,
  SectionWrapper,
  CardsContainer,
} from "./styles";

import Beanie from "../../../images/publishing/beaniebooks.jpg";
import Comics from "../../../images/publishing/comics.jpg";
import Random from "../../../images/publishing/random-house.jpg";
import Penguin from "../../../images/publishing/penguin-house.jpg";
import Springer from "../../../images/publishing/springer.jpg";
import Rabbit from "../../../images/publishing/white-rabbit.jpg";

function Publishing() {
  const publishing = [
    {
      image: Beanie,
    },
    {
      image: Penguin,
    },
    {
      image: Springer,
    },
    {
      image: Comics,
    },
    {
      image: Rabbit,
    },
    {
      image: Random,
    },
  ];

  return (
    <SectionWrapper>
      <Section>
        <Title>Publishing</Title>
        <CardsContainer>
          {publishing.map(({ image }, index) => (
            <Card key={index}>
              <Image src={image} alt={`Publishing image number ${index + 1}`} />
            </Card>
          ))}
        </CardsContainer>
      </Section>
    </SectionWrapper>
  );
}
export default Publishing;
