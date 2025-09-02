import React from "react";
import { jobList } from "../Data/JobsData";
import JobCards from "../FindJobs/JobCards";

function JobComp(){


    return(
            <div className="mt-10 flex flex-wrap gap-20 ">

                {
                    jobList.map((items,index)=><JobCards key={index} {...items} />)
                }
            </div>
    )
}
export default JobComp;