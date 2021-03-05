import CardComponent from "../cardComponent/CardComponent";
import { PainelContainer } from "./style";
import { useSelector } from "react-redux";

const PainelScore = () => {
  const houses = useSelector((state) => state.houses);

  return (
    <PainelContainer>
      {houses.map(({ name, score, color, image }, key) => (
        <CardComponent
          key={key}
          name={name}
          score={score}
          color={color}
          image={image}
        />
      ))}
    </PainelContainer>
  );
};

export default PainelScore;
