import { IconFishHook } from "@tabler/icons-react";
import React from "react";
import SignUp from "../SignupLogin/SignUp";
import Login from "../SignupLogin/Login";
import { useLocation } from "react-router-dom";
function SignupPage() {

    const location =useLocation()


    return (

        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden ">

            <div className={`w-full h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=="/sign-up"?'-translate-x-1/2':'-translate-x-0'}`}>
                <Login />
                <div className={`w-1/2 h-full transition-all ease-in-out duration-1000 bg-mine-shaft-900  ${location.pathname=="/sign-up"?'rounded-r-full':'rounded-l-full'}  flex flex-col items-center justify-center`}>

                    <div className="flex items-center text-bright-sun-400 ">
                        <IconFishHook className="w-16 h-16" stroke={2.5} />

                        <h1 className='font-bold text-6xl'>JobHook</h1>
                    </div>

                    <div className="text-2xl text-mine-shaft-300 font-semibold">Find job made for you</div>

                </div>


                <SignUp />


            </div>


        </div>
    )
}

export default SignupPage;