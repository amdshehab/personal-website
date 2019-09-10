import React from "react";
import "./App.css";

import Container from "./components/container";
import Box from "./components/box";

function App() {
  return (
    <div className="App">
      <Container>
        <div>hello</div>
        <Box size="small">
          <div>world</div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
