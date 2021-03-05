import GryffindorImage from "../../../images/Gryffindor.png";
import HufflepuffImage from "../../../images/Hufflepuff.png";
import RavenclowImage from "../../../images/Ravenclow.png";
import SlytherinImage from "../../../images/Slytherin.png";

const houses = [
  {
    name: "Slytherin",
    score: 0,
    color: "#112B00",
    image: SlytherinImage,
  },
  {
    name: "Ravenclaw",
    score: 0,
    color: "#002255",
    image: RavenclowImage,
  },
  {
    name: "Hufflepuff",
    score: 0,
    color: "#AA8800",
    image: HufflepuffImage,
  },
  {
    name: "Gryffindor",
    score: 0,
    color: "#501616",
    image: GryffindorImage,
  },
];

const housesReducer = (state = houses, action) => {
  switch (action.type) {
    case "GAIN_POINTS":
      const newHousesGain = state.map((house) => {
        if (house.name === action.house) {
          house.score += action.points;
        }
        return house;
      });
      return newHousesGain;

    case "LOSE_POINTS":
      const newHousesLose = state.map((house) => {
        if (house.name === action.house) {
          house.score -= action.points;
        }
        return house;
      });
      return newHousesLose;

    default:
      return state;
  }
};

export default housesReducer;
