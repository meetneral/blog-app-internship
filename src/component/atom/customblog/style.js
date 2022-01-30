/*import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
   // backgroundColor: theme.palette.background.paper,
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
    //height: "100%",
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,

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
  }
}));
export default useStyles;*/
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(6),
    borderBottomRightRadius: theme.spacing(6),
    // NOTE: hover color also changing for active item
    backgroundColor: (prop) => (prop.isActive ? "#feefc3" : "#fff"),
    "&:hover": {
      backgroundColor: "#f1f3f4",
    },
    cursor: "pointer",
  },
  icon: {
    marginRight: theme.spacing(4),
  },
  card: {
    height:"100%",
  }
}));
export default useStyles;
