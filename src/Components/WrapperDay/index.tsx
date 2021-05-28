import { Title, Header, Description } from "./styles";

interface Props {
  children: React.ReactNode;
  title: String;
  description: string;
}

export default function WrapperDay({ children, title, description }: Props): JSX.Element {
  return (
    <>
      <Header>
        <Title>
          <div>
            {'<-'}
          </div>
          {title}
        </Title>
        <Description>{description}</Description>
      </Header>
      {children}
    </>
  )
}
