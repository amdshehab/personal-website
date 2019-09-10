import React from "react";
import styled from "styled-components";

const Content = styled.p`
  font-weight: bold;
  font-size: ${({ size }) =>
    size === "small" ? "0.7em" : size === "medium" ? "1em" : "2em"};
`;

export default ({ size, children }) => (
  <Content size={size}>{children}</Content>
);
