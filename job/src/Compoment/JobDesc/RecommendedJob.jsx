import React from "react";


import { jobList } from "../Data/JobsData";
import JobCards from "../FindJobs/JobCards";

function RecommendedJobs(){


    return(

        <div >
            <div className=" w-full text-xl font-semibold mb-5">Recommonded Talents</div>
            <div className="flex flex-col gap-5">
                {
                    jobList.map((talent,index)=>index<6 && <JobCards key={index} {...talent}/> )

                }
            </div>
        </div>
    )
}

export default RecommendedJobs;