import Illustration from "../../components/illustration/Illustration";
import {
  HomeContainer,
  HomeTextWrap,
  HomeTitle,
  HomeText,
  HomeButton,
} from "./style";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <HomeContainer>
      <Illustration />
      <HomeTextWrap>
        <HomeTitle>Quer organizar os pontos dos seus bruxos?</HomeTitle>
        <HomeText>
          Acha difícil controlar todos os pontos que são dados ou retirados
          pelos várias professores da sua escola de bruxaria?
        </HomeText>
        <HomeText>
          Com o Hogwarts Score Maneger, tudo isso se torna mais simples. Aqui
          você consegue saber em tempo real a pontuação de cada casa e sua
          colocações!
        </HomeText>
        <HomeButton onClick={() => history.push("/dashboard")}>
          Conhecer!
        </HomeButton>
        <HomeText highlight>
          "Oh!, Parece até Magia!" - desconhecido, Bruxo.
        </HomeText>
      </HomeTextWrap>
    </HomeContainer>
  );
};

export default Home;
