import styled from "styled-components";

export const Button = styled.button`
  border-radius: 3px;
  padding: 16px 20px;
  font-size: 14px;
  line-height: 100%;
  border: none;
  font-weight: 500;
  font-style: normal;
  background-color: ${({ bg }) => bg || "#0781f2"};
  color: ${({ color }) => color || "#fdfdfd"};
`;
