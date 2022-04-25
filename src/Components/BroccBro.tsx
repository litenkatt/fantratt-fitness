import React from "react";
import broccbro from "../res/images/broccbro.svg";
import WordArt from "react-wordart";
import styled, { keyframes } from "styled-components";
import Draggable from "./Draggable";

const dance = keyframes`
  0%   {transform: rotate(-15deg);}
  50%  {transform: rotate(15deg);}
  100% {transform: rotate(-15deg);}
}
`;

const StyledLogo = styled.img`
  height: 50vmin;
  animation: ${dance} infinite 5s linear;
  pointer-events: none;
`;

function BroccBro() {
  return (
    <Draggable>
      <StyledLogo src={broccbro} alt="logo" />
    </Draggable>
  );
}

export default BroccBro;