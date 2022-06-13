import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { TabPropType } from "../../../shared/types";

const useStyles = makeStyles({
  image: {
    minWidth: "250px",
    width: "75%",
    height: "auto",
    border: "3px solid white",
  },
  title: {
    color: "white",
    borderBottom: "2px solid #fb6f0e",
    minWidth: 200,
    textAlign: "center",
    marginBottom: 20,
  },
  container: {
    backgroundColor: "black",
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    border: "0.5px solid #fb6f0e",
  },
});

const TabInfoCard: React.FC<TabPropType> = ({
  imageSide = "left",
  image,
  label,
  description,
}) => {
  const classes = useStyles();
  const leftImage = imageSide === "left";

  return (
    <Grid item container>
      <Grid item container justifyContent="center" xs={12}>
        <Typography variant="h3" className={classes.title}>
          {label}
        </Typography>
      </Grid>
      <Grid
        item
        container
        bgcolor="black"
        alignItems="center"
        padding={4}
        paddingRight={leftImage ? 4 : 0}
        flexDirection={leftImage ? "row" : "row-reverse"}
        className={classes.container}
      >
        <Grid item xs={5} paddingLeft={leftImage ? 0 : 4}>
          <img src={image} alt="" className={classes.image} />
        </Grid>
        <Grid item xs={7}>
          <Typography variant="body1" color="white">
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default TabInfoCard;
