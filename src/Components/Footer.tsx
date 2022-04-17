import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background: ${(props) => props.theme.background};
  height: 15vh;
  width: 100vw;
  padding: 10px;
  bottom: 0;
  &::before {
    background: ${(props) => props.theme.background};
    content: "";
    width: 100%;
    height: 30vh;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: skewY(4deg);
  }
`;

function Footer() {
  return <StyledFooter></StyledFooter>;
}

export default Footer;
