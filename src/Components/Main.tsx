import React from "react";
import styled from "styled-components";
import BroccBro from "./BroccBro";
import zoombrocc from "../res/images/zoombrocc.png";

const StyledMain = styled.div`
  background: ${(props) => props.theme.darkBackground};
  width: 100vw;
  height: 100vh;
`;

function Main() {
  return (
    <StyledMain>
      <BroccBro />
    </StyledMain>
  );
}

export default Main;
