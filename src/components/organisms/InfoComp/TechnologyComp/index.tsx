import { Grid, Typography } from "@mui/material";
import technologyTabsData from "../../../../shared/data/tabsData";
import { TabPropType } from "../../../../shared/types";
import TabsList from "../../../molecules/TabsList";

const TechnologyComp = () => {
  const tabs: TabPropType[] = technologyTabsData;
  return (
    <>
      <Grid item xs={12} container justifyContent="center" height={56}>
        <Typography variant="h3">Technologies</Typography>
      </Grid>
      <Grid xs={12} margin={10}>
        <TabsList tabsData={tabs} />
      </Grid>
    </>
  );
};

export default TechnologyComp;
