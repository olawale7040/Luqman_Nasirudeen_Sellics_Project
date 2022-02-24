import styled from "styled-components";

export const Container = styled.div`
  display: ${({ display }) => display || ""};
  justify-content: ${({ justifyContent }) => justifyContent || ""};
  margin: ${({ margin }) => margin || "0px"};
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-top: ${({ mt }) => mt || "0px"};
  align-items: ${({ alignItems }) => alignItems || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
`;

// Main styled
export const Main = styled.main`
  width: 700px;
  padding: 24px;
`;

// Divider styled
export const Divider = styled.div`
  border-top: 1px solid #e4e5e7;
  margin: ${({ margin }) => margin || "0px"};
  margin-bottom: ${({ mb }) => mb || "0px"};
  margin-top: ${({ mt }) => mt || "0px"};
`;
