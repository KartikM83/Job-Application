import React from 'react';
import { jobCategory } from '../Data/Data';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import all category images
import ArtsDesign from '../../assets/Category/Arts & Design.png';
import ContentWriting from '../../assets/Category/Content Writing.png';
import CustomerSupport from '../../assets/Category/Customer Support.png';
import DataEntry from '../../assets/Category/Data Entry.png';
import DigitalMarketing from '../../assets/Category/Digital Marketing.png';
import Finance from '../../assets/Category/Finance.png';
import HumanResource from '../../assets/Category/Human Resource.png';
import Sales from '../../assets/Category/Sales.png';
import UIUX from '../../assets/Category/UI-UX Designer.png';
import WebDeveloper from '../../assets/Category/Web Developer.png';

// Map category names to images
const categoryImages = {
  'Arts & Design': ArtsDesign,
  'Content Writing': ContentWriting,
  'Customer Support': CustomerSupport,
  'Data Entry': DataEntry,
  'Digital Marketing': DigitalMarketing,
  'Finance': Finance,
  'Human Resource': HumanResource,
  'Sales': Sales,
  'UI-UX Designer': UIUX,
  'Web Developer': WebDeveloper,
};

function JobCategory() {
  return (
    <div className="mt-20 pb-5">
      <div className="text-mine-shaft-100 text-4xl font-semibold text-center mb-3">
        Browse <span className="text-bright-sun-400">Job </span> Category
      </div>
      <div className="text-xl text-mine-shaft-300 mx-auto w-[55%] text-center mb-16">
        Explore diverse job opportunities tailored to your skills. Start your career journey today!
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
      >
        {jobCategory.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center w-68 border-bright-sun-400 border gap-2 p-5 my-5 transition duration-300 ease-in-out rounded-2xl hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-400">
              <div className="p-2 bg-bright-sun-300 rounded-full">
                <img
                  className="w-8 h-8 object-cover"
                  src={categoryImages[category.name]}
                  alt={category.name}
                />
              </div>
              <div className="text-xl font-semibold text-mine-shaft-100">{category.name}</div>
              <div className="text-sm text-mine-shaft-300 text-center">{category.desc}</div>
              <div className="text-xl text-bright-sun-400">{category.jobs}+ new job posted</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default JobCategory;
