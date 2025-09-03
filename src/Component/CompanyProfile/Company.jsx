import { Avatar, AvatarGroup, Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import AboutComp from "./AboutComp";
import JobComp from "./JobComp";
import EmployeeComp from "./EmployeeComp";

function TabPanel({ children, value, index }) {
    return (
        <div hidden={value !== index}>
            {value === index && (
                <Box sx={{ py: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Company() {
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div className="w-4/5">
            {/* Banner + Profile Image */}
            <div className="relative">
                <img
                    className="rounded-t-2xl"
                    src="src/assets/Profile/banner.jpg"
                    alt="banner"
                />
                <img
                    className="rounded-3xl p-3 bg-mine-shaft-950 absolute w-40 h-40 -bottom-1/4 left-5 border-8 border-mine-shaft-950"
                    src="src/assets/Icons/Google.png"
                    alt="profile"
                />
            </div>

            {/* Info Section */}
            <div className="px-5 mt-20">
                <div className="flex justify-between items-end">
                    <div className="text-3xl font-semibold">Google</div>
                    <AvatarGroup spacing="small"
                        renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                        total={4251}
                    >
                        <Avatar alt="Remy Sharp" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                        <Avatar alt="Travis Howard" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                        <Avatar alt="Agnes Walker" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                    </AvatarGroup>
                </div>

             

                <div className="flex text-lg text-mine-shaft-300 items-center gap-1">
                    <IconMapPin stroke={2} className="w-5 h-5" />
                    New York, United States
                </div>

                {/* Divider */}
                <Box
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        border: "1px solid",
                        borderColor: "#3d3d3d",
                        borderRadius: 2,
                        padding: "0 20px",
                        bgcolor: "background.paper",
                        width: "100%",
                        color: "primary",
                        my: 2,
                        "& svg": { m: 1 },
                    }}
                >
                    <Divider variant="middle" flexItem />
                </Box>

                {/* Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: "#3d3d3d", '&.MuiTabs-indicator': {color: "#ffbd20",} }}>
                    <Tabs value={tabIndex} onChange={handleTabChange} TabIndicatorProps={{ style: { backgroundColor: "#ffbd20" }}}>
                        <Tab
                            label="About" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': {color: "#ffbd20",}}}
                        />
                        <Tab
                            label="Jobs"sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': {color: "#ffbd20",}}}
                            
                        />
                        <Tab
                            label="Employees"sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': {color: "#ffbd20",}}}
                       
                        />
                    </Tabs>


                </Box>

                {/* Tab Panels */}
                <TabPanel value={tabIndex} index={0}>
                    <AboutComp />
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    <JobComp />
                </TabPanel>
                <TabPanel value={tabIndex} index={2}>
                    <EmployeeComp />
                </TabPanel>
            </div>
        </div>
    );
}

export default Company;
