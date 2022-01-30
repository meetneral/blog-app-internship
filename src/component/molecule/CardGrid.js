import { Container, Grid } from "@material-ui/core";
import { useStyles } from "../../style";
import SingleCard from "./SingleCard";

export default function CardGrid({ childCards, setShowBigcard }) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {childCards.map((item) => (
          <Grid key={item} item xs={12} sm={6} md={4}>
            <SingleCard setShowBigcard={setShowBigcard} item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
