import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
// Import all images
import Amazon from "../../assets/Icons/Amazon.png";
import Apple from "../../assets/Icons/Apple.png";
import Adobe from "../../assets/Icons/Adobe.png";
import Google from "../../assets/Icons/Google.png";
import Meta from "../../assets/Icons/Meta.png";
import Microsoft from "../../assets/Icons/Microsoft.png";
import Netflix from "../../assets/Icons/Netflix.png";
import Spotify from "../../assets/Icons/Spotify.png";

// Image map
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
function CompanyCards(props){


    return(

        <div className="flex justify-between items-center bg-mine-shaft-900 p-2 rounded-lg">
        <div className="flex items-center gap-3">
          <div className=" w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
            <img className="" src={companyLogos[props.name]} alt="" />
          </div>

          <div className="flex flex-col gap-1">
          <div className="font-bold">{props.name}</div>
          <div className="text-xs">
            <div> {props.employees} Employess</div>
          </div>
        </div>

 

        </div>
      
        
        <div className="cursor-pointer">
          <IconExternalLink stroke={2} className="text-bright-sun-400" />
        </div>
      </div>


    )
}

export default CompanyCards;