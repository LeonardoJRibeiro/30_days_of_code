import styled from 'styled-components';

export const Container = styled.div`
  max-height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;


export const Section = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  :nth-child(odd){
    background-color: #0FF;
  }
`