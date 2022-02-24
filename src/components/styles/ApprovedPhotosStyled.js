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
    button {
      background: black;
      border: solid 4px white;
      height: 20px;
    }
    & > div {
      & > div {
        border: solid 2px red;
        position: ${(props) => (props["data-arrow"] ? "absolute" : "")};
        top: ${(props) => (props["data-arrow"] ? "16px" : "")};
      }
    }
    img {
      margin-right: 8px;
    }
  }
`;
