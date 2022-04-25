import React from "react";
import styled from "styled-components";
import BroccBro from "./BroccBro";

const StyledMain = styled.div`
  background: black; //${(props) => props.theme.background};
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
