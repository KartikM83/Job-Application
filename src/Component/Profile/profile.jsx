import { IconMapPin, IconBriefcase, IconPencil, IconDeviceFloppy } from "@tabler/icons-react";
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ExpCard from "./ExpCard";
import CertificationCard from "./CertificationCard";
import { Chip, Fab, TextField } from "@mui/material";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";

import Banner from "../../assets/Profile/banner.jpg";
import Avatar from "../../assets/Avatar/avatar.png";

function Profile(props) {
  const select = fields;

  const [edit, setEdit] = useState([false, false, false, false, false]);
  const [about, setAbout] = useState('As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.');

  const handleEdit = (index) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  // Tags section
  const initialTags = ['React', 'SpringBoot', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MySQL', 'Python', 'Django', 'Figma', 'Sketch', 'Docker', 'AWS'];
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState(''); // Temporary input value

  // Handle adding tags when pressing Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      e.preventDefault(); // prevent Enter from creating a new line
      // Split input by commas, trim spaces, and add to the tags array
      const newTags = inputValue
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag !== '' && !tags.includes(tag)); // Avoid duplicates
      setTags([...tags, ...newTags]);  // Add new tags to the existing tags
      setInputValue(''); // Clear the input field after adding tags
    }
  };

  // Handle deleting tags
  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div className="w-5/6 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src={Banner} alt="" />
        <img className="rounded-full absolute w-48 h-48 -bottom-1/3 left-4 border-8 border-mine-shaft-950" src={Avatar} alt="" />
      </div>

      <div className="px-5 mt-20">
        <div className="flex justify-between items-end">
          <div className="text-3xl font-semibold">{props.name}</div>
          <div>
            <div onClick={() => handleEdit(0)}>
              {edit[0] ? <Fab color="primary" aria-label="edit"><IconDeviceFloppy /></Fab> : <Fab color="primary" aria-label="edit"><IconPencil /></Fab>}
            </div>
          </div>
        </div>

        {edit[0] ? (
          <>
            <div className="flex gap-10">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-[13px]">
              <div className="flex items-center text-xl gap-1"> <IconBriefcase stroke={2} className="w-5 h-5" /> {props.role} &#x2022; {props.company}</div>
            </div>
            <div className="flex text-lg text-mine-shaft-300 items-center gap-1">
              <IconMapPin stroke={2} className="w-5 h-5" />
              {props.location}
            </div>
          </>
        )}
      </div>

      <Box sx={{ display: 'inline-flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 2, padding: '0 20px 0 20px', mx: 1, bgcolor: 'background.paper', width: '99%', color: 'text.secondary', my: 2, '& svg': { m: 1 } }}>
        <Divider variant="middle" flexItem />
      </Box>

      {/* About Section */}
      <div className="px-5">
        <div className="text-3xl font-bold mb-5 flex justify-between">About
          <div onClick={() => handleEdit(1)}>
            {edit[1] ? <Fab color="primary" aria-label="edit"><IconDeviceFloppy /></Fab> : <Fab color="primary" aria-label="edit"><IconPencil /></Fab>}
          </div>
        </div>

        {edit[1] ? (
          <TextField multiline minRows={3} variant="outlined" placeholder="Enter about yourself..." fullWidth value={about} onChange={(event) => setAbout(event.currentTarget.value)} />
        ) : (
          <div className="text-md text-mine-shaft-300 text-justify">{about}</div>
        )}
      </div>

      <Box sx={{ display: 'inline-flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 2, padding: '0 20px 0 20px', mx: 1, bgcolor: 'background.paper', width: '99%', color: 'text.secondary', my: 2, '& svg': { m: 1 } }}>
        <Divider variant="middle" flexItem />
      </Box>

      {/* Skills Section */}
      <div className="px-5 mb-3">
        <div className="text-3xl font-bold mb-5 flex justify-between">Skills
          <div onClick={() => handleEdit(2)}>
            {edit[2] ? <Fab color="primary" aria-label="edit"><IconDeviceFloppy /></Fab> : <Fab color="primary" aria-label="edit"><IconPencil /></Fab>}
          </div>
        </div>

        {
            edit[2]?  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minHeight: '56px' }}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} onDelete={() => handleDelete(tag)} />
            ))}
            <TextField
              variant="standard"
              placeholder="Type tags and press Enter"
              value={inputValue}  // Control the TextField value with the inputValue state
              onChange={(e) => setInputValue(e.target.value)} // Update inputValue state on input change
              onKeyDown={handleKeyDown} // Trigger tag addition when Enter is pressed
              InputProps={{ disableUnderline: true }}
              sx={{ minWidth: 120, flexGrow: 1 }}
            />
          </Box>:   <div className="mt-3">
     
     <div className="flex flex-wrap gap-2 mt-2">
       {tags.map((tag, index) => (
         <div key={index} className="bg-bright-sun-400 bg-opacity-15 text-bright-sun-400 font-semibold px-3 py-1 rounded-3xl text-md">
           {tag}
         </div>
       ))}
     </div>
   </div>
        }

      

        {/* Display the tags below */}
     
      </div>

      <Box sx={{ display: 'inline-flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 2, padding: '0 20px 0 20px', mx: 1, bgcolor: 'background.paper', width: '99%', color: 'text.secondary', my: 2, '& svg': { m: 1 } }}>
        <Divider variant="middle" flexItem />
      </Box>

      {/* Experience Section */}
      <div className="px-5 mb-3">
        <div className="text-3xl font-bold mb-5 flex justify-between">Experience
          <div onClick={() => handleEdit(3)}>
            {edit[3] ? <Fab color="primary" aria-label="edit"><IconDeviceFloppy /></Fab> : <Fab color="primary" aria-label="edit"><IconPencil /></Fab>}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {props.experience.map((exp, index) => <ExpCard key={index} {...exp} edit={edit[3]}/>)}
        </div>
      </div>

      <Box sx={{ display: 'inline-flex', alignItems: 'center', border: '1px solid', borderColor: 'divider', borderRadius: 2, padding: '0 20px 0 20px', mx: 1, bgcolor: 'background.paper', width: '99%', color: 'text.secondary', my: 2, '& svg': { m: 1 } }}>
        <Divider variant="middle" flexItem />
      </Box>

      {/* Certification Section */}
      <div className="px-5 mb-3">
        <div className="text-3xl font-bold mb-5 flex justify-between">Certification
          <div onClick={() => handleEdit(4)}>
            {edit[4] ? <Fab color="primary" aria-label="edit"><IconDeviceFloppy /></Fab> : <Fab color="primary" aria-label="edit"><IconPencil /></Fab>}
          </div>
        </div>

        {props.certifications.map((certifications, index) => <CertificationCard key={index} {...certifications} />)}
      </div>
    </div>
  );
}

export default Profile;
