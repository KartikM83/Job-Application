
import { Box, Divider } from "@mui/material";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

function CompanyPage(){

    const navigate =useNavigate();


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
            {/* <Link to="/find-jobs">
            <div > */}
                
                <button onClick={()=>navigate(-1)} className="w-fit px-3 box-border text-bright-sun-400 bg-[rgba(255,215,0,0.1)] font-semibold flex justify-center py-2 rounded-md flex gap-2" type="submit"> <IconArrowLeft stroke={2} />  Back</button>
            {/* </div>
            </Link> */}


            <div className="flex gap-5 mt-8 ">
                <Company />
                <SimilarCompanies />
            </div>

           


         
            
           
           



          
            
           
            
        </div>
    )
}

export default CompanyPage;