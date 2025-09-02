import React from "react";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalent/TalentCards"

function RecommendedTalent(){


    return(

        <div >
            <div className=" w-full text-xl font-semibold mb-5">Recommonded Talents</div>
            <div className="flex flex-col gap-5">
                {
                    talents.map((talent,index)=>index<4 && <TalentCards key={index} {...talent}/> )
                }
            </div>
        </div>
    )
}

export default RecommendedTalent;