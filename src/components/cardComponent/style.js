import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const Figure = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 150px;
  min-height: 150px;
`;

export const CardContainer = styled(Card)`
  background-color: ${(props) => props.color};
  padding-bottom: 15px;
  order: ${(props) => props.score};
`;

export const CardWrapText = styled.div``;
