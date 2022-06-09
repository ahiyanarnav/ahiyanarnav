import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProfileComp from "./ProfileComp";

const useStyles = makeStyles({
  searchBar: {
    marginBottom: 50,
    display: "flex",
  },
  caption1: {
    paddingBottom: 40,
  },
  orangeLine: { width: "50%", height: "1.3px" },
});
const AboutUsContent = () => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h2" sx={{ fontWeight: 500 }} gutterBottom>
        We are Ahiyan Arnav.
        <br />
        We make awesome stuff.
      </Typography>
      <Typography className={classes.caption1} variant="subtitle1" gutterBottom>
        Our Services include a series of activities that help you achieve your
        goals for various channels like paid, earned, and owned media. Depending
        on your business goals, your strategies might vary. We build strategies
        based on seven core capabilities, which are a strategic approach,
        performance improvement process, management buy-in, resourcing and
        structure, data and infrastructure, integrated customer communications,
        and customer experience.
      </Typography>
      <Grid item container justifyContent="center" xs={6}>
        <hr className={classes.orangeLine} color="orange" />
      </Grid>
      <ProfileComp />
    </>
  );
};

export default AboutUsContent;
