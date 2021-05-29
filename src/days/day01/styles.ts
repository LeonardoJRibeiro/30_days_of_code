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
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  :nth-child(odd){
    background-color: #0FF;
  }
`;

export const Description = styled.div`
  max-width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;
