import styled from "styled-components";

export const AddWidgetStyled = styled.div`
  background: #f2f2f2;
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;
