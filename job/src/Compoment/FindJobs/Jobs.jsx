import React from "react";
import Sort from "./Sort";
import JobCards from "./JobCards";
import { jobList } from "../Data/JobsData";

function Jobs(){


    return(

        <div className="p-4">
            <div className="flex justify-between ">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort />
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">

                {
                    jobList.map((items,index)=><JobCards key={index} {...items} />)
                }
            </div>

           
        </div>
    )
}
export default Jobs;