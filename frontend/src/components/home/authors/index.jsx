import {
  Card,
  Name,
  Image,
  Title,
  Section,
  CardsContainer,
  SectionWrapper,
  ArrowBackIcon,
  ArrowForwardIcon,
  Navigation,
  CircleIcon,
  CardsWrapper,
} from "./styles";

import Ashlee from "../../../images/authors/ashlee-vance.jpg";
import Bob from "../../../images/authors/bob-mortimer.jpg";
import Colleen from "../../../images/authors/colleen-hoover.jpg";
import David from "../../../images/authors/david-goggins.jpg";
import Emily from "../../../images/authors/emily-henry.jpg";
import Georgina from "../../../images/authors/georgina-lees.jpg";
import Jim from "../../../images/authors/jim-keen.jpg";
import Kim from "../../../images/authors/kim-stanley-robinson.jpg";
import Paulo from "../../../images/authors/paulo-coelho.jpg";
import Phoebe from "../../../images/authors/phoebe-morgan.jpg";
import Sally from "../../../images/authors/sally-rooney.jpg";
import Teresa from "../../../images/authors/teresa-driscoll.jpg";
import Vex from "../../../images/authors/vex-king.jpg";
import Wensley from "../../../images/authors/wensley-clarkson.jpg";
import Alice from "../../../images/authors/alice-walker.jpg";
import Brian from "../../../images/authors/brian-evenson.jpg";
import Charles from "../../../images/authors/charles-dickens.jpg";
import Elif from "../../../images/authors/elif-shafak.jpg";
import Ernest from "../../../images/authors/ernest-hemingway.jpg";
import J from "../../../images/authors/j-k-rowling.jpg";
import Jerry from "../../../images/authors/jerry-jenkins.jpg";
import John from "../../../images/authors/john-green.jpg";
import Kazuo from "../../../images/authors/kazuo-ishiguro.jpg";
import Mark from "../../../images/authors/mark-twain.jpg";

import { useState } from "react";

const authors = [
  {
    image: Ashlee,
    name: "Ashlee Vance",
  },
  {
    image: Bob,
    name: "Bob Mortimer",
  },
  {
    image: Colleen,
    name: "Colleen Hoover",
  },
  {
    image: David,
    name: "David Goggins",
  },
  {
    image: Emily,
    name: "Emily Henry",
  },
  {
    image: Georgina,
    name: "Georgina Lees",
  },
  {
    image: Jim,
    name: "jim Keen",
  },
  {
    image: Kim,
    name: "Kim Stanley Robinson",
  },
  {
    image: Paulo,
    name: "Paulo Coelho",
  },
  {
    image: Phoebe,
    name: "Phoebe Morgan",
  },
  {
    image: Sally,
    name: "Sally Rooney",
  },
  {
    image: Teresa,
    name: "Teresa Driscoll",
  },
  {
    image:Vex,
    name:"Vex King",
  },
  {
    image: Wensley,
    name: "Wensley Clarkson",
  },
  {
    image: Alice,
    name: "Alice Walker",
  },
  {
    image: Brian,
    name: "Brian Evenson",
  },
  {
    image: Charles,
    name: "Charles Dickens",
  },
  {
    image: Elif,
    name: "Elif Shafak",
  },
  {
    image: Ernest,
    name: "Ernest Hemingway",
  },
  {
    image: J,
    name: "J.K.Rowling",
  },
  {
    image: Jerry,
    name: "Jerry Jenkins",
  },
  {
    image: John,
    name: "John Green",
  },
  {
    image: Kazuo,
    name: "Kazuo Ishiguro",
  },
  {
    image: Mark,
    name: "Mark Twain"
  }
];

function Authors() {
  const [start, setStart] = useState(0);
  const [activeCircle, setActiveCircle] = useState(0);

  const handleClickLeftArrow = (_) => {
    setStart((currentStart) => Math.max(currentStart - 6, 0));
    setActiveCircle((currentActiveCircle) =>
      Math.max(currentActiveCircle - 1, 0)
    );
  };

  const handleClickRightArrow = (_) => {
    setStart((currentStart) => Math.min(currentStart + 6, authors.length - 6));
    setActiveCircle((currentActiveCircle) =>
      Math.min(currentActiveCircle + 1, Math.floor(authors.length / 6) - 1)
    );
  };

  const handleClickCircle = (index) => {
    setStart(index * 6);
    setActiveCircle(index);
  };

  return (
    <SectionWrapper>
      <Section>
        <Title>Popular authors</Title>
        <CardsWrapper>
          <CardsContainer>
            {authors.slice(start, start + 6).map(({ image, name }) => (
              <Card key={name}>
                <Image src={image} alt={name} />
                <Name>{name}</Name>
              </Card>
            ))}
          </CardsContainer>
          <ArrowBackIcon
            disabled={start === 0}
            onClick={handleClickLeftArrow}
          />
          <ArrowForwardIcon
            disabled={start === authors.length - 6}
            onClick={handleClickRightArrow}
          />
          <Navigation>
            {Array.from({
              length: Math.ceil(authors.length / 6),
            }).map((_, index) => (
              <CircleIcon
                key={index}
                active={index === activeCircle}
                onClick={() => handleClickCircle(index)}
              />
            ))}
          </Navigation>
        </CardsWrapper>
      </Section>
    </SectionWrapper>
  );
}
export default Authors;
