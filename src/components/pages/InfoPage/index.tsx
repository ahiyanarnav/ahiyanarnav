import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import technologyTabsData from "../../../shared/data/tabsData";
import { TECHNOLOGY_INFO } from "../../../shared/routes";
import InfoNavbar from "../../molecules/InfoNavbar";
import InfoNavLinkComp from "../../organisms/InfoComp/InfoNavLinkComp";

const useStyles = makeStyles({
  infoNavbar: { position: "fixed", width: "100%" },
  root: { minHeight: "100vh", backgroundColor: "#111111", width: "100%" },
});

const InfoPage = () => {
  const location = useLocation();
  const tab = useState(location.pathname)[0];
  const classes = useStyles();
  return (
    <Grid container xs={12}>
      <Grid item xs={12} className={classes.infoNavbar}>
        <InfoNavbar />
      </Grid>
      <Grid item className={classes.root}>
        <Grid item paddingTop={10} container alignItems="start">
          {tab === TECHNOLOGY_INFO && (
            <InfoNavLinkComp
              title="Technologies"
              tabsData={technologyTabsData}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default InfoPage;
