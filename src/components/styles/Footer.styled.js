import styled from "styled-components";

export const FooterStyled = styled.div`
  display: flex;
  justify-content: space-around;

  & > div {
    line-height: 130%;
    color: #000000;
    font-size: 17px;
    width: 300px;
    margin-top: 12px;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;
