// IpAddress.jsx
import React, { useState } from 'react';

const IpAddress = ({ onIpInfoChange }) => {
  

  return (
    <div className='flex justify-center self-center'>
      <input
        type="text"
        className='p-4 rounded-l-xl text-xl w-full'
        placeholder="Enter IP Address"
      />
      <button
        className='bg-black p-5 rounded-r-xl'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/>
        </svg>
      </button>
    </div>
  );
};

export default IpAddress;
