import styled, { css } from "styled-components";

const baseInputStyles = css`
  top: 17px;
  position: absolute;
  z-index: 100;
`;
export const BackSliderButton = styled.div`
  ${baseInputStyles}
  left: -19px;
`;

export const NextSliderButton = styled.div`
  ${baseInputStyles}
  right: -6px;
`;
