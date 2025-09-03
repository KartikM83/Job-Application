import React from "react";

import { similar } from "../Data/Company";
import CompanyCards from "./CompanyCards";

function SimilarCompanies(){


    return(

        <div className="w-1/5" >
            <div className=" w-full text-xl font-semibold mb-5">Similar Companies</div>
            <div className="flex flex-col gap-5">
                {
                    similar.map((company,index)=><CompanyCards key={index} {...company}/> )

                }
            </div>
        </div>
    )
}

export default SimilarCompanies;