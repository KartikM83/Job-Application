import React from "react";
import { IconFishHook , IconBell, IconSettings, IconBrandInstagram,IconBrandTelegram,IconBrandYoutube    } from '@tabler/icons-react';
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";


function Footer(){
    const loaction =useLocation()

    return (

        loaction.pathname!="/sign-up" && loaction.pathname!="/login"?<div className="flex justify-between px-24 pt-14 pb-5 bg-mine-shaft-950 font-['poppins']">
            <div className="w-[23%] flex flex-col">
                
                <div className="flex items-center text-bright-sun-400 mb-2 ">
                    <IconFishHook className="w-6 h-6" stroke={2.5} />
                    <h1 className='font-semibold text-xl'>JobHook</h1>
                </div>
               
                <div className="text-sm text-mine-shaft-300 mb-3">Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
                <div className="flex  gap-3">
                    <div className=" bg-mine-shaft-900 p-2 text-sm text-bright-sun-400 rounded-full" ><IconBrandInstagram stroke={2} className="w-6 h-6" /></div>
                    <div className=" bg-mine-shaft-900 p-2 text-sm text-bright-sun-400 rounded-full"  ><IconBrandTelegram stroke={2} className="w-6 h-6" /></div>
                    <div className=" bg-mine-shaft-900 p-2 text-sm text-bright-sun-400 rounded-full"  ><IconBrandYoutube stroke={2} className="w-6 h-6" /></div>
                </div>
            </div>

            <div className="w-[56%] flex justify-between ">


                {

                    footerLinks.map((link,index)=> <div key={index} className="flex flex-col gap-3">
                    <div className="font-semibold text-bright-sun-400 text-xl">{link.title}</div>
                    <div>

                        {
                            link.links.map((items,index)=><div key={index} className="text-mine-shaft-300 text-sm hover:text-bright-sun-400 hover:translate-x-2 transition duration-300 ease-in-out" >{items}</div>)
                        }
                        
                        
                    </div>
                </div>)
                }

               

            </div>
            
          
        </div>:<></>
    )
}

export default Footer;