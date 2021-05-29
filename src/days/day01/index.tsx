import WrapperDay from "../../Components/WrapperDay";
import { Container, Description, Section } from "./styles";

export default function Day01(): JSX.Element {
  return (
    <WrapperDay title='Day 01' description="Scroll Snap Align">
      <Container>
        <Section>
          <Description>
            <span>
              <br />A propriedade <code>scroll-snap-type </code> permite que os elementos scrolláveis possam ajustar as
              posições dos seus elementos filhos conforme o scroll do usuário, seja no eixo X ou Y, uma vez que a propriedade <code>scroll-snap-align</code> dos elementos filhos esteja especificada.
              <br />Veja mais sobre essas propriedades <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap/Basic_concepts' target='blank'>aqui</a>.
            </span>
            <h1>Não se esqueça de rolar essa página para baixo.</h1>
          </Description>
        </Section>
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
        <Section />
      </Container>
    </WrapperDay>
  )
}
