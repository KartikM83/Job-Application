import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

const DarkModeSwitch = styled((props) => (
  <Switch
    disableRipple
    icon={
      <div className="flex items-center justify-center w-full h-full  p-0.5 rounded-full">
        <IconSun stroke={2.5} style={{ width: 18, height: 18 }} className='text-bright-sun-400'/>
      </div>
    }
    checkedIcon={
      <div className="flex items-center justify-center w-full h-full p-0.5 rounded-full">
        <IconMoonStars stroke={2.5} style={{ width: 18, height: 18, }} className='text-sky-400' />
      </div>
    }
    {...props}
  />
))(({ theme }) => ({
  width: 50,
  height: 28,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(22px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#454545',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'transparent',
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 ,
    backgroundColor: '#4f4f4f',
    opacity: 1,
  },
}));

export default DarkModeSwitch;
