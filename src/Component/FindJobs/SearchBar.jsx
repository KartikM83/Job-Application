import React from "react";
import MultiInput from "./MultiInput";
import { dropdownData } from "../Data/JobsData";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

// Styled Slider with value labels below
const BottomValueLabelSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-valueLabel': {
    top: '60px', // Pushes the label below the slider
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    '& *': {
      background: '#3d3d3d',
      color: 'inherit',
      padding :'6px'
    },
  },
}));

function SearchBar() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function valuetext(value) {
    return `${value} LPA`;
  }

  return (
    <div className="flex gap-3 px-6 py-4">
      {dropdownData.map((items, index) => (
        <React.Fragment key={index}>
          <div className="w-1/5 ">
            <MultiInput {...items} />
          </div>

          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: 'background.paper',
              color: 'text.secondary',
              '& svg': {
                m: 1,
              },
            }}
          >
            <Divider orientation="vertical" variant="middle" flexItem />
          </Box>
        </React.Fragment>
      ))}

      <div className="w-1/5">
        <div className="flex justify-between mb-2">
          <div>Salary</div>
          <div>&#8377; {value[0]} LPA - &#8377; {value[1]} LPA</div>
        </div>

        <Box sx={{ width: 250 }}>
          <BottomValueLabelSlider
            getAriaLabel={() => 'Salary range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            max={100}
          />
        </Box>
      </div>
    </div>
  );
}

export default SearchBar;
