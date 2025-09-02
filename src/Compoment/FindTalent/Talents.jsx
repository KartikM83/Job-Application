import React from "react";
import Sort from "../FindJobs/Sort";
import TalentCards from "./TalentCards";
import { talents } from "../Data/TalentData";

function Talents(){


    return(

        <div className="p-5">
            <div className="flex justify-between ">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort />
            </div>

            <div className="mt-10 flex flex-wrap gap-5 justify-center">

                {
                    talents.map((items,index)=><TalentCards key={index} {...items} />)
                }
            </div>

            {/* <TalentCards /> */}

           
        </div>
    )
}
// export default Talents;

// import React, { useEffect, useState } from "react";
// import Sort from "../FindJobs/Sort";
// import TalentCards from "./TalentCards";
// import SearchBar from "./SearchBar";
// import axios from "axios";

// function Talents() {
//   const [talents, setTalents] = useState([]);
//   const [filters, setFilters] = useState({});
//   const [sort, setSort] = useState("Relavence");

//   useEffect(() => {
//     fetchTalents();
//   }, [filters, sort]);

//   const fetchTalents = async () => {
//     try {
//       const res = await axios.get("http://localhost:8080/api/talents", {
//         params: { ...filters, sort },
//       });
//       setTalents(res.data);
//     } catch (err) {
//       console.error("Error fetching talents:", err);
//     }
//   };

//   return (
//     <div className="p-5">
//       <div className="flex justify-between ">
//         <div className="text-2xl font-semibold">Talents</div>
//         <Sort onSortChange={setSort} />
//       </div>

//       {/* Add Search Filters */}
//       <SearchBar onFilterChange={setFilters} />

//       <div className="mt-10 flex flex-wrap gap-5 justify-center">
//         {talents.map((items, index) => (
//           <TalentCards key={index} {...items} />
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Talents;
