import React from 'react'
import useStyles  from "./style";
import { Box, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const BlogHero = () => {

  const classes = useStyles();
  return (
    <>
       {/* First Box */}
         <Box className={classes.HeardeWraper} id='Headder'>
         <Box className={classes.Headercontaier}>

         <Typography varinat='h3' component='h4' className={classes.headerTitle}>
          Choose the perfect <br />
          design <span style={{ paddingRight: "5px" }}></span>
        </Typography>

        <img src="https://www.acsp.org/resource/resmgr/images/Blog.jpg"
        alt="img1" className={classes.blogimg}
        />

        <Typography varinat='h3' component='h4' className={classes.headerDesc}>
             Create a beautiful blog that fits your style. Choose from a<br />
             selection of easy-to-use templates - all with flexible layouts <br/>
             and hundreds of background images- or design something <br/>
             new. 
        </Typography>

        </Box>
        </Box>
   
          {/* Seconand Box */}
       
        <Box className={classes.HeardeWrapersecond} id='Headder'>
         <Box className={classes.Headercontaiersecond}>

        <Typography varinat='h3' component='h4' className={classes.headerTitlesecond}>
        Get a free domain <span style={{ paddingRight: "5px" }}></span>
        </Typography>

        <Typography varinat='h3' component='h4' className={classes.headerDesc}>
        Give your blog the perfect home. Get a free blogspot.com<br />
        domain or buy a custom domain with just a few clicks.<br/>
        </Typography>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/W-channel.svg/125px-W-channel.svg.png"
         alt= "img2" 
        />
      </Box>
      </Box>

      {/* Third Box */}

        <Box className={classes.HeardeWraperthird} id='Headder'>
         <Box className={classes.Headercontaierthird}>

        <Typography varinat='h3' component='h4' className={classes.headerTitlethird}>
        Join millions of others  <span style={{ paddingRight: "5px" }}></span>
        </Typography>

        <Typography varinat='h3' component='h4' className={classes.headerDescthird}>
        <span style={{ paddingRight: "25px" }}></span> Whether sharing your expertise, breaking news, or<br/>
        <span style={{ paddingRight: "10px" }}></span> whatevers on your mind, youre in good company on <br/>
         Blogger. Sign up to discover why millions of people have <br/>
         <span style={{ paddingRight: "130px" }}></span>published their passions here.
          </Typography>

        <Button variant="contained" size="large" color="secondary" >
          Create Blog
        </Button>
        
         </Box>
        </Box>
    </>
  )
}

export default BlogHero

