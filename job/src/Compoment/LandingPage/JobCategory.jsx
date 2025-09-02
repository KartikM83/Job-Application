import React from 'react';

import { jobCategory } from '../Data/Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';

function JobCategory() {
    return (
        <div className="mt-20 pb-5">
            <div className="text-mine-shaft-100 text-4xl font-semibold text-center mb-3">
                Browse <span className="text-bright-sun-400">Job </span> Category
            </div>
            <div className='text-xl text-mine-shaft-300 mx-auto w-[55%] text-center mb-16'>
                Explore diverse job opportunities tailored to your skills. Start your career journey today!
            </div>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
                spaceBetween={50} // Space between slides
                slidesPerView={5} // Number of slides visible at once (5 slides)
                loop={true} // Infinite loop
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    640: {
                        slidesPerView: 1, // For small screens, show 1 slide
                    },
                    768: {
                        slidesPerView: 2, // For medium screens, show 2 slides
                    },
                    1024: {
                        slidesPerView: 3, // For large screens, show 3 slides
                    },
                    1280: {
                        slidesPerView: 5, // For very large screens, show 5 slides
                    },
                }}
            >
                {
                    jobCategory.map((category, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-center w-68 border-bright-sun-400 border gap-2 p-5 my-5 transition duration-300 ease-in-out rounded-2xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_balck] !shadow-bright-sun-400  ">
                                <div className='p-2 bg-bright-sun-300 rounded-full object-cover'>
                                    <img className="w-8 h-8 object-cover" src={`src/assets/Category/${category.name}.png`} alt="" />
                                </div>
                                <div className='text-xl font-semibold text-mine-shaft-100'>{category.name}</div>
                                <div className='text-sm text-mine-shaft-300 text-center'>{category.desc}</div>
                                <div className='text-xl text-bright-sun-400'>{category.jobs}+ new job posted</div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default JobCategory;
