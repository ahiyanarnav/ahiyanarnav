/* eslint-disable react/prop-types */
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { TabPropType } from "../../../shared/types";

interface TabListsProps {
  tabsData: TabPropType[];
}

const TabsList: React.FC<TabListsProps> = ({ tabsData }) => {
  const [currentTab, setCurrentTab] = useState(tabsData[0].key);

  const onHandleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };
  return (
    <Tabs value={currentTab} onChange={onHandleTabChange} variant="fullWidth">
      {tabsData.map((tab) => (
        <Tab
          value={tab.key}
          label={tab.label}
          sx={{
            color: "white",
          }}
        />
      ))}
    </Tabs>
  );
};
export default TabsList;
