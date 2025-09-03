import React from "react";
import { IconHeart, IconPointFilled,IconClockHour3, IconBookmark, IconBookmarkFilled, IconCalendarMonth  } from '@tabler/icons-react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";

// Import images
import Amazon from "../../assets/Icons/Amazon.png";
import Apple from "../../assets/Icons/Apple.png";
import Adobe from "../../assets/Icons/Adobe.png";
import Google from "../../assets/Icons/Google.png";
import Meta from "../../assets/Icons/Meta.png";
import Microsoft from "../../assets/Icons/Microsoft.png";
import Netflix from "../../assets/Icons/Netflix.png";
import Spotify from "../../assets/Icons/Spotify.png";

// Map of company logos
const companyLogos = {
  Amazon,
  Apple,
  Adobe,
  Google,
  Meta,
  Microsoft,
  Netflix,
  Spotify,
};
function Card(props){


    return (
      <Link to={"/jobs"} className="flex flex-col gap-4 w-72  p-4 rounded-xl bg-mine-shaft-900 hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className=" w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
              <img className="" src={companyLogos[props.company]} alt="" />
            </div>

            <div className="flex flex-col gap-1">
            <div className="font-bold">{props.jobTitle}</div>
            <div className="text-xs">
              <div> {props.company} &#x2022; {props.applicants} Applicants</div>
            </div>
          </div>



          </div>
        
          
          <div className="cursor-pointer">
           {props.saved?<IconBookmarkFilled  className="text-bright-sun-400"/>:<IconBookmark stroke={2} />} 
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
            {props.applied  ? "Applied"  : props.offered  ? "Interviewed" :props.interviewing?"Applied":"Posted"} {props.postedDaysAgo} days ago
          </div>
        </div>

        {(props.offered ||  props.interviewing ) &&  <Box 
            sx={{
              border: "1px solid #4f4f4f",
              borderRadius: 1,
             
            }}
          >
            <Divider sx={{ borderColor: "#4f4f4f" }} />
          </Box>}

        {

            props.offered  &&  <div className="flex [&>*]:w-1/2 [&>*]:p-1 gap-2">
            <button
                  className="w-full box-border border-2 border-bright-sun-400 text-bright-sun-400 font-semibold flex justify-center py-1.5 rounded-md"
                  type="submit"
                >
                  Accept
                </button>
    
    
                <button
                  className="w-full box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex justify-center py-2 rounded-md"
                  type="submit"
                >
                  Reject
                </button>
            </div>
        }

        {
            props.interviewing&& <div className="flex gap-2 text-mine-shaft-200 text-sm items-center"><IconCalendarMonth stroke={1.5} className="text-bright-sun-400"/>Sun, 25 August &bull; <span className="text-mine-shaft-400">10:00 AM</span></div>
        }

       
      </Link>
    );
}
export default Card;