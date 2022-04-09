import React from "react";
import fflogo from "./res/images/fflogo.svg";
import "./App.css";
import WordArt from "react-wordart";
import styled from "styled-components";
import Draggable from "./Components/Draggable";

const StyledApp = styled.div`
  background: linear-gradient(
    180deg,
    rgba(120, 33, 68, 1) 0%,
    rgba(24, 0, 10, 1) 55%,
    rgba(255, 214, 230, 1) 100%
  );
  height: 100vh;
`;

function App() {
  return (
    <StyledApp className="App">
      <WordArt text="Fåntratt Fitness" theme={`italicOutline`} fontSize={100} />
      <Draggable>
        <img src={fflogo} className="App-logo" alt="logo" />
      </Draggable>
    </StyledApp>
  );
}

export default App;
