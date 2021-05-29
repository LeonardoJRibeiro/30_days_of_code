import styled from "styled-components";

export const Card = styled.div`
  height: 50%;
  width: 75%;
  background-color: #00aaff;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  :hover{
    box-shadow: 20px 20px 20px 1px rgba(0, 0, 0, 0.3);
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;