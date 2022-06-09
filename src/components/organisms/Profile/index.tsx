import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ORANGE } from "../../../Colors";
import { ProfileProps } from "../../../shared/types";

const useStyles = makeStyles({
  img: {
    width: "200px",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "2rem",
  },
});

const Profile: React.FC<ProfileProps> = ({
  name,
  designation,
  education,
  profilePic,
}) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      flexDirection="column"
      alignItems="center"
      width="250px"
      justifyContent="top"
      xs={6}
    >
      <img src={profilePic} alt="" className={classes.img} />
      <Typography
        variant="h5"
        color={ORANGE[500]}
        fontWeight={600}
        textAlign="center"
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        fontSize="1.2rem"
        color="white"
        textAlign="center"
      >
        {designation}
      </Typography>
      <Typography
        variant="body2"
        fontSize="1.2rem"
        color="white"
        marginBottom={5}
      >
        {education}
      </Typography>
    </Grid>
  );
};

export default Profile;
