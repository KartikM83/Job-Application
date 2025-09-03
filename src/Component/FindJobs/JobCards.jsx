import React from "react";
import { IconClockHour3, IconBookmark  } from '@tabler/icons-react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";


function JobCards(props){


    return (
      <Link to={"/jobs"} className="flex flex-col gap-4 w-72  p-4 rounded-xl bg-mine-shaft-900 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className=" w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
              <img className="" src={`src/assets/Icons/${props.company}.png`} alt="" />
            </div>

            <div className="flex flex-col gap-1">
            <div className="font-bold">{props.jobTitle}</div>
            <div className="text-xs">
              <div> {props.company} &#x2022; {props.applicants} Applicants</div>
            </div>
          </div>



          </div>
        
          
          <div className="cursor-pointer">
            <IconBookmark stroke={2} />
          </div>
        </div>





        <div className="flex gap-2 [&>div]:px-2 [&>div]:py-1 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
          <div>{props.experience}</div>
          <div>{props.jobType}</div>
          <div>{props.location} </div>
        </div>

        <div>
          <Box
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
              overflow: "hidden",
              fontSize: "12px",
              color: "#b0b0b0",
            }}
          >
           {props.description}
          </Box>
        </div>

        <div>
          <Box
            sx={{
              border: "1px solid #4f4f4f",
              borderRadius: 1,
             
            }}
          >
            <Divider sx={{ borderColor: "#4f4f4f" }} />
          </Box>
        </div>

        <div className="flex justify-between">
          <div className="text-mine-shaft-300 font-bold">
            &#8377;{props.package}
          </div>
          <div className="flex text-xs text-mine-shaft-300 items-center gap-1">
            <IconClockHour3 stroke={2} className="w-5 h-5" />
            posted {props.postedDaysAgo} days ago
          </div>
        </div>
      </Link>
    );
}
export default JobCards;