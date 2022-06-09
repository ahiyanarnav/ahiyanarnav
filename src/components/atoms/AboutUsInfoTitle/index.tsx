import { Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { LandingPageProps } from "../../../shared/types";
import { ORANGE } from "../../../Colors";

const useStyles = makeStyles({
  root: { width: "20rem", color: ORANGE[500], fontSize: "1.2rem !important" },
});

const AboutUsInfoTitle: React.FC<LandingPageProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography variant="body1" gutterBottom className={classes.root}>
      {text}
    </Typography>
  );
};

export default AboutUsInfoTitle;
