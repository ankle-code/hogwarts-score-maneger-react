import styled from "styled-components";

export const StudentIcon = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 1px;
  width: 100%;
  height: 100%;
`;
