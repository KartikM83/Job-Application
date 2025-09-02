import { Box, Checkbox, IconButton, InputAdornment, TextField, FormControlLabel, Button, RadioGroup, Radio } from "@mui/material";
import { IconLock, IconMail, IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const form ={
    name:"",
    email:"",
    password:"",
    confirmpassword:"",
    accountType:"APPLICANT",
}



function SignUp() {


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [value, setValue] = useState(false );
    const [selectedValue, setSelectedValue] = useState('APPLICANT');
    const [data,setData] =useState(form);


    const handleChange=(event)=>{
        console.log(event.target); 
    }




    return (

        <div className="w-1/2 h-full flex flex-col justify-center px-28 gap-3 "  >

          

            <div className="text-2xl font-semibold">Create Account</div>

            {/* // Name____________________________________________________________ */}
            <div className="flex flex-col ">
                <label  htmlFor="full-name" className="text-mine-shaft-100">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '100%' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField value={data.name} onChange={handleChange}  placeholder="Your Name" variant="outlined" sx={{ '& .MuiInputLabel-asterisk': { color: 'red', fontSize: '1.2rem', }, }} />

                </Box>
            </div>


            {/* //Email____________________________________________________ */}


            <div className="flex flex-col ">
                <label htmlFor="full-name" className="text-mine-shaft-100">
                    Your Email <span className="text-red-500">*</span>
                </label>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '100%' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField value={data.email} onChange={handleChange}  placeholder="Your Email" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start"><IconMail className="text-mine-shaft-100" /></InputAdornment> }} />

                </Box>
            </div>


            {/* //Password_____________________________________________________________________ */}

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-mine-shaft-100">
                    Password <span className="text-red-500">*</span>
                </label>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '100%' } }}
                    noValidate
                    autoComplete="off"
                >
                <TextField value={data.password} onChange={handleChange}  type={showPassword ? 'text' : 'password'} placeholder="Password" variant="outlined" 
                autoComplete="current-password" InputProps={{ startAdornment: (<InputAdornment position="start"><IconLock 
                className="text-mine-shaft-100" /></InputAdornment>), endAdornment: (<InputAdornment position="end"><IconButton 
                onClick={() => setShowPassword(prev => !prev)} edge="end">{showPassword ? <IconEyeOff 
                className="text-mine-shaft-100" /> : <IconEye className="text-mine-shaft-100" />}</IconButton></InputAdornment>) }} />

                </Box>
            </div>


            {/* Confirm Password_____________________________________________________________________ */}

            {/* Confirm Password Field */}
            <div className="flex flex-col gap-2">
                <label htmlFor="confirm-password" className="text-mine-shaft-100">
                    Confirm Password <span className="text-red-500">*</span>
                </label>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '100%' } }}
                    noValidate
                    autoComplete="off"
                >
                <TextField value={data.confirmpassword} onChange={handleChange} type={showConfirm ? 'text' : 'password'} placeholder="Confirm Password" 
                variant="outlined" autoComplete="current-password" InputProps={{ startAdornment: (<InputAdornment 
                position="start"><IconLock className="text-mine-shaft-100" /></InputAdornment>), 
                endAdornment: (<InputAdornment position="end"><IconButton onClick={() => setShowConfirm(prev => !prev)} 
                edge="end">{showConfirm ? <IconEyeOff className="text-mine-shaft-100" /> : <IconEye className="text-mine-shaft-100" />}</IconButton></InputAdornment>) }} />

                </Box>
            </div>





           <div className="flex flex-col gap-1">
            <label htmlFor="">Are You?</label>
             <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        row
        name="radio-buttons-group"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <FormControlLabel value="APPLICANT" control={<Radio />} label="Applicant" sx={{ml:0, px:4 ,py:0.5 ,border:1,  borderColor: selectedValue === 'APPLICANT' ? '#ffbd20' : '#454545',borderRadius:0.5,
            backgroundColor: selectedValue === 'APPLICANT' ? '#ffbd200d' : '#2d2d2d'
                    
        }}/>
        <FormControlLabel value="EMPLOYER" control={<Radio />} label="Employer"sx={{ml:0, px:4 ,py:0.5 ,border:1, borderColor: selectedValue === 'EMPLOYER' ? '#ffbd20' : '#454545',borderRadius:0.5,
             backgroundColor: selectedValue === 'EMPLOYER' ? '#ffbd200d' : '#2d2d2d'
        }} />
      
      </RadioGroup>
           </div>

            <FormControlLabel control={<Checkbox />} label={<> I Accept{' '} <Link className="text-bright-sun-400" href="/terms" target="_blank" underline="hover"> terms & conditions</Link> </>
            }
            />

            <Button variant="contained" sx={{ color: 'black' }}>Sign up</Button>

            <div className="mx-auto">Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline"  >Login</Link></div>



        </div>
    )
}

export default SignUp;