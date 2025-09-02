import { Box, Divider } from "@mui/material";
import { IconArrowLeft, IconHeart, IconMapPin } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";

import DOMPurify from 'dompurify'

function JobDesc(props) {

    const data = DOMPurify.sanitize(desc);

    return (

        <div className="w-3/4 mt-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className=" w-16 h-16 p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="" src={`src/assets/Icons/Google.png`} alt="" />
                    </div>

                    <div className="flex flex-col gap-0.5">
                        <div className="font-bold text-2xl">Software Engineer</div>
                        <div className="text-md">
                            <div> Google  &#x2022; 3 days ago &#x2022; 25 Applicants</div>
                        </div>
                    </div>



                </div>


                <div className="cursor-pointer flex flex-col items-center gap-2">

                    <Link to={"/apply-job"}>
                        <button
                            className="px-8  box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex justify-center py-2 rounded-md"
                            type="submit"
                        >
                            {props.edit?'Edit':'Apply'} 
                        </button>
                    </Link>
                    {props.edit?<button className="px-6 text-red-500 border-2 border-red-500  font-semibold flex justify-center py-2 rounded-md" type="submit"
                        >
                            Delete 
                        </button>:<IconHeart stroke={2} className="text-bright-sun-400" />}
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
                    my: 2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>

            <div className="flex justify-between mt-5">

                {

                    card.map((item, index) => <div key={index} className="flex flex-col items-center ">
                        <div className="w-fit p-3 bg-mine-shaft-900 rounded-full mb-2 ">
                            <item.icon stroke={2} className="w-9 h-9 text-bright-sun-400" />
                        </div>
                        <div className="text-md text-mine-shaft-300">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                    </div>
                    )
                }

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
                    my: 2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>

            <div className="mt-5">
                <div className="text-2xl font-semibold mb-5">Skills</div>
                <div className="flex gap-2 flex-wrap">

                    {

                        skills.map((skill, index) => <div key={index} className="bg-bright-sun-400 bg-opacity-15 text-bright-sun-400 font-semibold px-3 py-1 rounded-3xl text-md">{skill}</div>)
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
                    my: 2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>

            <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200 [&_*]:text-mine-shaft-300 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:mb-1" dangerouslySetInnerHTML={{ __html: data }}></div>


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
                    my: 2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>

            <div className="text-2xl font-semibold mb-5">About Company</div>
            <div className="flex justify-between items-center mb-3">
                
                <div className="flex items-center gap-3">
                    
                    <div className=" w-14 h-14 p-3 bg-mine-shaft-800 rounded-xl">
                        <img className="" src={`src/assets/Icons/Google.png`} alt="" />
                    </div>

                    <div className="flex flex-col">
                        <div className="font-medium text-lg">Google</div>
                        <div className="text-mine-shaft-300">10K+ Employee</div>
                    </div>



                </div>


               

                    <Link to={"/company"}>
                        <button
                            className="px-8  box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex justify-center py-2 rounded-md"
                            type="submit"
                        >
                            Company Page
                        </button>
                    </Link>
                  
            </div>

            <div className="text-mine-shaft-300 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod a facilis in suscipit incidunt error magni autem ex doloremque pariatur. Velit, aperiam impedit quis officia perferendis eius in delectus deleniti quae? Eveniet voluptatem dolore cumque quam laboriosam quo recusandae magni, in aperiam eius obcaecati veritatis facere, amet officia nemo dignissimos mollitia voluptatum nostrum aut? Itaque placeat exercitationem consequuntur suscipit, tenetur consequatur repudiandae ad cumque.</div>








        </div>
    )
}

export default JobDesc;