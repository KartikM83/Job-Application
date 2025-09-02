import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

function PostedJobCard(props) {


    return (

        <div className="bg-mine-shaft-900 rounded-xl p-2 border-l-2 border-bright-sun-400">
            <div className="text-md font-semibold">{props.jobTitle}</div>
            <div className="text-sm font-medium text-mine-shaft-300">{props.location}</div>
            <div className="text-sm text-mine-shaft-300">{props.posted}</div>
          </div>
       
    )
}

export default PostedJobCard;