import React from "react";
import { companies } from "../Data/Data";
import Marquee from "react-fast-marquee";

function Companies(){

    return(

        <div className="mt-20 pb-5">
            <div className="text-mine-shaft-100 text-4xl font-semibold text-center mb-10">Trusted By <span className="text-bright-sun-400">1000+</span> Companies</div>
            <Marquee pauseOnHover="true">
                {companies.map((company,index)=><div key={index} className="mx-8 px-3 py-2 hover:bg-mine-shaft-900 rounded-2xl">  
                    <img className="h-16" src={`src/assets/Companies/${company}.png`} alt="" /> 
                </div>
                )}
            </Marquee>
        </div>
    )
}

export default Companies;