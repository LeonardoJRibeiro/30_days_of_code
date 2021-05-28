import { useHistory } from "react-router";
import { Title, Header, Description, GoBack } from "./styles";

interface Props {
  children: React.ReactNode;
  title: String;
  description: string;
}

export default function WrapperDay({ children, title, description }: Props): JSX.Element {
  const history = useHistory();
  return (
    <>
      <Header>
        <Title>
          <GoBack onClick={() => history.goBack()}>
            {'<'}
          </GoBack>
          {title}
        </Title>
        <Description>{description}</Description>
      </Header>
      {children}
    </>
  )
}
