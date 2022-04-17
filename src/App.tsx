import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

const StyledApp = styled.div`
  background: linear-gradient(
    180deg,
    rgba(120, 33, 68, 1) 0%,
    rgba(24, 0, 10, 1) 55%,
    rgba(255, 214, 230, 1) 100%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const theme = {
  background: "#ffff57",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
