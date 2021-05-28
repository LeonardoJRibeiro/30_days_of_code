import LinkOfDay from "../../Components/LinkOfDay";
import { Body, Container, Header } from "./styles";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>

      </Header>
      <Body>
        <LinkOfDay to="day01" label="Day 01" />
      </Body>
    </Container>
  )
}
