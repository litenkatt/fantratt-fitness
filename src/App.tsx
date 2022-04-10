import React from "react";
import WordArt from "react-wordart";
import styled from "styled-components";
import Draggable from "./Components/Draggable";
import BroccBro from "./Components/BroccBro";

const StyledApp = styled.div`
  background: linear-gradient(
    180deg,
    rgba(120, 33, 68, 1) 0%,
    rgba(24, 0, 10, 1) 55%,
    rgba(255, 214, 230, 1) 100%
  );
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  return (
    <StyledApp className="App">
      <WordArt text="Fåntratt Fitness" theme={`italicOutline`} fontSize={100} />
      <BroccBro />
    </StyledApp>
  );
}

export default App;
