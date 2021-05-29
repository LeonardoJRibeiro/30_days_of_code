import WrapperDay from "../../Components/WrapperDay";
import { Card, Container, Description } from "./styles";

export default function Day2(): JSX.Element {
  return (
    <WrapperDay title="Day 2" description="Box shadow">
      <Container>
        <Card>
          <Description>
            <span>A propriedade <code>box-shadow</code> permite adicionar sombras aos elementos.</span>
            <code>box-shadow: 0px 1px 20px 10px rgba(0, 0, 0, 0.3);</code>
            <span>
              <br />Onde:
            <br />O primeiro valor (<code>0px</code>) corresponde ao deslocamento no eixo X;
            <br />O segundo valor (<code>1px</code>) corresponde ao deslocamento no eixo Y;
            <br />O terceiro valor (<code>20px</code>) corresponde ao raio do desfoque;
            <br />O quarto valor (<code>10px</code>) corresponde ao raio do espalhamento;
            <br />O quinto valor (<code>rgba(0, 0, 0, 0.3)</code>) corresponde à cor da sombra;
            </span>
          </Description>
        </Card>
      </Container>
    </WrapperDay>
  )
}
