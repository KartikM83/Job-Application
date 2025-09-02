import { IconMapPin,IconBriefcase  } from "@tabler/icons-react";
import React from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ExpCard from "./ExpCard";
import CertificationCard from "./CertificationCard";

function Profile(props){


    return(

        <div className="w-3/4">

            <div className="relative">
                <img className="rounded-t-2xl" src="src/assets/Profile/banner.jpg" alt="" />
                <img className="rounded-full absolute w-48 h-48 -bottom-1/3 left-4 border-8 border-mine-shaft-950" src="src/assets/Avatar/avatar.png" alt="" />

            </div>

            <div className="px-5 mt-20">
                    <div className="flex justify-between items-end">

                        <div className="text-3xl font-semibold">{props.name}</div>
                        <div>
                    <button
                        className=" text-xl text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold  px-5 py-2 rounded-md"
                        type="submit"
                    >
                        Message
                    </button>
                </div>

                    </div>
                        <div className="text-[13px]">
                            <div className="flex items-center text-xl gap-1"> <IconBriefcase stroke={2} className="w-5 h-5"/> {props.role} &#x2022; {props.company}</div>
                        </div>

                        <div className="flex  text-lg text-mine-shaft-300 items-center gap-1">
                            <IconMapPin stroke={2}  className="w-5 h-5" />
                                {props.location}
                        </div>

                
                </div>

                <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    mx: 1,
                    bgcolor: 'background.paper',
                    width: '99%',
                    color: 'text.secondary',
                    my:2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>


            <div className="px-5">
                <div className="text-3xl font-bold mb-5">About</div>
                <div className="text-md text-mine-shaft-300 text-justify">{props.about}</div>
            </div>

            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    mx: 1,
                    bgcolor: 'background.paper',
                    width: '99%',
                    color: 'text.secondary',
                    my:2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>

            <div className="px-5 mb-3">
                <div className="text-3xl font-bold mb-5">Skills</div>
                <div className="flex gap-2 flex-wrap">

                    {

                        props.skills.map((skill,index)=><div key={index} className="bg-bright-sun-400 bg-opacity-15 text-bright-sun-400 font-semibold px-3 py-1 rounded-3xl text-md">{skill}</div>)
                    }
                    
            
                </div>

            </div>

            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    mx: 1,
                    bgcolor: 'background.paper',
                    width: '99%',
                    color: 'text.secondary',
                    my:2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>
            <div className="px-5 mb-3">
                <div className="text-3xl font-bold mb-5">Experience</div>

                <div className="flex flex-col gap-10">

                    
                {

                    props.experience.map((exp,index)=> <ExpCard key={index} {...exp}/> )
                }


                </div>


               
            </div> 

            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    mx: 1,
                    bgcolor: 'background.paper',
                    width: '99%',
                    color: 'text.secondary',
                    my:2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>

            <div className="px-5 mb-3">
                <div className="text-3xl font-bold mb-5">Certification</div>

                {

                    props.certifications.map((certifications,index)=><CertificationCard key={index} {...certifications}/> )
                }
                
            </div> 
            
              


          


         
        </div>
    )
}

export default Profile;