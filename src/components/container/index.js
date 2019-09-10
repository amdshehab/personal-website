import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default ({ children }) => <Container>{children}</Container>;
