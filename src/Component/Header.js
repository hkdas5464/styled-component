import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Image } from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import { Container } from "./styles/Container.styled";

export default function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build</h1>
            <p>
              A paragraph is a series of related sentences developing a central
              idea, called the topic. Try to think about paragraphs in terms of
              thematic unity: a paragraph is a sentence or a group of sentences
              that supports one central, unified idea. Paragraphs add one idea
              at a time to your broader argument.
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Start
            </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="imges" />
        </Flex>
      </Container>
    </StyledHeader>
  );
}
