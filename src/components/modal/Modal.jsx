import {
  ModalContainer,
  ModalCard,
  ModalTitle,
  ModalAvatar,
  ModalIcon,
  ModalInput,
  ModalCloseBtn,
  ModalBtn,
  ModalWrap,
  ModalText,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../store/modules/showModal/actions";
import { gainPoints, losePoints } from "../../store/modules/houses/actions";
import { useState } from "react";

const Modal = () => {
  const isShowingModal = useSelector((state) => state.showModal);
  const selectedStudent = useSelector((state) => state.selectedStudent);
  const houses = useSelector((state) => state.houses);
  const selectedHouse = houses.find(
    (house) => house.name === selectedStudent.house
  ) || { color: "white" };

  const [points, setPoints] = useState(0);

  const dispatch = useDispatch();

  const clear = () => {
    setTimeout(closeModal, 2);
    setPoints(0);
  };

  const handlePoints = (e) => {
    const actualPoints = e.target.value;
    console.log(actualPoints);
    setPoints(actualPoints);
  };

  const closeModal = () => {
    dispatch(showModal(false));
  };

  const isWinning = () => {
    dispatch(gainPoints(points, selectedStudent.house));
    clear();
  };

  const isLosing = () => {
    dispatch(losePoints(points, selectedStudent.house));
    clear();
  };

  return (
    <ModalContainer showModal={isShowingModal}>
      <ModalCard color={selectedHouse.color}>
        <ModalCloseBtn onClick={closeModal} color="action" />
        <ModalIcon src={selectedHouse.image} />
        <ModalTitle color={selectedHouse.color}>
          {selectedStudent.name}
        </ModalTitle>
        <ModalAvatar src={selectedStudent.image} />
        <ModalText>Points:</ModalText>
        <ModalInput
          value={points}
          onChange={handlePoints}
          label="Points"
          type="number"
          placeholder="0"
          min="0"
        />
        <ModalWrap>
          <ModalBtn onClick={isWinning}>GAIN</ModalBtn>
          <ModalBtn isLosable onClick={isLosing}>
            LOSE
          </ModalBtn>
        </ModalWrap>
      </ModalCard>
    </ModalContainer>
  );
};

export default Modal;
