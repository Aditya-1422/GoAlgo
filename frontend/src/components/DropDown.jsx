import React from 'react';

const DropDown = () => {
  return (
    <div className="group relative cursor-pointer">
      <div className="flex items-center justify-between space-x-1 border-black bg-[#004AAD]">
        <h1 className="menu-hover text-base font-medium text-white lg:mx-3">
          Analysis
        </h1>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path className='text-white' strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </div>
      <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
        <h1 className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          Sunday
        </h1>
        <h1 className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          Monday
        </h1>
        <h1 className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
          Tuesday
        </h1>
      </div>
    </div>
  );
};

export default DropDown;