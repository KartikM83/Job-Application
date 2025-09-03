import React from "react";
import { IconSearch } from '@tabler/icons-react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

// Import images properly
import BoyImage from "../../assets/Boy.png";
import GoogleLogo from "../../assets/Google.png";

function DreamJob() {
    return (
        <div className="flex items-center px-16 text-white h-[89.5vh]">
            {/* Left Section */}
            <div className="left w-[45%] flex flex-col gap-8">
                <div className="text-[4.5rem] font-bold text-mine-shaft-100 leading-[1.15] [&>span]:text-bright-sun-400">
                    Find your <span>dream</span> <span>job</span> with us
                </div>
                <div className="text-mine-shaft-200 text-xl">
                    Good life begins with a good company. Start exploring thousands of jobs in one place.
                </div>

                <div className="flex gap-3 items-center">
                    <div className="w-[35%] flex flex-col bg-mine-shaft-900 p-3 rounded-lg">
                        <label className="text-sm" htmlFor="title">Job Title</label>
                        <input className="mt-2 w-[75%] text-xs text-mine-shaft-100 bg-transparent focus:outline-none" type="text" id="title" name="title" placeholder="Software Engineer" />
                    </div>

                    <div className="w-[35%] flex flex-col bg-mine-shaft-900 p-3 rounded-lg">
                        <label className="text-sm" htmlFor="type">Job Type</label>
                        <input className="mt-2 w-[75%] text-xs text-mine-shaft-100 bg-transparent focus:outline-none" type="text" id="type" name="type" placeholder="Full Time" />
                    </div>

                    <div className="bg-bright-sun-400 p-[14px] rounded-lg hover:bg-bright-sun-500 cursor-pointer">
                        <IconSearch className="w-10 h-10" stroke={2} />
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="Right w-[55%] flex justify-center relative">
                <div className="img w-[39rem]">
                    <img src={BoyImage} alt="Boy" />
                </div>

                {/* Job stats overlay */}
                <div className="absolute top-[47%] left-[75%] w-fit border-bright-sun-400 border-2 rounded-md px-5 py-2 backdrop-blur-md">
                    <div className="text-center text-mine-shaft-100 mb-2">10k+ got job</div>
                    <AvatarGroup
                        spacing="small"
                        renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                        total={4251}
                    >
                        <Avatar alt="Remy Sharp" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png" />
                        <Avatar alt="Travis Howard" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png" />
                        <Avatar alt="Agnes Walker" src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png" />
                    </AvatarGroup>
                </div>

                {/* Featured job overlay */}
                <div className="w-[30%] absolute top-[32%] left-[8%] border-bright-sun-400 border-2 rounded-md px-3 py-2 backdrop-blur-md flex flex-col gap-2">
                    <div className="flex gap-3">
                        <div className="w-11 h-11 bg-mine-shaft-900 rounded-lg p-1">
                            <img src={GoogleLogo} alt="Google Logo" />
                        </div>
                        <div>
                            <div className="text-md">Software Engineer</div>
                            <div className="text-xs">New York</div>
                        </div>
                    </div>
                    <div className="flex justify-between text-xs">
                        <div>1 day ago</div>
                        <div>120 Applicants</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DreamJob;
