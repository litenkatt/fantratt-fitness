import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: ${(props) => props.theme.background};
  height: 15vh;
  width: 100vw;
  padding: 1.2rem;
  top: 0;
  z-index: 0;
  position: relative;
  &::after {
    background: ${(props) => props.theme.background};
    content: "";
    width: 100%;
    height: 30vh;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewY(-4deg);
    z-index: -1;
  }
  & h1 {
    color: white;
    font-size: 5rem;
    font-weight: 400;
    padding: 1rem;
    /* -webkit-text-stroke: 1px black; */
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Fåntratt Fitness</h1>
    </StyledHeader>
  );
}

export default Header;
