import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AboutUsNavbar from "../../molecules/AboutUsNavbar";

const useStyles = makeStyles({
  root: {
    background: "#111111",
    backgroundBlendMode: "multiply",
    height: "100vh",
    maxWidth: "100vw !important",
    backgroundSize: "cover",
  },
});

const AboutUs = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid container>
        <AboutUsNavbar />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
