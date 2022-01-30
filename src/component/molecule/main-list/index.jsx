
import { Container, Divider, Grid } from "@material-ui/core";
import React from "react";
import Customblog from "../../atom/customblog";
import useStyles from "./style";
import CreateNote from "../createblog";


const Mainlist = ({ notes, setNotes, createNote, deleteNote }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <CreateNote createNote={createNote} setNotes={setNotes} />
      <br />
      <Divider />
      <br />

      <Grid container spacing={2}>
        
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} sm={6} md={4} lg={3}>
            <Customblog
             image={note.image}
              setNotes={setNotes}
              id={note.id}
              title={note.title}
              content={note.content}
             createdAt={note.createdAt}
             deleteNote={note.deleteNote}
            />
          </Grid>
        ))}
      </Grid>


    </Container>
  );
};

export default Mainlist;
