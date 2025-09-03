import React from "react";
import { IconStarFilled } from '@tabler/icons-react';
import { testimonials } from "../Data/Data";

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';    
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


function Testimonials(){

    return(
        
        <div className="mt-20 pb-5">
            <div className="text-mine-shaft-100 text-4xl font-semibold text-center mb-8">
            What <span className="text-bright-sun-400">User</span> says about us? 
            </div>

                <div className="flex gap-8 px-8 flex-wrap justify-center">

                    {

                        testimonials.map((test,index)=> <div key={index} className="w-[23%] border-bright-sun-400 border  rounded-2xl  px-3 py-3 flex flex-col gap-4 ">
                        <div className="flex gap-3 items-center">
                            <div className="rounded-full overflow-hidden">
                                <img className=" w-14 h-14 object-cover" src={test.img} alt="" />
                            </div>
                            <div>
                                <div className="text-mine-shaft-100 font-bold">{test.name}</div>
                                <div className="text-bright-sun-300 flex">  
                                    <Stack spacing={1}>
                                        <Rating name="half-rating-read" defaultValue={test.rating} precision={0.5} readOnly emptyIcon={<StarIcon style={{ opacity: 0.75 }} fontSize="inherit" />} />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                        <div className=" text-xs text-mine-shaft-100">{test.testimonial}</div>
            
                    </div>
                    )
                    }
                   






                </div>
        </div>
    )
}

export default Testimonials;