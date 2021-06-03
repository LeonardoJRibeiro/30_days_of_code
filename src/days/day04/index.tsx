import WrapperDay from "../../Components/WrapperDay";
import { AnimatedHoverContainer, Container, AnimatedAutoContainer, Description } from "./styles";


export default function Day04() {
  return (
    <WrapperDay title="Day 04" description="Animações">
      <Container>
        <AnimatedHoverContainer />
        <Description>
          O CSS possui algumas pseudo-classes que possibilitam algumas animações quando o usuário interage com a página,
           como <code>:hover</code> e <code>:active</code>, por exemplo respodendo a sobreposição do ponteiro ou clique, respectivamente.
          <br />As animações podem ocorrer de forma automática através dos <code>@keyframes</code> que irão definir as etapas das animações
          possibilitando o uso de <code>from</code>,<code>to</code> e a porcentagem do fluxo da animação de <code>0%</code> a <code>100%</code>.
        </Description>
        <AnimatedAutoContainer />
      </Container>
    </WrapperDay>
  )
}
