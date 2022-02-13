import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    marginBottom: "1rem",
  },
});

const LandingPageTitle = () => {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.root}
        columnSpacing={{ xs: 2 }}
        alignItems="center"
      >
        <Grid item xs={1}>
          <hr color="orange" />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">Welcome to Ahiyan Arnav</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default LandingPageTitle;
