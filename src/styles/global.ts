import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  code{
    background-color: rgba(50,50,50,50);
    color: #fff;
    padding: 2px;
    border-radius: 2px;
    margin: 0 2px;
  };
`