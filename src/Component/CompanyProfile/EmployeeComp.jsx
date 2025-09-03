import React from "react";
import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalent/TalentCards";
function EmployeeComp(){


    return(

      

            <div className="mt-10 flex flex-wrap gap-8 ">

                {
                    talents.map((items,index)=><TalentCards key={index} {...items} />)
                }
            </div>

         
    )
}
export default EmployeeComp;