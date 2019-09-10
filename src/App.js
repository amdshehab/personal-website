import React from "react";
import "./App.css";
import logo from "./programming.png";
import Container from "./components/container";
import Box from "./components/box";
import Content from "./components/content";

function App() {
  return (
    <div className="App">
      <Container>
        <Box size="large">
          <Content size="large">Architecture</Content>
        </Box>
        <Box size="large" backgroundImage={logo}>
          <div></div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
