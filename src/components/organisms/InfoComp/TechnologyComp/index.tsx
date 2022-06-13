import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import technologyTabsData from "../../../../shared/data/tabsData";
import { TabPropType } from "../../../../shared/types";
import TabsList from "../../../molecules/TabsList";

const TechnologyComp = () => {
  const tabs: TabPropType[] = technologyTabsData;
  const [currentTab, setCurrentTab] = useState(tabs[0].key);

  const onHandleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <Grid item xs={12} container justifyContent="center" height={56}>
        <Typography variant="h3">Technologies</Typography>
      </Grid>
      <Grid xs={12} margin={10}>
        <TabsList
          tabsData={tabs}
          currentTab={currentTab}
          onHandleTabChange={onHandleTabChange}
        />
      </Grid>
    </>
  );
};

export default TechnologyComp;
