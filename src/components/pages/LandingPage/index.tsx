import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import RepublicImage from "../../../assets/images/33_Republicday.jpg";
import LandingPageContent from "../../organisms/LandingPageContent";
import LandingPageTitle from "../../atoms/LandingPageTitle";
import LandingPageNavbar from "../../molecules/LandingPageNavbar";

const useStyles = makeStyles({
  root: {
    background: `url(${RepublicImage}), linear-gradient(to right, #000000,#434343)`,
    backgroundBlendMode: "multiply",
    height: "100vh",
    maxWidth: "100vw !important",
    backgroundSize: "cover",
  },
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid container>
        <LandingPageNavbar />
      </Grid>
      <Grid xs={6} xl={5} margin="auto" marginTop="10%">
        <LandingPageTitle />
        <LandingPageContent />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
