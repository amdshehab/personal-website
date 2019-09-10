import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  margin: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    `}
  ${({ size }) =>
    size === "large"
      ? css`
          max-width: 500px;
          max-height: 500px;
        `
      : size === "medium"
      ? css`
          max-width: 300px;
          max-height: 300px;
        `
      : css`
          max-width: 100px;
          max-height: 100px;
        `}
`;

export default ({ children, size = "medium", backgroundImage = "" }) => (
  <Box size={size} backgroundImage={backgroundImage}>
    {children}
  </Box>
);
