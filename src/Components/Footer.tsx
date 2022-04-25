import React from "react";
import styled from "styled-components";
import iglogo from "../res/images/social/ig.png";
import ytlogo from "../res/images/social/yt.png";
import zoombrocc from "../res/images/zoombrocc.png";

const StyledFooter = styled.div`
  height: 15vh;
  width: 100vw;
  padding: 10px;
  bottom: 0;
  z-index: 0;
  position: relative;
  display: flex;
  padding-bottom: 2rem;
  & > div {
    filter: blur(1px);
    background-image: url(${zoombrocc});
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &::before {
    background-image: url(${zoombrocc});
    filter: blur(1px);
    content: "";
    width: 100%;
    height: 30vh;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: skewY(4deg);
    z-index: -1;
  }
`;

const StyledLogo = styled.img`
  height: 5rem;
  z-index: 1;
  padding: 2rem;
  filter: none;
`;

function Footer() {
  return (
    <StyledFooter>
      <div></div>
      <a href="https://www.instagram.com/fantrattfitness/" target="_blank">
        <StyledLogo src={iglogo} alt="logo" />
      </a>
      <a href="https://www.youtube.com/channel/UCV0czQtDBwFflwYQ3hpecHg" target="_blank">
        <StyledLogo src={ytlogo} alt="logo" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
