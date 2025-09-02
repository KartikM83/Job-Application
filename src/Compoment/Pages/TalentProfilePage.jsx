import React from "react";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { IconArrowLeft } from '@tabler/icons-react';
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/profile";
import { profile } from "../Data/TalentData";
import RecommendedTalent from "../TalentProfile/RecommendedTalent";




function TalentProfilePage(){


    return(

        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-5 ">

            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    // mx: 3,
                    bgcolor: 'background.paper',
                    width: '100%',
                    color: 'text.secondary',
                    my:2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>
            <Link to="/find-talent">
            <div className="w-fit px-3 box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex justify-center py-2 rounded-md flex gap-2">
                <IconArrowLeft stroke={2} /> 
                <button  type="submit">Back</button>
            </div>
            </Link>
           


            <div className="flex gap-5 mt-8 justify-around ">

                <Profile {...profile}/> 
                <RecommendedTalent />

            </div>

          
            
           
            
        </div>
    )
}

export default TalentProfilePage;