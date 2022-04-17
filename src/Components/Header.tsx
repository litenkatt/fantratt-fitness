import React from "react";
import WordArt from "react-wordart";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: ${(props) => props.theme.background};
  height: 15vh;
  width: 100vw;
  padding: 10px;
  top: 0;
  &::after {
    background: ${(props) => props.theme.background};
    content: "";
    width: 100%;
    height: 30vh;
    position: absolute;
    top: 0;
    left: 0;
    transform: skewY(-4deg);
  }
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <WordArt text="Fåntratt Fitness" theme={`italicOutline`} fontSize={100} />
    </StyledHeader>
  );
}

export default Header;
