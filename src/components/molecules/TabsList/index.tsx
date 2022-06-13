/* eslint-disable react/prop-types */
import { Tab, Tabs } from "@mui/material";
import { TabPropType } from "../../../shared/types";

interface TabListsProps {
  tabsData: TabPropType[];
  currentTab: string;
  onHandleTabChange: (_: React.SyntheticEvent, newValue: string) => void;
}

const TabsList: React.FC<TabListsProps> = ({
  tabsData,
  currentTab,
  onHandleTabChange,
}) => (
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
export default TabsList;
