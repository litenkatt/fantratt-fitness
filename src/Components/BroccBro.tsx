import { animated, useSpring } from "@react-spring/web";
import React from "react";
import broccbro from "../res/images/broccbro.svg";
import WordArt from "react-wordart";
import styled, { keyframes } from "styled-components";
import styled from "styled-components";
import Draggable from "./Draggable";

const StyledLogo = styled(animated.img)`
  height: 40vmin;
  pointer-events: none;
`;

const StyledBroccBro = styled(animated.div)`
  position: absolute;
  top: 50vh;
  transform: translateY(-50%);
  right: 5vw;
`;

function BroccBro() {
  const introProps = useSpring({
    config: { mass: 5, friction: 100, bounce: 2 },
    from: { transform: "translateY(-50%) scale(0.2)", right: "95vw" },
    to: { transform: "translateY(-50%) scale(0.99)", right: "5vw" },
  });
  const danceProps = useSpring({
    config: { mass: 1.7, tension: 120, friction: 15, bounce: 1 },
    loop: { reverse: true },
    from: { transform: "rotate(-15deg)" },
    to: { transform: "rotate(15deg)" },
  });
  return (
    <StyledBroccBro style={introProps}>
      <Draggable>
        <StyledLogo src={broccbro} alt="logo" style={danceProps} />
      </Draggable>
    </StyledBroccBro>
  );
}

export default BroccBro;
