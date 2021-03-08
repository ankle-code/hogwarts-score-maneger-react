import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import StudentsItem from "../studentsItem/StudentsItem";
import HatIcon from "../../images/HatIcon.png";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "94%",
    margin: "0 auto",
    borderRadius: "10px",
  },
  barContainer: {
    flexGrow: 1,
  },
  bar: {
    background: "linear-gradient(to left, #000000, #2f2f2f)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    listContainer: {
      width: "100%",
    },
  },
}));

const Students = () => {
  const classes = useStyles();

  const students = useSelector((state) => state.students);

  return (
    <Card className={classes.container}>
      <div className={classes.barContainer}>
        <AppBar className={classes.bar} position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Avatar src={HatIcon} />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Students
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List>
                {students.map(({ name, image, house }, key) => (
                  <StudentsItem name={name} image={image} house={house} />
                ))}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default Students;
