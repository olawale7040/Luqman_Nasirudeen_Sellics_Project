import styled from "styled-components";

export const ApprovedPhotosStyled = styled.div`
  padding: 12px 0px 24px 0px;
  text-align: left;

  & > div {
    color: #0781f2;
    font-weight: bold;
    font-size: 17px;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  & > section {
    gap: 8px;
    & > div {
      position: relative;
    }

    img {
      margin-right: 8px;
    }
  }
`;
