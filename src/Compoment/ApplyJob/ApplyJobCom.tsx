import {
    Backdrop,
    Box,
    Button,
    CircularProgress,
    Divider,
    FormLabel,
    TextareaAutosize,
    TextField,
    Alert,
    Typography,
  } from "@mui/material";
  import React, { useState, useRef, useEffect } from "react";
  import { styled } from '@mui/material/styles';
  import { IconCheck, IconPaperclip } from "@tabler/icons-react";
  import { useNavigate } from "react-router-dom";
  
  function ApplyJobCom() {
    const HiddenInput = styled('input')({ display: 'none' });
  
    const [fileName, setFileName] = useState('');
    const [preview, setPreview] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [sec, setSec] = useState(5);
    const [loadingOverlay, setLoadingOverlay] = useState(false);
  
    const navigate = useNavigate();
  
    const handleFileChange = (event) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const names = Array.from(files).map((f) => f.name).join(', ');
        setFileName(names);
      }
    };
  
    const handlePreview = () => {
      setPreview(!preview);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const handleSubmit = () => {
      setSubmit(true);
      setLoadingOverlay(true);
      setSec(5);
      let x = 5;
  
      const interval = setInterval(() => {
        x--;
        setSec(x);
        if (x === 0) {
          clearInterval(interval);
          setSubmit(false);
          setLoadingOverlay(false);
          navigate('/find-jobs');
        }
      }, 1000);
    };
  
    return (
      <>
        <div className="w-2/3 mx-auto">
          {/* Job Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 p-3 bg-mine-shaft-800 rounded-xl">
                <img src={`src/assets/Icons/Google.png`} alt="Company Logo" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="font-bold text-2xl">Software Engineer</div>
                <div className="text-md">Google • 3 days ago • 25 Applicants</div>
              </div>
            </div>
          </div>
  
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              padding: '0 20px',
              bgcolor: 'background.paper',
              width: '100%',
              color: 'text.secondary',
              my: 2,
              '& svg': {
                m: 1,
              },
            }}
          >
            <Divider variant="middle" flexItem />
          </Box>
  
          <div className="text-xl font-semibold mb-5">Submit Your Application</div>
  
          {/* Form Fields */}
          <div className="flex space-x-4 [&>*]:w-1/2 mb-5">
            <div className="flex flex-col gap-2">
              <FormLabel>Full Name</FormLabel>
              <TextField
                placeholder="Enter Full Name"
                InputProps={{
                  readOnly: preview,
                  sx: preview ? {
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    color: '#b0b0b0',
                    fontWeight: 600,
                  } : {},
                }}
                variant="outlined"
              />
            </div>
  
            <div className="flex flex-col gap-2">
              <FormLabel>Email</FormLabel>
              <TextField
                placeholder="Enter Email"
                type="email"
                variant="outlined"
                InputProps={{
                  readOnly: preview,
                  sx: preview ? {
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    color: '#b0b0b0',
                    fontWeight: 600,
                  } : {},
                }}
              />
            </div>
          </div>
  
          <div className="flex space-x-4 [&>*]:w-1/2 mb-5">
            <div className="flex flex-col gap-2">
              <FormLabel>Phone Number</FormLabel>
              <TextField
                placeholder="Enter Phone Number"
                variant="outlined"
                type="tel"
                inputProps={{ inputMode: "numeric", maxLength: 10 }}
                InputProps={{
                  readOnly: preview,
                  sx: preview ? {
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    color: '#b0b0b0',
                    fontWeight: 600,
                  } : {},
                }}
              />
            </div>
  
            <div className="flex flex-col gap-2">
              <FormLabel>Personal Website</FormLabel>
              <TextField
                placeholder="Enter Url"
                variant="outlined"
                type="url"
                InputProps={{
                  readOnly: preview,
                  sx: preview ? {
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    color: '#b0b0b0',
                    fontWeight: 600,
                  } : {},
                }}
              />
            </div>
          </div>
  
          <div className="flex flex-col gap-2 mb-5">
            <FormLabel>Attach Your CV</FormLabel>
            <label htmlFor="upload-file">
              <HiddenInput id="upload-file" type="file" multiple onChange={handleFileChange} disabled={preview} />
              <TextField
                variant="outlined"
                fullWidth
                value={fileName}
                placeholder="Your CV"
                onClick={() => document.getElementById('upload-file')?.click()}
                InputProps={{
                  readOnly: preview,
                  startAdornment: (
                    <IconPaperclip style={{ marginRight: 8, cursor: 'pointer' }} />
                  ),
                  sx: preview ? {
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                    color: '#b0b0b0',
                    fontWeight: 600,
                  } : {},
                }}
              />
            </label>
          </div>
  
          <div className="flex flex-col gap-2 mb-5">
            <FormLabel>Cover Letter</FormLabel>
            <TextareaAutosize
              minRows={4}
              readOnly={preview}
              style={{
                width: '100%',
                resize: 'none',
                backgroundColor: '#2d2d2d',
                color: preview ? '#b0b0b0' : '#fff',
                border: preview ? 'none' : '2px solid #555',
                outline: 'none',
                padding: '8px',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: preview ? 600 : 400,
              }}
              onFocus={(e) => {
                if (!preview) e.target.style.border = '2px solid #ffbd20';
              }}
              onBlur={(e) => {
                if (!preview) e.target.style.border = '2px solid #3d3d3d';
              }}
            />
          </div>
  
          {!preview ? (
            <button
              className="w-full px-3 text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold py-2 rounded-md flex justify-center gap-2 mb-5"
              onClick={handlePreview}
              type="submit"
            >
              Preview
            </button>
          ) : (
            <div className="flex gap-10">
              <Button
                onClick={handlePreview}
                variant="outlined"
                sx={{ width: '100%', border: '2px solid #ffbd20', color: '#ffbd20', fontSize: 16 }}
              >
                Edit
              </Button>
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{ width: '100%', background: 'rgba(255,215,0,0.1)', color: '#ffbd20', fontSize: 16 }}
              >
                Submit
              </Button>
            </div>
          )}
        </div>
  
        {/* Snackbar Alert */}
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-[1401]">
          <div className={`transition-all duration-300 ease-in-out transform ${submit ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
            <Alert
              severity="success"
            
              sx={{
                width: '400px',
                zIndex:1401,
                backgroundColor: '#2d2d2d',
                border: '1px solid #ffbd20',
                '& .MuiAlert-icon': { display: 'none' },
                '& .MuiAlert-action': { display: 'none' },
              }}
            >
              <div className="flex items-center gap-3">
                <IconCheck stroke={2} className="bg-bright-sun-1000 w-12 h-12 p-2 rounded-full text-white" />
                <div className="flex flex-col"> 
                  <div className="text-mine-shaft-100 font-semibold">Application Submitted</div>
                  <div className="text-mine-shaft-300">Redirecting to Find Jobs in {sec} second{sec !== 1 ? 's' : ''}...</div>
                </div>
              </div>
            </Alert>
          </div>
        </div>
  
        {/* Beautiful Backdrop Overlay */}
        <Backdrop
          open={loadingOverlay}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            color: '#fff',
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <CircularProgress color="third" thickness={4} size={60} />
            <Typography variant="h6" fontWeight={500}>
              Submitting Application...
            </Typography>
          </Box>
        </Backdrop>
      </>
    );
  }
  
  export default ApplyJobCom;
  