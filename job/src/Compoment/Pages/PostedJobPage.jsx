
import React from "react";
import { Box, Divider } from "@mui/material";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";


function PostedJobPage(){



    return(

        
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] px-5 ">

            <Box
                sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    padding: '0 20px 0 20px',
                    // mx: 3,
                    bgcolor: 'background.paper',
                    width: '100%',
                    color: 'text.secondary',
                    my:2,
                    '& svg': {
                        m: 1,
                    },
                }}
            >
                <Divider variant="middle" flexItem />

            </Box>


            
            
            <div className="flex gap-5">
                <PostedJob />
                <PostedJobDesc />
            </div>



         
            
           
           



          
            
           
            
        </div>
    )
}

export default PostedJobPage;