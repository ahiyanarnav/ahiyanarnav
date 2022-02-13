import { Button, Grid, TextField } from "@mui/material";
import { useGlobalStyles } from "../../../globalStyles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  input: {
    "&::placeholder": {
      color: "white",
    },
  },
});

const LandingSearchBar = () => {
  const globalClasses = useGlobalStyles();
  return (
    <>
      <Grid sm={5}>
        <TextField placeholder="Email Address" size="small" focused fullWidth />
      </Grid>
      <Grid sm={6}>
        <Button size="large" className={globalClasses.square} disableElevation>
          Notify Me
        </Button>
      </Grid>
    </>
  );
};

export default LandingSearchBar;
