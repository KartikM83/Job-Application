import { Avatar, AvatarGroup, Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { jobList } from "../Data/JobsData";
import Card from "./Card";

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

function JobHistory() {
    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <div className="">
            <div className="text-3xl font-semibold mb-5">Job History</div>

            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: "#3d3d3d", '&.MuiTabs-indicator': { color: "#ffbd20", } }}>
                <Tabs value={tabIndex} onChange={handleTabChange} TabIndicatorProps={{ style: { backgroundColor: "#ffbd20" } }}>
                    <Tab
                        label="Applied" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': { color: "#ffbd20", } }}
                    />
                    <Tab
                        label="Saved" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': { color: "#ffbd20", } }}

                    />
                    <Tab
                        label="Offer" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': { color: "#ffbd20", } }}

                    />
                    <Tab
                        label="Interviewing" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': { color: "#ffbd20", } }}

                    />
                </Tabs>


            </Box>

            {/* Tab Panels */}
            <TabPanel value={tabIndex} index={0}>
                <div className="mt-10 flex flex-wrap gap-2 justify-center">

                    {
                        jobList.map((items, index) => <Card key={index} {...items} applied />)
                    }
                </div>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
                <div className="mt-10 flex flex-wrap gap-2 justify-center">

                    {
                        jobList.map((items, index) => <Card key={index} {...items} saved />)
                    }
                </div>
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
                <div className="mt-10 flex flex-wrap gap-2 justify-center">

                    {
                        jobList.map((items, index) => <Card key={index} {...items}  offered/>)
                    }
                </div>
            </TabPanel>
            <TabPanel value={tabIndex} index={3}>
                <div className="mt-10 flex flex-wrap gap-2 justify-center">

                    {
                        jobList.map((items, index) => <Card key={index} {...items}  interviewing/>)
                    }
                </div>
            </TabPanel>

        </div>
    );
}

export default JobHistory;
