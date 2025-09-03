import React, { useState } from "react";
import SelectInput from "./SelectInput";
import { fields } from "../Data/PostJob";
import { TextField, Chip, Box, FormLabel } from '@mui/material';
import RichEditor from "./RichTextEditor";
import { IconArrowLeft } from "@tabler/icons-react";


function PostJob() {
  const select = fields;

  const [inputValue, setInputValue] = useState('');
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault(); // prevent space from being added
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="text-3xl font-semibold mb-5">PostJob</div>

      <div className="flex flex-col gap-5">

        {/* Select Inputs */}
        <div className="flex gap-10">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>

        <div className="flex gap-10">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>

        <div className="flex gap-10">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>

        <div className="flex flex-col gap-2">
          <FormLabel>Skills</FormLabel>
          <Box



            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              minHeight: '56px',
            }}
          >

            {tags.map((tag, index) => (
              <Chip
                key={index}
                label={tag}
                onDelete={() => handleDelete(tag)}
              />
            ))}

            <TextField
              variant="standard"
              placeholder="Type and press space"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              InputProps={{ disableUnderline: true }}
              sx={{ minWidth: 120, flexGrow: 1 }}
            />
          </Box>
        </div>

        {/* Chip Input */}


        <div className="flex flex-col gap-2">
          <FormLabel>Job Description</FormLabel>
          <RichEditor />
        </div>

        <div className="flex [&>*]:w-[15%] [&>*]:p-1">
        
       
      
            <div>
                <button
                    className="w-full box-border border-2 border-bright-sun-400 text-bright-sun-400 font-semibold flex justify-center py-1.5 rounded-md"
                    type="submit"
                >
                    Publish Job
                </button>
            </div>

           
            

            <div>
                <button
                    className="w-full box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex justify-center py-2 rounded-md"
                    type="submit"
                >
                    Save as Draft
                </button>
            </div>


    </div>



        


      </div>
    </div>
  );
}

export default PostJob;


// import React, { useState } from "react";
// import axios from "axios";
// import RichTextEditor from "./RichTextEditor";
// import SelectInput from "./SelectInput";

// function PostJob() {
//   const [inputValue, setInputValue] = useState("");
//   const [tags, setTags] = useState([]);

//   const [jobData, setJobData] = useState({
//     title: "",
//     category: "",
//     location: "",
//     type: "",
//     salary: "",
//     experience: "",
//     description: "",
//     skills: [],
//   });

//   // Handle Tags Input
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && inputValue.trim() !== "") {
//       e.preventDefault();
//       if (!tags.includes(inputValue)) {
//         const newTags = [...tags, inputValue];
//         setTags(newTags);
//         setJobData({ ...jobData, skills: newTags });
//       }
//       setInputValue("");
//     }
//   };

//   const removeTag = (tag) => {
//     const newTags = tags.filter((t) => t !== tag);
//     setTags(newTags);
//     setJobData({ ...jobData, skills: newTags });
//   };

//   // API Calls
//   const handlePublish = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/api/jobs", jobData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       alert("Job Published Successfully!");
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error publishing job");
//     }
//   };

//   const handleDraft = async () => {
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/jobs/draft",
//         jobData,
//         { headers: { "Content-Type": "application/json" } }
//       );
//       alert("Job Saved as Draft");
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Error saving draft");
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow rounded-lg space-y-4">
//       <h2 className="text-xl font-semibold">Post a Job</h2>

//       {/* Job Title */}
//       <input
//         type="text"
//         placeholder="Job Title"
//         className="w-full p-2 border rounded"
//         value={jobData.title}
//         onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
//       />

//       {/* Category */}
//       <SelectInput
//         label="Category"
//         options={["IT", "Finance", "Marketing", "HR"]}
//         value={jobData.category}
//         onChange={(val) => setJobData({ ...jobData, category: val })}
//       />

//       {/* Location */}
//       <input
//         type="text"
//         placeholder="Location"
//         className="w-full p-2 border rounded"
//         value={jobData.location}
//         onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
//       />

//       {/* Job Type */}
//       <SelectInput
//         label="Job Type"
//         options={["Full-Time", "Part-Time", "Remote", "Contract"]}
//         value={jobData.type}
//         onChange={(val) => setJobData({ ...jobData, type: val })}
//       />

//       {/* Salary */}
//       <input
//         type="text"
//         placeholder="Salary"
//         className="w-full p-2 border rounded"
//         value={jobData.salary}
//         onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
//       />

//       {/* Experience */}
//       <input
//         type="text"
//         placeholder="Experience"
//         className="w-full p-2 border rounded"
//         value={jobData.experience}
//         onChange={(e) => setJobData({ ...jobData, experience: e.target.value })}
//       />

//       {/* Rich Text Editor */}
//       <RichTextEditor
//         onChange={(value) => setJobData({ ...jobData, description: value })}
//       />

//       {/* Skills (Tags) */}
//       <div>
//         <label className="block font-medium">Skills Required</label>
//         <div className="flex flex-wrap gap-2 border p-2 rounded">
//           {tags.map((tag, index) => (
//             <span
//               key={index}
//               className="bg-blue-100 text-blue-600 px-2 py-1 rounded flex items-center"
//             >
//               {tag}
//               <button
//                 onClick={() => removeTag(tag)}
//                 className="ml-2 text-red-500"
//               >
//                 ✕
//               </button>
//             </span>
//           ))}
//           <input
//             type="text"
//             placeholder="Type and press Enter"
//             className="flex-1 p-1 outline-none"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyDown}
//           />
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-4">
//         <button
//           onClick={handlePublish}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Publish Job
//         </button>
//         <button
//           onClick={handleDraft}
//           className="bg-gray-500 text-white px-4 py-2 rounded"
//         >
//           Save as Draft
//         </button>
//       </div>
//     </div>
//   );
// }

// export default PostJob;
