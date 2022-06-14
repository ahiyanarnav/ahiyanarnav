import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { LandingPageProps } from "../../../shared/types";

const useStyles = makeStyles({
  root: {
    marginBottom: "1rem",
  },
});

const LandingPageTitle: React.FC<LandingPageProps> = ({ text }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      columnSpacing={{ xs: 2 }}
      alignItems="center"
    >
      <Grid
        item
        container
        justifyContent={text ? "start" : "center"}
        xs={text ? 1 : 6}
      >
        <hr style={{ width: "50%" }} color="#fb6f0e" />
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h6">{text}</Typography>
      </Grid>
    </Grid>
  );
};
export default LandingPageTitle;
