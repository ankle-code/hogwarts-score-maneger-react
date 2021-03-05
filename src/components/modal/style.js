import styled from "styled-components";
import { Card, Typography, Avatar, Button } from "@material-ui/core";
import CloseSharpIcon from "@material-ui/icons/CloseSharp";

export const ModalContainer = styled.div`
  box-sizing: border-box;
  width: calc(100vw - 15px);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.showModal ? "block" : "none")};
`;

export const ModalCard = styled(Card)`
  width: 400px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${(props) => `linear-gradient(to top, #d4cdcd, ${props.color})`};
`;

export const ModalTitle = styled(Typography)`
  font-size: 35px;
  padding: 20px;
  font-weight: 700;
  color: #eef2f3;
`;

export const ModalAvatar = styled(Avatar)`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

export const ModalIcon = styled(ModalAvatar)`
  width: 80px;
  height: 80px;
`;

export const ModalInput = styled.input`
  margin: 10px;
  padding: 10px 10px 10px 20px;
  font-size: 15px;
  font-weight: bold;
  outline: none;
  border-radius: 5px;
`;

export const ModalCloseBtn = styled(CloseSharpIcon)`
  width: 38px;
  height: 38px;
  position: relative;
  left: 175px;
  top: 8px;
  cursor: pointer;
`;

export const ModalWrap = styled.div`
  display: flex;
`;

export const ModalBtn = styled(Button)`
  background-color: ${(props) => (props.isLosable ? "#f03737" : "#17e647")};
  color: white;
  padding: 10px 20px;
  margin: 10px 10px 35px 10px;
`;

export const ModalText = styled.p`
  margin: 20px 0px 0px 0px;
`;
