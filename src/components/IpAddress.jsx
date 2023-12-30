// IpAddress.jsx
import React, { useState } from 'react';
import axios from 'axios';

const IpAddress = ({ onIpInfoChange }) => {
  const [ipAddress, setIpAddress] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_ShgXbQt8FbEd0qXYHS7sRDgIK4VDR&ipAddress=${ipAddress}`);
      const ipInfo = response.data;
  
      console.log('IP Info Response:', ipInfo);
      if (onIpInfoChange) {
        onIpInfoChange(ipInfo);
      }
    } catch (error) {
      console.error('Error fetching IP information:', error.message);
    }
  };
  

  // Function to handle input change
  const handleInputChange = (e) => {
    setIpAddress(e.target.value);
  };

  return (
    <div className='flex justify-center self-center lg:w-1/2 mb-24 lg:mb-28'>
      <input
        type="text"
        value={ipAddress}
        onChange={handleInputChange}
        className='p-4 rounded-l-xl text-xl w-full outline-none'
        placeholder="Search for any IP Address or domain"
      />
      <button
        onClick={handleSearch}
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
