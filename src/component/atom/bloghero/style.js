import { makeStyles } from "@material-ui/core";

import { orange } from "@material-ui/core/colors";

import { red } from "@material-ui/core/colors";


const useStyles = makeStyles((theme) => ({

  // first blog

    HeardeWraper: {
    width: "100%",
    minHeight: "80vh",
    height: "70vh",
    backgroundColor:  orange[600],
    

    },
    Headercontaier: {
        width: "85%",
        minHeight: "90vh",
        height: "auto",
        paddingLeft: "10%",
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        fontFamily: "roboto",
     
     
       
      },

      headerTitle: {
        fontSize: "3rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.up("xs")]: {
          fontSize: "2rem",
          fontWeight: "bold",
        },
    },
      headerDesc: {
        fontSize: "1.5rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.5rem",
          margin: theme.spacing(2, 0),
        },
    
    },
    blogimg: {
      position: "absolute",
      width: "25%",
      height: "40%",
      top: "60%",
      left: "75%",
      transform: "translate(-50%, -50%)",
      borderRadius: "50px",
      padding: "30px"

    },
    
    // seconand blog

    HeardeWrapersecond: {
    width: "100%",
    minHeight: "80vh",
    height: "70vh",
    backgroundColor:  red[400],

    },

    Headercontaiersecond: {
      width: "85%",
      minHeight: "90vh",
      height: "auto",
      paddingLeft: "10%",
      display: "flex",
      flexFlow: "column wrap",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "roboto",
      paddingTop: "-20%px",
   

    },
    headerTitlesecond: {
    
      fontSize: "3rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.up("xs")]: {
          fontSize: "2rem",
          fontWeight: "bold",
        },
    },

    
      //  third blog


    HeardeWraperthird: {
        width: "100%",
        minHeight: "80vh",
        height: "70vh",
        backgroundImage:'url(https://media.gettyimages.com/photos/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-picture-id1086352374?b=1&k=20&m=1086352374&s=170667a&w=0&h=f3Yxj15pQTQz4h-DLy6ysrKZGGhs7pjtlLB6XRgISeM=)' ,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        gridTemplateColumns: "200px auto max-content",
        

    },
    Headercontaierthird: {
        width: "85%",
        minHeight: "90vh",
        height: "auto",
        paddingLeft: "10%",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "roboto",
    

    },
    headerTitlethird: {
        fontSize: "3rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.up("xs")]: {
          fontSize: "3.5rem",
         fontFamily: "sans-serif",
         color: "white",
        },
    },

   
    headerDescthird: {
        fontSize: "1.5rem",
        margin: theme.spacing(1, 0),
        [theme.breakpoints.down("xs")]: {
          fontSize: "1.0rem",
          margin: theme.spacing(2, 0),
          
        },
    
        
    },

}));

export default useStyles