import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LandingPageTitle from "../../atoms/LandingPageTitle";
import StartAConvo from "../../molecules/AboutUs/StartAConvo";
import AboutUsNavbar from "../../molecules/AboutUsNavbar";
import AboutUsContent from "../../organisms/AboutUsContent";
import FindUsComp from "../../organisms/AboutUsContent/FindUsComp";
import LocateUsComp from "../../organisms/AboutUsContent/LocateUsComp";

const useStyles = makeStyles({
  root: {
    background: "#111111",
    backgroundBlendMode: "multiply",
    height: "auto",
    minHeight: "100vh",
    maxWidth: "100vw !important",
    backgroundSize: "cover",
  },
  aboutUsContent: {
    paddingLeft: "15%",
    paddingRight: "15%",
  },
});

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid container>
        <AboutUsNavbar />
      </Grid>
      <Grid
        item
        container
        xs={12}
        spacing={2}
        className={classes.aboutUsContent}
      >
        <Grid item container xs={9} xl={7}>
          <LandingPageTitle />
          <AboutUsContent />
        </Grid>
        <Grid
          item
          container
          xs={3}
          xl={5}
          justifyContent="top"
          alignItems="end"
          flexDirection="column"
        >
          <StartAConvo />
          <LocateUsComp />
          <FindUsComp />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
