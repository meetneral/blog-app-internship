import React from "react";
import {
  AppBar,
  Avatar,
 // InputBase,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
/*import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import DnsOutlinedIcon from "@material-ui/icons/DnsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";*/
import useStyles from "./style";
import { IconButton } from "@material-ui/core";
//import SearchIcon from "@material-ui/icons/Search";

const Header = ({ selectedSidebar, filterNotes, currentUser }) => {
  const classes = useStyles();

 /* const icons = [
    RefreshOutlinedIcon,
    DnsOutlinedIcon,
    SettingsOutlinedIcon,
    AppsOutlinedIcon,
  ];*/

 // const [search, setSearch] = useState("");

 // const onClick = () => {
  //  filterNotes(search);
  //};

  return (
    <AppBar position="relative" className={classes.container}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.leftSection}>
          <IconButton>
            <MenuOutlinedIcon className={classes.icon} />
          </IconButton>
          <Typography color="textSecondary" className={classes.title}>
           keep
          </Typography>
        </div>
        <Paper className={classes.middleSection}>
          
          
        </Paper>
        <div className={classes.rightSection}>
         
          <Tooltip title={currentUser.displayName}>
            <Avatar alt={currentUser.displayName} src={currentUser.photoURL} />
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
