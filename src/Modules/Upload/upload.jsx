import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UploadModal from "../../commonComponents/UploadModal";
import { useSelector } from "react-redux";
import Loader from "../../commonComponents/Loader";

export default function Upload() {
  const [value, setValue] = React.useState("1");
  const [label, setLabel] = React.useState("Upload Quality");
  const { loading } = useSelector((state) => state.upload);

  const handleChange = (event, newValue) => {
    const selectedTab = event.currentTarget.textContent;
    setValue(newValue);
    setLabel(selectedTab);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", position: "relative" }}>
      {/* Loader overlay */}
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            flexDirection: "column", // Stack loader and text
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
          }}
        >
          {/* Loader Component */}
          <Loader />

          {/* Text Below Loader */}
          <Box
            sx={{
              mt: 2, // Margin-top for spacing
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#333", // Dark text color
              textAlign: "center",
            }}
          >
            Uploading your file... Please wait.
          </Box>
        </Box>
      )}

      {/* Content Box */}
      <Box
        sx={{
          filter: loading ? "blur(5px)" : "none", // Blur effect when loading
          pointerEvents: loading ? "none" : "auto", // Prevent interaction when loading
        }}
      >
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
              <Tab label="Upload Toolroom" value="8" />

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
          <TabPanel value="8">
            <UploadModal label={label} />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
}
