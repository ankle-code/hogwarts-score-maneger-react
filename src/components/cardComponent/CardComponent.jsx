import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Figure, CardContainer, CardWrapText } from "./style";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "250px",
    borderRadius: "10px",
    margin: "25px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    color: "white",
    "@media (min-width: 1700px)": {
      flexDirection: "row",
      flexBasis: "1",
    },
  },
  text: {
    fontWeight: "bold",
    fontSize: "20px",
    margin: "0 20px",
  },
  title: {
    fontSize: "35px",
    fontWeight: "700",
  },
}));

const CardComponent = ({ name, score, color, image }) => {
  const classes = useStyles();

  return (
    <CardContainer className={classes.root} color={color} score={score}>
      <Figure image={image} />
      <CardWrapText>
        <Typography className={(classes.text, classes.title)} component="h1">
          {name}
        </Typography>
        <Typography className={classes.text} component="p">
          Score:
          <Typography className={classes.text} component="h3">
            {score} Points
          </Typography>
        </Typography>
      </CardWrapText>
    </CardContainer>
  );
};

export default CardComponent;
