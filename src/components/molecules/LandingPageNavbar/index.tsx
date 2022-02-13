import { Grid, IconButton, Typography } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
import Logo from "../../../assets/images/logo-main.png";

const LandingPageNavbar = () => (
    <>
      <Grid item sm={8} padding={3} paddingLeft={8}>
        <IconButton size="large" edge="start" color="primary" disableRipple>
          <MenuOpen />
          <Typography variant="subtitle2" color="primary">
            MORE INFO
          </Typography>
        </IconButton>
      </Grid>
      <Grid item sm={4}>
        <img src={Logo} width={160} alt="" />
      </Grid>
    </>
  );

export default LandingPageNavbar;
