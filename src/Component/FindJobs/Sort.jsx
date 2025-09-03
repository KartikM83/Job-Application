import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relavence', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

const Sort = () => {
  const [selectedItem, setSelectedItem] = useState('Relavence');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    handleClose();
  };

  return (
    <div >
      <Button variant="outlined" onClick={handleClick}>
        <div className='flex gap-3 items-center'>
          <div className='text-mine-shaft-300 text-xs'>{selectedItem}</div>
          <IconAdjustments stroke={2} />
        </div>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 0.5,
            border: '1px solid #5d5d5d',
            mt:0.5  
            
          },
        }}
      >
        {opt.map((item, index) => (
          <MenuItem sx={{ fontSize: '12px' }} key={index} onClick={() => handleSelect(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>

    </div>
  );
};

export default Sort;
