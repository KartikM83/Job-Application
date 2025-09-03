import { 
  Box, Checkbox, IconButton, InputAdornment, TextField, 
  FormControlLabel, Button, RadioGroup, Radio 
} from "@mui/material";
import { IconLock, IconMail, IconEye, IconEyeOff } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const form = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
  accountType: "APPLICANT",
};

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedValue, setSelectedValue] = useState("APPLICANT");
  const [data, setData] = useState(form);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  // ✅ API call for signup
  const handleSubmit = async () => {
    if (data.password !== data.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("/api/auth/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
        accountType: selectedValue,
      });

      alert("Signup successful!");
      navigate("/login"); // redirect to login page
    } catch (err) {
      alert("Signup failed: " + (err.response?.data?.message || "Server error"));
    }
  };

  return (
    <div className="w-1/2 h-full flex flex-col justify-center px-28 gap-3">
      <div className="text-2xl font-semibold">Create Account</div>

      {/* Full Name */}
      <div className="flex flex-col ">
        <label htmlFor="full-name" className="text-mine-shaft-100">
          Full Name <span className="text-red-500">*</span>
        </label>
        <Box component="form" sx={{ "& > :not(style)": { width: "100%" } }} noValidate autoComplete="off">
          <TextField 
            name="name" 
            value={data.name} 
            onChange={handleChange}  
            placeholder="Your Name" 
            variant="outlined" 
          />
        </Box>
      </div>

      {/* Email */}
      <div className="flex flex-col ">
        <label htmlFor="full-name" className="text-mine-shaft-100">
          Your Email <span className="text-red-500">*</span>
        </label>
        <Box component="form" sx={{ "& > :not(style)": { width: "100%" } }} noValidate autoComplete="off">
          <TextField 
            name="email"
            value={data.email} 
            onChange={handleChange}  
            placeholder="Your Email" 
            variant="outlined"
            InputProps={{ startAdornment: <InputAdornment position="start"><IconMail className="text-mine-shaft-100" /></InputAdornment> }} 
          />
        </Box>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-mine-shaft-100">
          Password <span className="text-red-500">*</span>
        </label>
        <Box component="form" sx={{ "& > :not(style)": { width: "100%" } }} noValidate autoComplete="off">
          <TextField 
            name="password"
            value={data.password} 
            onChange={handleChange}  
            type={showPassword ? "text" : "password"} 
            placeholder="Password" 
            variant="outlined" 
            autoComplete="current-password"
            InputProps={{
              startAdornment: <InputAdornment position="start"><IconLock className="text-mine-shaft-100" /></InputAdornment>,
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

      {/* Confirm Password */}
      <div className="flex flex-col gap-2">
        <label htmlFor="confirm-password" className="text-mine-shaft-100">
          Confirm Password <span className="text-red-500">*</span>
        </label>
        <Box component="form" sx={{ "& > :not(style)": { width: "100%" } }} noValidate autoComplete="off">
          <TextField 
            name="confirmpassword"
            value={data.confirmpassword} 
            onChange={handleChange}  
            type={showConfirm ? "text" : "password"} 
            placeholder="Confirm Password" 
            variant="outlined"
            autoComplete="current-password"
            InputProps={{
              startAdornment: <InputAdornment position="start"><IconLock className="text-mine-shaft-100" /></InputAdornment>,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirm((prev) => !prev)} edge="end">
                    {showConfirm ? <IconEyeOff className="text-mine-shaft-100" /> : <IconEye className="text-mine-shaft-100" />}
                  </IconButton>
                </InputAdornment>
              ),
            }} 
          />
        </Box>
      </div>

      {/* Account Type */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Are You?</label>
        <RadioGroup
          row
          name="accountType"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <FormControlLabel 
            value="APPLICANT" control={<Radio />} label="Applicant"
            sx={{ ml:0, px:4, py:0.5, border:1, borderColor: selectedValue === "APPLICANT" ? "#ffbd20" : "#454545",
              borderRadius:0.5, backgroundColor: selectedValue === "APPLICANT" ? "#ffbd200d" : "#2d2d2d" }}
          />
          <FormControlLabel 
            value="EMPLOYER" control={<Radio />} label="Employer"
            sx={{ ml:0, px:4, py:0.5, border:1, borderColor: selectedValue === "EMPLOYER" ? "#ffbd20" : "#454545",
              borderRadius:0.5, backgroundColor: selectedValue === "EMPLOYER" ? "#ffbd200d" : "#2d2d2d" }}
          />
        </RadioGroup>
      </div>

      {/* Terms */}
      <FormControlLabel 
        control={<Checkbox />} 
        label={<> I Accept <Link className="text-bright-sun-400" to="/terms" target="_blank" underline="hover"> terms & conditions</Link> </>} 
      />

      {/* Submit */}
      <Button variant="contained" sx={{ color: "black" }} onClick={handleSubmit}>
        Sign up
      </Button>

      <div className="mx-auto">
        Have an account? <Link to="/login" className="text-bright-sun-400 hover:underline">Login</Link>
      </div>
    </div>
  );
}

export default SignUp;
