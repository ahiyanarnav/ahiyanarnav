import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LandingPageTitle from "../../atoms/LandingPageTitle";
import LandingSearchBar from "../../molecules/LandingSearchBar";

const useStyles = makeStyles({
  searchBar: {
    marginBottom: 50,
    display: "flex",
  },
  caption1: {
    paddingBottom: 40,
  },
});

const LandingPageContent = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" sx={{ fontWeight: 500 }} gutterBottom>
        Welcome to <br /> Ahiyan Arnav
      </Typography>
      <Typography className={classes.caption1} variant="subtitle1" gutterBottom>
        AhiyanArnav is a renowned mobile cum web app development company & the
        best IT Software Solutions provider based in India and Malaysia along
        with this we hold a experience of outsourcing technical resources for
        many software products and projects globally
      </Typography>
      <Grid sm={12} className={classes.searchBar}>
        <LandingSearchBar />
      </Grid>
      <Button size="large">What we do</Button>
    </>
  );
};

export default LandingPageContent;
