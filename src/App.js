import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Container from "./components/container";
import Box from "./components/box";

function App() {
  return (
    <div className="App">
      <Container>
        <div>hello</div>
        <Box size="large" backgroundImage={logo}>
          <div></div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
