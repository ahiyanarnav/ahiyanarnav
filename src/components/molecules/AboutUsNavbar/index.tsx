/* eslint-disable @typescript-eslint/no-unused-vars */
import { Grid, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../../shared/routes";
import LandingLogo from "../../atoms/LangingLogo";

const AboutUsNavbar = () => {
  const navigate = useNavigate();

  const onCloseClick = () => {
    navigate(HOME);
  };
  return (
    <>
      <Grid item sm={8} padding={3} paddingLeft={8}>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          disableRipple
          onClick={onCloseClick}
        >
          <Close />
          <Typography variant="subtitle2" color="primary">
            Close
          </Typography>
        </IconButton>
      </Grid>
      <LandingLogo />
    </>
  );
};

export default AboutUsNavbar;
