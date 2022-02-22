import styled from "styled-components";

export const Divider = styled.div`
  border-top: 1px solid #e4e5e7;
  margin: ${({ margin }) => margin || "0px"};
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-top: ${({ mt }) => mt || "0px"};
`;
