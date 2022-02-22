import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  position: fixed !important;
  z-index: 1000;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  flex-grow: 1;
  padding: 20px;

  & > div {
    color: #0781f2;
    font-weight: bold;
    font-size: 17px;
    text-transform: uppercase;
  }
`;
