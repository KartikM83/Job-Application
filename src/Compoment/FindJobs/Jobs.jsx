import React from "react";
import Sort from "./Sort";
import JobCards from "./JobCards";
import { jobList } from "../Data/JobsData";

function Jobs(){


    return(

        <div className="p-4">
            <div className="flex justify-between ">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort />
            </div>

            <div className="mt-10 flex flex-wrap gap-3 justify-center">

                {
                    jobList.map((items,index)=><JobCards key={index} {...items} />)
                }
            </div>

           
        </div>
    )
}
export default Jobs;


// import React, { useEffect, useState } from "react";
// import Sort from "./Sort";
// import JobCards from "./JobCards";
// import axios from "axios";

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [sort, setSort] = useState("Relavence");

//   useEffect(() => {
//     fetchJobs();
//   }, [sort]);

//   const fetchJobs = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/jobs", {
//         params: { sort },
//       });
//       setJobs(res.data);
//     } catch (err) {
//       console.error("Error fetching jobs:", err);
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between ">
//         <div className="text-2xl font-semibold">Recommended Jobs</div>
//         <Sort onSortChange={setSort} />
//       </div>

//       <div className="mt-10 flex flex-wrap gap-3 justify-center">
//         {jobs.map((job, index) => (
//           <JobCards key={index} {...job} />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Jobs;
