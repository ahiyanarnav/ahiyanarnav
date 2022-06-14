import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  PRODUCTS_TABS_DATA,
  SERVICES_TABS_DATA,
  TECHNOLOGY_TABS_DATA,
} from "../../../shared/data/tabsData";
import {
  TECHNOLOGY_INFO,
  SERVICES_INFO,
  PRODUCTS_INFO,
  CLIENTS_INFO,
} from "../../../shared/routes";
import InfoNavbar from "../../molecules/InfoNavbar";
import InfoNavLinkComp from "../../organisms/InfoComp/InfoNavLinkComp";
import OurClients from "../../organisms/InfoComp/OurClients";

const useStyles = makeStyles({
  infoNavbar: { position: "fixed", width: "100%" },
  root: { minHeight: "100vh", backgroundColor: "#111111", width: "100%" },
});

const InfoPage = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(location.pathname);
  }, [location]);

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
              tabsData={TECHNOLOGY_TABS_DATA}
            />
          )}
          {tab === SERVICES_INFO && (
            <InfoNavLinkComp title="Services" tabsData={SERVICES_TABS_DATA} />
          )}
          {tab === PRODUCTS_INFO && (
            <InfoNavLinkComp title="Products" tabsData={PRODUCTS_TABS_DATA} />
          )}
          {tab === CLIENTS_INFO && <OurClients />}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default InfoPage;
