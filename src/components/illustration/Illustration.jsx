import { IllustrationContainer, IllustrationImage } from "./style";
import HogwartsIllustration from "../../images/hogwarts.png";

const Illustration = () => {
  return (
    <IllustrationContainer elevation="12">
      <IllustrationImage image={HogwartsIllustration} />
    </IllustrationContainer>
  );
};

export default Illustration;
