import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { activeJobs } from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

function PostedJob() {

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
    };

    return (

        <div className="w-1/6 ">
            <div className="text-3xl font-semibold mb-5">PostJob</div>

            <div>

                <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Tabs
                        value={tabIndex}
                        onChange={handleTabChange}
                        TabIndicatorProps={{ style: { display: "none" } }} // Hide underline
                        sx={{ width:'100%', borderRadius: 1, p: 0.5, minHeight: "unset" }}
                    >
                        <Tab
                            disableRipple
                            disableFocusRipple
                            label="Active [4]"
                            sx={{
                                fontSize: { xs: 14, sm: 16 }, fontWeight: 400, textTransform: "none", color: "#fff", backgroundColor: "#3d3d3d", borderRadius: 0.5, px: 2, py: 1, mr: 3, minHeight: "unset", transition: "background-color 0.3s", cursor: "pointer",
                                '&.Mui-selected': { backgroundColor: "#ffbd20", color: "#000", fontWeight: 500 },
                                '&.Mui-focusVisible': { outline: '2px solid #ffbd20', outlineOffset: 2 }
                            }}
                        />
                        <Tab
                            disableRipple
                            disableFocusRipple
                            label="Drafts [1]"
                            sx={{
                                fontSize: { xs: 14, sm: 16 }, fontWeight: 400, textTransform: "none", color: "#fff", backgroundColor: "#3d3d3d", borderRadius: 0.5, px: 2, py: 1, minHeight: "unset", transition: "background-color 0.3s", cursor: "pointer",
                                '&.Mui-selected': { backgroundColor: "#ffbd20", color: "#000", fontWeight: 500 },
                                '&.Mui-focusVisible': { outline: '2px solid #ffbd20', outlineOffset: 2 }
                            }}
                        />
                    </Tabs>
                </Box>

                {/* Tab Panels */}
                <TabPanel value={tabIndex} index={0}>
                    <div className="flex flex-col gap-5 ">
                        {
                            activeJobs.map((item,index)=><PostedJobCard key={index} {...item}/>)
                        }
                    </div>
                </TabPanel>
                <TabPanel value={tabIndex} index={1}>
                    Mankar
                </TabPanel>





            </div>
        </div>
    )
}

export default PostedJob;