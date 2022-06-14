import { Grid, Typography } from "@mui/material";
import React from "react";

const InfoTitle: React.FC<{ title: string }> = ({ title }) => (
  <Grid item xs={12} container justifyContent="center" height={56}>
    <Typography variant="h3">{title}</Typography>
  </Grid>
);
export default InfoTitle;
