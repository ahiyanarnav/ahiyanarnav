import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

interface LocateUsProps {
  image: string;
  address: string;
}

const useStyles = makeStyles({
  image: {
    height: 150,
    width: 116,
  },
});

const LocateUs: React.FC<LocateUsProps> = ({ image, address }) => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="top" width="20rem" marginBottom={2}>
      <Grid item xs={5}>
        <img src={image} alt="" className={classes.image} />
      </Grid>
      <Grid item xs={7}>
        <Typography variant="body1" color="white">
          {address}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default LocateUs;
