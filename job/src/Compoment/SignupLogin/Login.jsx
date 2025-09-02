import { Box, Checkbox, IconButton, InputAdornment, TextField, FormControlLabel, Button } from "@mui/material";
import { IconLock, IconMail, IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
function Login() {


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);


    return (

        <div className="w-1/2 h-full flex flex-col justify-center px-28 gap-3" >

            <div className="text-2xl font-semibold">Create Account</div>
           

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
                    <TextField id="outlined-basic" placeholder="Your Email" variant="outlined" InputProps={{ startAdornment: <InputAdornment position="start"><IconMail className="text-mine-shaft-100" /></InputAdornment> }} />

                </Box>
            </div>

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
                    <TextField
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        variant="outlined"
                        autoComplete="current-password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconLock className="text-mine-shaft-100" />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                                        {showPassword ? <IconEyeOff className="text-mine-shaft-100" /> : <IconEye className="text-mine-shaft-100" />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </div>

           

         

            <Button variant="contained" sx={{ color: 'black' }}>Login</Button>

            <div className="mx-auto">Have an account? <Link to="/sign-up" className="text-bright-sun-400 hover:underline"  >Sign Up</Link></div>



        </div>
    )
}

export default Login;