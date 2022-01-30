
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
 // CardMedia
} from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const Customblog= ({

  title,
  content,
  createdAt,
  deleteNote,
  id,
  setNotes,
 
  image,

}) => {
  const classes = useStyles();

 const handleDelete = () => {
    deleteNote(id);
//    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  return (
    <Card className={classes.root}>
      
      <CardContent>
        <Typography variant="h5" component="h2">
         
          {image}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {createdAt}
        </Typography>
        <Typography variant="h5" component="h2">
        { title}
       
        </Typography>

        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} size="small">
         deleteNote</Button>
      </CardActions>
    </Card>
  );
};

export default Customblog;
