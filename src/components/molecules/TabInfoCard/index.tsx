import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import IOT from "../../../assets/images/Info/Technologies/iot.png";

interface TabInfoCardProps {
  imageSide: "left" | "right";
}

const useStyles = makeStyles({
  image: {
    minWidth: "250px",
    width: "75%",
    height: "auto",
  },
});

const TabInfoCard: React.FC<TabInfoCardProps> = ({ imageSide }) => {
  const classes = useStyles();
  const description =
    "Interest In The Internet Of Things(IoT) market is rapidly expanding as companies across multiple vertical industries recognize the need for connectivity and the potential transformation enabled through connectivity.However, IoT adoption in key segments will be limited by its complexity.";
  const leftImage = imageSide === "left";
  const childComponent = (
    <Grid
      item
      container
      bgcolor="black"
      alignItems="center"
      padding={4}
      paddingRight={leftImage ? 4 : 0}
      flexDirection={leftImage ? "row" : "row-reverse"}
    >
      <Grid item xs={5} paddingLeft={leftImage ? 0 : 4}>
        <img src={IOT} alt="" className={classes.image} />
      </Grid>
      <Grid item xs={7}>
        <Typography variant="body1" color="white">
          {description}
        </Typography>
      </Grid>
    </Grid>
  );

  return childComponent;
};
export default TabInfoCard;
