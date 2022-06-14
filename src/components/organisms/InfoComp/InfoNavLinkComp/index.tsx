import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { TabPropType } from "../../../../shared/types";
import TabInfoCard from "../../../molecules/TabInfoCard";
import TabsList from "../../../molecules/TabsList";

interface InfoNavLinkProps {
  title: string;
  tabsData: TabPropType[];
}

const InfoNavLinkComp: React.FC<InfoNavLinkProps> = ({ tabsData, title }) => {
  const tabs: TabPropType[] = tabsData;
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  const onHandleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    const newTab = tabs.find((tab) => tab.key === newValue);

    setCurrentTab((prevTab) => newTab || prevTab);
  };

  return (
    <>
      <Grid item xs={12} container justifyContent="center" height={56}>
        <Typography variant="h3">{title}</Typography>
      </Grid>
      <Grid item xs={12} margin={5}>
        <TabsList
          tabsData={tabs}
          currentTab={currentTab}
          onHandleTabChange={onHandleTabChange}
        />
      </Grid>
      <TabInfoCard
        key={currentTab.key}
        description={currentTab.description}
        image={currentTab.image}
        label={currentTab.label}
        imageSide={currentTab.imageSide}
      />
    </>
  );
};

export default InfoNavLinkComp;
