import { 
    Box, Checkbox, IconButton, InputAdornment, TextField, Button 
} from "@mui/material";
import { IconLock, IconMail, IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", {
                email,
                password,
            });

            // Agar login successful hai
            if (response.data.token) {
                localStorage.setItem("token", response.data.token); // JWT token store
                navigate("/dashboard"); // dashboard ya home page pe le jao
            }
        } catch (err) {
            setError("Invalid email or password");
        }
    };

    return (
        <div className="w-1/2 h-full flex flex-col justify-center px-28 gap-3">
            <div className="text-2xl font-semibold">Login</div>

            <div className="flex flex-col">
                <label htmlFor="email" className="text-mine-shaft-100">
                    Your Email <span className="text-red-500">*</span>
                </label>
                <Box component="form" sx={{ '& > :not(style)': { width: '100%' } }} noValidate autoComplete="off">
                    <TextField
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconMail className="text-mine-shaft-100" />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-mine-shaft-100">
                    Password <span className="text-red-500">*</span>
                </label>
                <Box component="form" sx={{ '& > :not(style)': { width: '100%' } }} noValidate autoComplete="off">
                    <TextField
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                                        {showPassword ? (
                                            <IconEyeOff className="text-mine-shaft-100" />
                                        ) : (
                                            <IconEye className="text-mine-shaft-100" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <Button 
                variant="contained" 
                sx={{ color: "black" }} 
                onClick={handleLogin}
            >
                Login
            </Button>

            <div className="mx-auto">
                Don’t have an account?{" "}
                <Link to="/sign-up" className="text-bright-sun-400 hover:underline">
                    Sign Up
                </Link>
            </div>
        </div>
    );
}

export default Login;
