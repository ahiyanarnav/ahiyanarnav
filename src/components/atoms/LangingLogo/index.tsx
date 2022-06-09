import { Grid } from "@mui/material";
import Logo from "../../../assets/images/logo-main.png";

const LandingLogo = () => (
  <Grid item sm={4} container justifyContent="center" marginTop={2}>
    <img src={Logo} width={160} alt="" />
  </Grid>
);
export default LandingLogo;
