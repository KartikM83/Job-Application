import React from "react";
import SearchBar from "../FindJobs/SearchBar";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Jobs from "../FindJobs/Jobs";



function FindJobs(){


    return(

        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">

            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    mx: 3,
                    bgcolor: 'background.paper',
                    width: '96.5%',
                    color: 'text.secondary',
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>
            <SearchBar />
            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    mx: 3,
                    bgcolor: 'background.paper',
                    width: '96.5%',
                    color: 'text.secondary',
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>
            <Jobs />
            
        </div>
    )
}

export default FindJobs;