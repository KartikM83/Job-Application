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
