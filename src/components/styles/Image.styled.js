import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "360px"};
  object-fit: cover;
  border-radius: 5px;
`;
