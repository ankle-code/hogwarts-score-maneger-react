import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Logo from "../../images/logoHP.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "95%",
    margin: "0 auto",
    transform: "translate(0,10px)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img className={classes.logo} src={Logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hogwarts Score Maneger
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Dashboard</Button>
          <Button
            color="inherit"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            Houses
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Gryffindor</MenuItem>
            <MenuItem onClick={handleClose}>Hufflepuff</MenuItem>
            <MenuItem onClick={handleClose}>Ravenclow</MenuItem>
            <MenuItem onClick={handleClose}>Slytherin</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuComponent;
