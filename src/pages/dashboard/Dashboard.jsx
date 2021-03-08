import PainelScore from "../../components/painelScore/PainelScore";
import Students from "../../components/studens/Students";
import { getStudentsThunk } from "../../store/modules/students/thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Modal from "../../components/modal/Modal";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentsThunk());
  }, []);

  return (
    <div>
      <PainelScore />
      <Students />
      <Modal />
    </div>
  );
};

export default Dashboard;
