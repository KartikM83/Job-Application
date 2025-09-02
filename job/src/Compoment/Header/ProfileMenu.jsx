import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Divider } from '@mui/material';
import { IconFileText, IconLogout2, IconMessageCircle, IconMoon, IconTrash, IconUserCircle } from '@tabler/icons-react';
import DarkModeSwitch from './MaterialUISwitch';
import { Link } from 'react-router-dom';


function ProfileMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}


            <div className='cursor-pointer flex items-center gap-3' onClick={handleClick}>
                <h1 className='text-md'>Kartik</h1>
                <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100205.jpg?t=st=1743239109~exp=1743242709~hmac=e66f3eb614b638f5ef6176a4c26dfae2b35d8e9320d1aa8959d9b7ab36a53301&w=826" sx={{ width: 40, height: 40 }} />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

                PaperProps={{sx: { mt:1, mx:-5, borderRadius: 0,border: '2px solid #5d5d5d', backgroundColor:'#2d2d2d' },}}
            >   
                <Link to="/profile">
                <MenuItem  sx={{ minWidth: '180px', '&:hover': {backgroundColor: '#3d3d3d', } ,fontWeight:300 }} className="flex gap-3" onClick={handleClose}><IconUserCircle className='w-5 h-5'/> Profile</MenuItem>
                </Link>
                <MenuItem sx={{ minWidth: '180px', '&:hover': {backgroundColor: '#3d3d3d', } ,fontWeight:300 }} className="flex gap-3"  onClick={handleClose}><IconMessageCircle className='w-5 h-5'/>   Message</MenuItem>
                <MenuItem sx={{ minWidth: '180px', '&:hover': {backgroundColor: '#3d3d3d', } ,fontWeight:300 }} className="flex gap-3"  onClick={handleClose}><IconFileText className='w-5 h-5'/> Resume</MenuItem>
                <MenuItem sx={{ minWidth: '220px', '&:hover': { backgroundColor: '#3d3d3d' }, display: 'flex', alignItems: 'center', justifyContent: 'space-between',fontWeight:300  }}><div className="flex gap-3 items-center"><IconMoon className="w-5 h-5" /> Dark Mode</div><DarkModeSwitch defaultChecked /></MenuItem>
                <Divider orientation="horizontal" variant="middle" flexItem sx={{ borderColor: '#3d3d3d', borderBottomWidth: '2px' }} />
                <MenuItem sx={{ minWidth: '180px',color:'red', '&:hover': {backgroundColor: '#3d3d3d'  }, fontWeight:400}} className="flex gap-3 "  onClick={handleClose}><IconLogout2 className='w-5 h-5 text-red-600'/> Logout</MenuItem>

            
            </Menu>
        </div>
    );
}

export default ProfileMenu;