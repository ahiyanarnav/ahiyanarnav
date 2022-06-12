import { Grid } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TECHNOLOGY_INFO } from "../../../shared/routes";
import InfoNavbar from "../../molecules/InfoNavbar";
import TechnologyComp from "../../organisms/InfoComp/TechnologyComp";

const InfoPage = () => {
  const location = useLocation();
  const tab = useState(location.pathname)[0];
  return (
    <Grid container xs={12}>
      <InfoNavbar />
      <Grid minHeight="95vh" bgcolor="#111111" width="100%">
        <Grid item paddingTop={10} container alignItems="start">
          {tab === TECHNOLOGY_INFO && <TechnologyComp />}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default InfoPage;
