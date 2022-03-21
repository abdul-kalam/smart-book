import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bgColors.primary};
`;

