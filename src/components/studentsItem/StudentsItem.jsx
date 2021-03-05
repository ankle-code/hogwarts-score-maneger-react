import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import api from "../../services/api";
import axios from "axios";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import { useSelector } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import { StudentIcon } from "./style";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modules/showModal/actions";
import { selectStudent } from "../../store/modules/selectedStudent/acitons";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "90vw",
  },
}));

const StudentsItem = ({ name, image, house }) => {
  const [secondary, setSecondary] = React.useState(false);
  const dispatch = useDispatch();

  const handleSelectStudent = () => {
    dispatch(showModal(true));
    dispatch(selectStudent({ name: name, image: image, house: house }));
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <StudentIcon image={image} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={secondary ? "Secondary text" : null}
      />
      <ListItemSecondaryAction onClick={handleSelectStudent}>
        <IconButton>
          <AddCircleIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default StudentsItem;
