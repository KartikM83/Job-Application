import { IconExternalLink } from "@tabler/icons-react";
import React from "react";

function CompanyCards(props){


    return(

        <div className="flex justify-between items-center bg-mine-shaft-900 p-2 rounded-lg">
        <div className="flex items-center gap-3">
          <div className=" w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
            <img className="" src={`src/assets/Icons/${props.name}.png`} alt="" />
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