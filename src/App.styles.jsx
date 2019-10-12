import styled from "styled-components";

export const Cards = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  text-align: center;
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const Header = styled.h1`
  text-align: center;
`;
