import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ProcessCardProps } from "../../../shared/types";

const useStyles = makeStyles({
  container: {
    background: "black",
    border: "2px solid #fb6f0e",
    borderRadius: 15,
    padding: 30,
    margin: "2rem 1rem",
    flexDirection: "column",
    alignItems: "space-between",
    justContent: "space-around",
    maxWidth: 400,
  },
  image: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

const ProcessCard: React.FC<ProcessCardProps> = ({
  title,
  description,
  image,
}) => {
  const classes = useStyles();
  return (
    <Grid container lg={3} md={5} className={classes.container}>
      <Grid item container justifyContent="center">
        <img src={image} alt="" className={classes.image} />
      </Grid>
      <Grid xs={12} item marginBottom={2.5}>
        <Typography
          variant="h5"
          color="white"
          fontWeight={700}
          textAlign="center"
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" color="white" textAlign="center">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default ProcessCard;
