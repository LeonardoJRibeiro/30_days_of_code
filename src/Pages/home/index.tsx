import LinkOfDay from "../../Components/LinkOfDay";
import { Body, Container, Header, Title } from "./styles";

export default function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>30 days of code</Title>
      </Header>
      <Body>
        <LinkOfDay to="day01" label="Day 01" />
        <LinkOfDay to="day02" label="Day 02" />
        <LinkOfDay to="day03" label="Day 03" />
        <LinkOfDay to="day04" label="Day 04" />
      </Body>
    </Container>
  )
}
