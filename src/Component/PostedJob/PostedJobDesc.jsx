
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalent/TalentCards";


function PostedJobDesc() {

    function TabPanel({ children, value, index }) {
        return (
            <div hidden={value !== index}>
                {value === index && (
                    <Box sx={{ py: 2 }}>
                        <Typography component="div">{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    const [tabIndex, setTabIndex] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    }

    return (

        <div className="w-4/5 px-5">
            <div className="text-3xl font-semibold ">Software Engineer</div>
            <div className="font-medium text-mine-shaft-300 mb-5">New York, United State</div>
            <div>

                {/* Tabs */}
                <Box sx={{ borderBottom: 1, borderColor: "#3d3d3d", '&.MuiTabs-indicator': { color: "#ffbd20", } }}>
                    <Tabs value={tabIndex} onChange={handleTabChange} TabIndicatorProps={{ style: { backgroundColor: "#ffbd20" } }}>
                        <Tab
                            label="Overview" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': { color: "#ffbd20", } }}
                        />
                        <Tab
                            label="Applicants" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': { color: "#ffbd20", } }}

                        />
                        <Tab
                            label="Invited" sx={{ fontSize: 20, textTransform: "none", fontWeight: 600, color: "#ffffff", '&.Mui-selected': { color: "#ffbd20", } }}

                        />
                    </Tabs>


                </Box>

                {/* Tab Panels */}
                <TabPanel value={tabIndex} index={0}>
                    <Box sx={{ width: '100%', '& > div': { width: '100%', }, }}>
                        <JobDesc edit />
                    </Box>

                </TabPanel>
                <TabPanel value={tabIndex} index={1}>

                    <div className="mt-10 flex flex-wrap gap-5 ">

                        {
                            talents.map((items, index) => <TalentCards key={index} {...items} posted />)
                        }
                    </div>

                </TabPanel >
                <TabPanel value={tabIndex} index={2}>

                    <div className="mt-10 flex flex-wrap gap-5 ">

                        {
                            talents.map((items, index) => <TalentCards key={index} {...items} invited />)
                        }
                    </div>

                </TabPanel>





            </div>
        </div>

    )
}

export default PostedJobDesc;