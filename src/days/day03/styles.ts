import styled from "styled-components";

export const ElementoPai = styled.div`
  margin-top: 48px;
  height: calc(100vh - 48px);
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  padding: 10px 20px ;
`;

export const Button = styled.button`
  border-radius: 8px;
  padding: 8px;
  background-color: #ddd;
  border: solid 2px;
  :hover{
    background-color: #fff;
    border: solid 2px #333 ;
    cursor: pointer;
  }
`;

interface PropsElementoFilho {
  blue: boolean;
  opacity: number;
}
export const ElementoFilho = styled.div<PropsElementoFilho>`
  min-height: 50%;
  width: 100%;
  max-width: 600px;
  padding: 0 20px;
  background-color: ${props => props.blue ? "#0000ff" : "#aaaaaa"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  opacity: ${props => props.opacity};
  box-shadow: 0 0 10px 10px ${props => props.blue ? "#0000aa" : "#555"};
  margin: 20px;
  transition: all 0.3s;
`;