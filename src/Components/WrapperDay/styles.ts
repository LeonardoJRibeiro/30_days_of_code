import styled from "styled-components";

export const Title = styled.h1`
  display: flex;  
  padding-left: 16px;
`;

export const GoBack = styled.span` 
  padding-right: 16px;
  pointer-events: all;
  cursor: pointer;
`;

export const Description = styled.h2`
  padding-right: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 200, 200, 0.2);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

