//import React from 'react';
    //import { makeStyles } from '@material-ui/core/styles';
    /*import clsx from 'clsx';
    import Card from '@material-ui/core/Card';
    import CardHeader from '@material-ui/core/CardHeader';
    import CardMedia from '@material-ui/core/CardMedia';
    import CardContent from '@material-ui/core/CardContent';
    import CardActions from '@material-ui/core/CardActions';
    import Collapse from '@material-ui/core/Collapse';
    import Avatar from '@material-ui/core/Avatar';
    import IconButton from '@material-ui/core/IconButton';
    import Typography from '@material-ui/core/Typography';
    import { red } from '@material-ui/core/colors';
    import FavoriteIcon from '@material-ui/icons/Favorite';
    import ShareIcon from '@material-ui/icons/Share';
    import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
    const Cdata = [
    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 400,
        },
        card_img: {
          height:0,
          paddingTop: '56.25%', 
        },
        expand: {
          transform: 'rotate(0deg)',
          marginLeft: 'auto',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
          }),
        },
        expandOpen: {
          transform: 'rotate(180deg)',
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));
       
    export default function Customblog(props) {
        // console.log(props);
         const classes = useStyles();
         const [expanded, setExpanded] = React.useState(false);
       
         const handleExpandClick = () => {
           setExpanded(!expanded);
         };

         


    return (
         <Card  variant="outlined"  className={classes.root}>
          
          <CardMedia  className={classes.card_img}
            
             image="`https://source.unsplash.com/random"
            title="Paella dish"
           // height="200px"
          />
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            
           subheader="meet"
            title="12/3/21"
          />
          <CardContent><Typography variant="primary"> MY FIRST BLOG:</Typography></CardContent>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
           
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            > <Typography>Read more</Typography>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                again without stirring, until mussels have opened and rice is just tender, 5 to 7
                minutes more. (Discard any mussels that don’t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      );
    
            }
        ]
    export default Cdata;*/
    /*const Cdata =[
   {     
imgsrc:"https://wallpapertops.com/walldb/original/d/7/9/126530.jpg",
Date:"16/06/21",
username:"luffy",
title:"my first blog",

},
{imgsrc:"https://wallpapertag.com/wallpaper/full/2/f/e/519365-large-japanese-scenery-wallpaper-2048x1401.jpg",

Date:"16/06/21",
username:"zoro",
title:"my second blog",},
{imgsrc:"https://th.bing.com/th/id/OIP.JDa_1X-NqdM1K-bZxp99DQHaEo?pid=ImgDet&rs=1",
Date:"12/3/04",
username:"USOPP",
title:"my third blog",
},
{imgsrc:"https://wallup.net/wp-content/uploads/2019/09/349130-scenery-sunrises-and-sunsets-camomiles-sky-forests-flight-clouds-grass-nature-1.jpg",
Date:"16/5/98",
username:"SANJI",
title:"MY FOURTH BLOG",
},
{imgsrc:"https://www.goodfreephotos.com/albums/united-states/colorado/other-colorado/other-colorado-mountain-scenery.jpg",
Date:"2/5/12",
username:"NAMI",
title:"MY FIFTH BLOG",
},
{imgsrc:"https://wallup.net/wp-content/uploads/2019/09/991486-croatia-scenery-summer-lake-sky-grass-bench-trees-bobovica-zagreb-nature.jpg",
Date:"5/6/05",
username:"BROOKS",
title:"MY SIXTH BLOG",
},
{imgsrc:"https://th.bing.com/th/id/OIP.N6zkWSIQKgvQxWw9N0fF2AHaE8?pid=ImgDet&rs=1",
Date:"9/12/88",
username:"CHOPPER",
title:"MY SEVENTH BLOG",
},

    ];

    export default Cdata;*/

    export const notes = [
      {
        id: 1,
        title: "Note 1",
        body: "This is note 1",
        createdAt: "04/12/2021",
        image: "https://wallpapertops.com/walldb/original/d/7/9/126530.jpg"
      },
      {
        id: 2,
        title: "Note 2",
        body: "This is note 2",
        createdAt: "04/12/2021",
        image:"https://wallpapertops.com/walldb/original/d/7/9/126530.jpg"

      },
      {
        id: 3,
        title: "Note 3",
        body: "This is note 3",
        createdAt: "04/12/2021",
        image: "https://wallpapertops.com/walldb/original/d/7/9/126530.jpg"
      },
      {
        id: 4,
        title: "Note 4",
        body: "This is note 4",
        createdAt: "04/12/2021",
        image: "https://wallpapertops.com/walldb/original/d/7/9/126530.jpg"
      },
      {
        id: 5,
        title: "Note 5",
        body: "This is note 5",
        createdAt: "04/12/2021",
        image: "https://wallpapertops.com/walldb/original/d/7/9/126530.jpg"
      },
    ];
    
