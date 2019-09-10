import React from "react";
import styled, { css } from "styled-components";

const box = ({ children, size, backgroundImage = "", className = "" }) => (
  <div className={className}>{children}</div>
);

export default styled(box)`
  margin: 10px;
  width: 100%;
  height: 100%;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage});
      background-repeat: no-repeat;
      background-position: center;
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
