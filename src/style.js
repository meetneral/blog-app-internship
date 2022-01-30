import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor:  theme.palette.background.paper,  

    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: "20px"
  },
  button: {
    marginTop: "40px"
  },
  cardGrid: {
    padding: "20px 8px"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" //16:9 ratio not a magic number
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0"
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
}));
