import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 90px;

  @media (min-width: 1290px) {
    flex-direction: row;
  }
`;

export const HomeTextWrap = styled.div`
  padding: 0 5px;
  height: 100%;
  @media (min-width: 700px) {
    padding: 0 20px;
  }
`;

export const HomeTitle = styled(Typography)`
  color: #2f2f2f;
  font-size: 30px;

  @media (min-width: 700px) {
    font-size: 45px;
  }
`;

export const HomeText = styled.p`
  color: ${(props) => (props.highlight ? "#fa9256" : "#757575")};
  font-weight: 100;
  font-size: 16px;
  margin: 50px;

  @media (min-width: 700px) {
    font-size: 25px;
  }
`;

export const HomeButton = styled.button`
  background-color: blue;
  color: #fff;
  padding: 18px 60px;
  font-weight: bold;
  font-size: 18px;
  outline: none;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  background-color: #034366;
  transition: 800ms;

  @media (min-width: 700px) {
    padding: 22px 80px;
  }

  &:hover {
    background-color: #099beb;
  }
`;
