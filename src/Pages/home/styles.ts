import styled from "styled-components";

export const Container = styled.div`
  max-height: 100vh;
  min-height: 100vh;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #ddddff;
  background: rgba(0, 200, 200, 0.2);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  height: 48px;
`;

export const Title = styled.h1`
  padding: 0 16px;
`;

export const Body = styled.div`
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
`;

