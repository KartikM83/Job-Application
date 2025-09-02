import React from "react";
import { companyData } from "../Data/Company";

function AboutComp(){

    const company= companyData;
    return(

        <div className="flex flex-col gap-5">


            {

                Object.keys(company).map((key ,index)=>key!='Name' && <div key={index}>
                    <div className="text-2xl font-semibold mb-1">{key}</div>
                    {key!='Website' && <div className="text-mine-shaft-300  text-justify">{key!='Specialties'?company[key]:company[key].map((item,index)=><span key={index}> &bull; {item}</span>)}</div>}
                    {key=='Website' && <a href={company[key]} target="__blank" className="text-bright-sun-400  text-justify">{company[key]}</a>}
                </div>)
            }
        </div>
    )
}

export default AboutComp;