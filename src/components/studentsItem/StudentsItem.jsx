import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { StudentIcon } from "./style";
import { useDispatch } from "react-redux";
import { showModal } from "../../store/modules/showModal/actions";
import { selectStudent } from "../../store/modules/selectedStudent/acitons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "90vw",
  },
}));

const StudentsItem = ({ name, image, house }) => {
  const [secondary, setSecondary] = useState(false);
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
