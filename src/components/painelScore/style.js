import styled from "styled-components";

export const PainelContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 90%;
  margin: 15px 10px;
  flex-direction: column-reverse;

  @media (min-width: 400px) {
    margin: 10px 35px;
  }

  @media (min-width: 850px) {
    margin: 10px auto;
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
`;
