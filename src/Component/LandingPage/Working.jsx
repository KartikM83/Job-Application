import React from 'react';
import { work } from '../Data/Data';

// Import images
import Girl from '../../assets/Working/Girl.png';
import AvatarImg from '../../assets/Avatar/avatar.png';


function Working() {
  return (
    <div className="mt-20 pb-5">
      <div className="text-mine-shaft-100 text-4xl font-semibold text-center mb-3">
        How It <span className="text-bright-sun-400">Works</span>
      </div>
      <div className="text-xl text-mine-shaft-100 mx-auto w-1/2 text-center mb-12">
        Effortlessly navigate through the process and land your dream job.
      </div>

      <div className="flex items-center relative">
        {/* Left Image */}
        <div className="w-[50%] px-16">
          <img className="h-[30rem]" src={Girl} alt="Working Girl" />
        </div>

        {/* Avatar Box */}
        <div className="w-[10%] flex flex-col items-center border-bright-sun-400 border-2 rounded-2xl px-3 py-2 backdrop-blur-md absolute top-[15%] left-[28%]">
          <div className="w-16 h-16 bg-red-600 rounded-full overflow-hidden">
            <img className="w-full h-full object-cover" src={AvatarImg} alt="Avatar" />
          </div>
          <div>
            <div className="text-mine-shaft-100 text-center font-bold">Complete your profile</div>
            <div className="text-mine-shaft-100 text-center text-sm">70% Completed</div>
          </div>
        </div>

        {/* Right Work Steps */}
        <div className="w-[50%] flex flex-col gap-5 items-end">
          {work.map((works, index) => (
            <div key={index} className="w-[70%] flex gap-2 items-center">
              <div className="w-20 h-20 rounded-full bg-bright-sun-300 p-3">
                <img
                  className="w-full h-full object-cover"
                  src={works.img}
                  alt={works.name}
                />
              </div>
              <div>
                <div className="font-bold text-lg text-mine-shaft-100">{works.name}</div>
                <div className="text-md text-mine-shaft-100">{works.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Working;
