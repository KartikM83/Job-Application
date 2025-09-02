import React from "react";
import Sort from "../FindJobs/Sort";
import TalentCards from "./TalentCards";
import { talents } from "../Data/TalentData";

function Talents(){


    return(

        <div className="p-5">
            <div className="flex justify-between ">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort />
            </div>

            <div className="mt-10 flex flex-wrap gap-5 justify-center">

                {
                    talents.map((items,index)=><TalentCards key={index} {...items} />)
                }
            </div>

            {/* <TalentCards /> */}

           
        </div>
    )
}
export default Talents;