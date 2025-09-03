import React from 'react'
import { IconFishHook , IconBell, IconSettings  } from '@tabler/icons-react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NavLinks from './NavLinks';
import { useLocation, Link } from 'react-router-dom';  // 🔹 Added Link
import ProfileMenu from './ProfileMenu';

function Header() {
  const location = useLocation();

  return (
    location.pathname !== "/sign-up" && location.pathname !== "/login" ? (
      <div className="w-full h-20 bg-mine-shaft-950 flex items-center justify-between px-8 text-white">
        
        {/* Logo with Link */}
        <Link to="/" className="flex items-center text-bright-sun-400 cursor-pointer">
          <IconFishHook className="w-10 h-10" stroke={2.5} />
          <h1 className='font-bold text-4xl'>JobHook</h1>
        </Link>

        {/* Navigation */}
        {NavLinks()}

        <div className='flex items-center justify-center gap-3'>
          <ProfileMenu />
          
          <div className="bg-mine-shaft-900 p-2 rounded-full">
            <Box sx={{ color: 'action.active' }}>
              <Badge 
                color="#ffbd20" 
                variant="dot" 
                sx={{
                  '.MuiBadge-dot': { 
                    transform: 'translate(-40%, 40%)',
                    backgroundColor: '#ffbd20',
                  },
                }}
              >
                <IconBell className="text-white h-7 w-7" stroke={1.5} />   
              </Badge>
            </Box>
          </div>

          <div className="bg-mine-shaft-900 p-2 rounded-full">
            <IconSettings className="h-7 w-7" stroke={1.5} />
          </div>
        </div>
      </div>
    ) : <></>
  )
}

export default Header;
