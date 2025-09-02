import React from 'react'
import { Link, useLocation } from 'react-router-dom';



function NavLinks() {

   const links = [
        { name: "Find Job", url: "/find-jobs" },
        { name: "Find Talent", url: "/find-talent" },
        { name: "Post Job", url: "/Post-job" },
        { name: "Posted Job", url: "/posted-job" },
        { name: "Job History", url: "/job-history" },
        { name: "Sign Up", url: "/sign-up" },

    ];

    const loaction = useLocation();

    return(
        <div className='flex gap-8 text-md h-full '>
            {links.map((link,index)=><div key={index} className={`${location.pathname==link.url ? "text-bright-sun-400 border-bright-sun-400" : "border-none"}   border-t-[3px] flex items-center`}>
            <Link key={index} to={link.url}>{link.name}</Link>

            </div>

)}
            
        </div>
    )
  
}

export default NavLinks;
