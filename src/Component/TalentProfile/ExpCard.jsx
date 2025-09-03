import React from "react";

function ExpCard(props){


    return(

        <div className="flex flex-col gap-3">
        

        <div className="flex justify-between ">
            <div className="flex items-center gap-3">
                <div className=" w-12 h-12 p-2 bg-mine-shaft-800 rounded-xl">
                    <img className="" src={`src/assets/Icons/${props.company}.png`} alt="" />
                </div>

                <div className="flex flex-col">
                    <div className="font-bold text-lg">{props.title}</div>
                    <div className="text-sm">
                        <div> {props.company} &#x2022; {props.location}</div>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-mine-shaft-300  text-md">{props.startDate} - {props.endDate}</div>
            </div>

           
        </div>    
        <div className="text-mine-shaft-300 text-justify text-sm">
            <div>{props.description}</div>
        </div>






</div>


    )
}

export default ExpCard;