import React from "react";

function CertificationCard(props){


    return(


        

        <div className="flex justify-between mb-10 ">
            <div className="flex items-center gap-3">
                <div className=" w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
                    <img className="" src={`src/assets/Icons/${props.issuer}.png`} alt="" />
                </div>

                <div className="flex flex-col">
                    <div className="font-bold text-lg">{props.name}</div>
                    <div className="text-md">
                        <div> {props.issuer}</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <div className="text-mine-shaft-300 text-md">{props.issueDate}</div>
                <div className="text-mine-shaft-300 text-md">ID: {props.certificateId}</div>

            </div>
        </div>    
    )
}

export default CertificationCard;