import { Button, Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LandingSearchBar from "../../molecules/LandingSearchBar";
import RepublicImage from "../../../assets/images/33_Republicday.jpg";
import LandingPageContent from "../../organisms/LandingPageContent";

const useStyles = makeStyles({
  root: {
    background: `url(${RepublicImage}), linear-gradient(to right, #000000,#434343)`,
    backgroundBlendMode: "multiply",
    height: "100vh",
    maxWidth: "100vw !important",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid lg={6} xl={5} >
        <LandingPageContent />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
