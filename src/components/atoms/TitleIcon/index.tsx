import { Button, Grid } from "@mui/material";
import React, { ReactNode } from "react";

interface TitleIconProps {
  text: string;
  icon: ReactNode;
}

const TitleIcon: React.FC<TitleIconProps> = ({ text, icon }) => (
  <Grid item container xs={6}>
    <Button variant="text" startIcon={icon} sx={{ color: "white" }}>
      {text}
    </Button>
  </Grid>
);
export default TitleIcon;
