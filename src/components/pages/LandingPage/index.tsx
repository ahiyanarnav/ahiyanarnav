import { Button, Typography, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LandingSearchBar from "../../molecules/LandingSearchBar";
import RepublicImage from "../../../assets/images/33_Republicday.jpg";

const useStyles = makeStyles({
  root: {
    background: `url(${RepublicImage})`,
    height: "100vh",
    maxWidth: "100vw !important",
    backgroundSize: "cover",
  },
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} fixed maxWidth="xl">
      <Typography variant="h4">Welcome to the Ahiyan Arnav</Typography>
      <LandingSearchBar />
    </Container>
  );
};

export default LandingPage;
