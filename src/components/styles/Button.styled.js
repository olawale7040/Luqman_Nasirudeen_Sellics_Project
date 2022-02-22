import styled from "styled-components";

export const Button = styled.button`
  border-radius: 3px;
  padding: 13px 18px;
  font-size: 14px;
  line-height: 100%;
  border: none;
  font-weight: 500;
  font-style: normal;
  cursor: pointer;
  background-color: ${({ bg }) => bg || "#0781f2"};
  color: ${({ color }) => color || "#fdfdfd"};
  width: ${({ width }) => width || ""};
  img {
    width: 30px;
    height: 30px;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
