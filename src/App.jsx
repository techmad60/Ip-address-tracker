// App.jsx
import React, { useState, useEffect } from 'react';
import IpAddress from './components/IpAddress';
import IpAddressInfo from './components/IpAddressInfo';
import "leaflet/dist/leaflet.css";
import axios from 'axios';

function App() {
    const [ipInfo, setIpInfo] = useState(null);
  
    useEffect(() => {
      const fetchIpInfo = async () => {
        try {
          const response = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_ShgXbQt8FbEd0qXYHS7sRDgIK4VDR`);
          console.log('API Response:', response.data);
          setIpInfo(response.data);
        } catch (error) {
          console.error('Error fetching IP information:', error.message);
        }
      };
    
      fetchIpInfo();
    }, []);

  return (
    <div className='bg-mobile bg-no-repeat tracking-wider px-6'>
      <div className='flex flex-col text-center'>
        <h1 className='text-white text-2xl py-5'>IP Address Tracker</h1>
        
        <IpAddress />
        
        <IpAddressInfo ipInfo={ipInfo}/>
      </div>
    </div>
  );
}

export default App;
