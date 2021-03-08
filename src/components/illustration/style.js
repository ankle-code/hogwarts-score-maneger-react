import styled from "styled-components";
import { Paper } from "@material-ui/core";

export const IllustrationContainer = styled(Paper)`
  min-width: 40%;
  max-height: 80%;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;

  @media (min-width: 1290px) {
    display: flex;
  }
`;

export const IllustrationImage = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  width: 97%;
  height: 97%;
  border-radius: 10px;
`;
