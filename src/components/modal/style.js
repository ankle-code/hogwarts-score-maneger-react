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
  height: 400px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  align-items: center;
  flex-direction: row;
  background-color: #e4e4e4;
  padding: 5px 0 220px 0;
  display: flex;
  flex-direction: column;
`;

export const ModalTitle = styled(Typography)`
  font-size: 35px;
  padding: 20px;
  font-weight: 700;
  color: ${(props) => props.color};
`;

export const ModalAvatar = styled.img`
  border-radius: 10px;
  width: 160px;
  height: 230px;
`;

export const ModalIcon = styled(ModalAvatar)`
  width: 80px;
  height: 80px;
  margin-top: 10px;
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
  left: 145px;
  top: 8px;
  cursor: pointer;
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
`;

export const ModalBtn = styled(Button)`
  background-color: ${(props) => (props.isLosable ? "#f03737" : "#17e647")};
  color: white;
  padding: 10px 20px;
  margin: 10px 10px 35px 10px;
`;

export const ModalText = styled.p`
  margin: 0px;
`;
