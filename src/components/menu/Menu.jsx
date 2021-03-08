import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../../images/logoHP.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
    margin: "10px auto",
    transform: "translate(0,10px)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    "@media (min-width: 550px)": {
      display: "block",
    },
  },
  logo: {
    width: "54px",
  },
  bar: {
    background: "linear-gradient(to left, #000000, #2f2f2f)",
    borderRadius: "10px",
    padding: "5px",
  },
}));

const MenuComponent = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <img className={classes.logo} src={Logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hogwarts Score Maneger
          </Typography>
          <Button color="inherit" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => history.push("/dashboard")}>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuComponent;
