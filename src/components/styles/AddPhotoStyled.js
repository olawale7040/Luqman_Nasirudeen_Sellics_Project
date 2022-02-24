import styled from "styled-components";

export const AddPhotoStyled = styled.div`
  background: #f2f2f2;
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;
