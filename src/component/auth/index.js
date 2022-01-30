import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const Auth = ({ handleSignIn }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <img
          src="https://th.bing.com/th/id/R.fdd753b788699c52a6eb11121c287a6f?rik=a4haD%2fdfY8H7sw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_549558.png&ehk=d%2f2v2OCqENtVJnCgr5Mqhh4GAbSmb%2f943mhBY%2fqH1Dc%3d&risl=&pid=ImgRaw&r=0"
          height="100px"
          alt="google-keep"
        />
        <Typography gutterBottom variant="h4" className={classes.title}>
         Blog Site
        </Typography>
        <Button onClick={handleSignIn} variant="contained" color="primary">
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default Auth;

/* https://cdn.worldvectorlogo.com/logos/google-keep.svg*/