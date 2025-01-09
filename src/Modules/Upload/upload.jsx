import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UploadModal from "../../commonComponents/UploadModal";

export default function Upload() {
  const [value, setValue] = React.useState("1");
  const [label, setLabel] = React.useState("Upload Quality");

  const handleChange = (event, newValue) => {
    const selectedTab = event.currentTarget.textContent; 
    setValue(newValue);
    setLabel(selectedTab); 
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Upload Quality" value="1" />
            <Tab label="Upload Safety" value="2" />
            <Tab label="Upload Utility" value="3" />
            <Tab label="Upload Finance" value="4" />
            <Tab label="Upload Production" value="5" />
            <Tab label="Upload Sales" value="6" />
            <Tab label="Upload HR" value="7" />
            {/* <Tab label="Upload KPI" value="8" /> */}
          </TabList>
        </Box>
        <TabPanel value="1">
          <UploadModal label={label} />
        </TabPanel>
        
        <TabPanel value="2">
          <UploadModal label={label} />
        </TabPanel>

        <TabPanel value="3">
          <UploadModal label={label} />
        </TabPanel>

        <TabPanel value="4">
          <UploadModal label={label} />
        </TabPanel>

        <TabPanel value="5">
          <UploadModal label={label} />
        </TabPanel>

        <TabPanel value="6">
          <UploadModal label={label} />
        </TabPanel>

        <TabPanel value="7">
          <UploadModal label={label} />
        </TabPanel>

        {/* <TabPanel value="8">
          <UploadModal label={label} />
        </TabPanel> */}
      </TabContext>
    </Box>
  );
}
