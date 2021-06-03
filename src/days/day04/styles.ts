import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 48px);
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Description = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const AnimatedHoverContainer = styled.div`
  height: 150px;
  width: 150px;
  transition: all 0.5s;
  background-color: #00ff00;
  :hover{
    transform: scale(0.8);
    border-radius: 75px;
  };
  :active{
    transform: scale(0.7);
    border-radius: 15px;
  }
`;

const animtion = keyframes`
  0% {
    transform: rotate(0deg);
    background-color:#0000ff;
    transform: scale(1);
  }
  20%{
    transform: rotate(0deg);
  }
  25%{
    transform: rotate(90deg);
  }
  33%{
    background-color:#00ff00;
  }
  45%{
    transform: rotate(90deg);
  }
  50%{
    transform: rotate(180deg);
  }
  66%{
    background-color:#ff0000;
  }
  70%{
    transform: rotate(180deg);
  }
  75%{
    transform: rotate(270deg);
  }
  95%{
    transform: rotate(270deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const AnimatedAutoContainer = styled.div`
  height: 150px;
  width: 150px;
  background-color: #00ff00;
  animation: ${animtion} 10s ease-in-out infinite;
  transition: all 0.3s;
  :hover{
    border-radius: 15px;
  };
`;