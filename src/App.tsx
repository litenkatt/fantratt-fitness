import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
`;

const theme = {
  background: "#e4f000",
  darkBackground: "#444444",
};

const GlobalStyle = createGlobalStyle`
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <Main />
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
