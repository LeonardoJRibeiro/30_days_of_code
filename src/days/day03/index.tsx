import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from "react";
import WrapperDay from "../../Components/WrapperDay";
import { Button, ButtonContainer, ElementoFilho, ElementoPai } from "./styles";


export default function Day03() {
  const refFilho = useRef<ElementoFilhoHandles>({} as ElementoFilhoHandles)

  const handleClickToggleBlue = useCallback(
    () => {
      refFilho.current.toggleBlue();
    },
    [],
  );

  const handleClickToggleOpacity = useCallback(
    () => {
      refFilho.current.toggleOpacity();
    },
    [],
  );

  const handleClicFocusInput = useCallback(
    () => {
      refFilho.current.focusInput();
    },
    [],
  );

  return (
    <WrapperDay title="Day 03" description="Uso de ref">
      <ElementoPai>
        <h1>
          Componente pai
        </h1>

        <ButtonContainer>
          <Button onClick={handleClickToggleBlue}>
            Alternar cor
          </Button>
          <Button onClick={handleClicFocusInput}>
            Focalizar campo de texto
          </Button>
          <Button onClick={handleClickToggleOpacity}>
            Alternar opacidade
          </Button>
        </ButtonContainer>
        <Filho ref={refFilho} />
      </ElementoPai>
    </WrapperDay>
  )
}

interface ElementoFilhoHandles {
  toggleBlue: () => void;
  toggleOpacity: () => void;
  focusInput: () => void;
}

const Filho = forwardRef<ElementoFilhoHandles>((_, ref) => {
  const [blue, setBlue] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);
  const refInput = useRef<HTMLInputElement>({} as HTMLInputElement);

  useImperativeHandle(ref, () => {
    return {
      toggleBlue: () => setBlue(blue => !blue),
      toggleOpacity: () => setOpacity(opacity => opacity === 1 ? 0.6 : 1),
      focusInput: () => refInput.current.focus(),
    }
  }, [setOpacity, setBlue]);

  return (
    <ElementoFilho blue={blue} opacity={opacity}>
      <h1>Componente Filho</h1>
      <span><br />O uso de ref no react torna possível o acesso aos elementos da DOM de forma parecida com o
      <code>document.getElementById</code> e também invocar funcionalidades de componentes filhos através do
      componente pai, tais como foco ou reprodução de mídia.
      <br />O uso de refs não é recomendado para o gerenciamento de estados dentro da aplicação, como a abertura
      fechamento de diálogos. Neste exemplo, os métodos de alterar cor e opacidade são para fins de exemplo.
      </span>
      <input type='text' ref={refInput}></input>
    </ElementoFilho>
  )
}
);