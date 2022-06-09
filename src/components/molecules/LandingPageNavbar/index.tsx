import { Grid, IconButton, Typography } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { ABOUT_US } from "../../../shared/routes";
import LandingLogo from "../../atoms/LangingLogo";

const LandingPageNavbar = () => {
  const navigate = useNavigate();

  const onMoreInfoClick = () => {
    navigate(ABOUT_US);
  };

  return (
    <>
      <Grid item sm={8} padding={3} paddingLeft={8}>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          disableRipple
          onClick={onMoreInfoClick}
        >
          <MenuOpen />
          <Typography variant="subtitle2" color="primary">
            MORE INFO
          </Typography>
        </IconButton>
      </Grid>
      <LandingLogo />
    </>
  );
};

export default LandingPageNavbar;
