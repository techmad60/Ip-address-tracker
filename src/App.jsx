import React, { useState, useEffect } from 'react';
import IpAddress from './components/IpAddress';
import IpAddressInfo from './components/IpAddressInfo';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import axios from 'axios';

function App() {
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    const fetchIpDetails = async () => {
      try {
        const response = await axios.get(`
        https://geo.ipify.org/api/v2/country,city?apiKey=at_ShgXbQt8FbEd0qXYHS7sRDgIK4VDR&`);
        console.log('API Response:', response.data);
        setIpInfo(response.data);
      } catch (error) {
        console.error('Error fetching IP information:', error.message);
      }
    };

    fetchIpDetails();
  }, []);

  const handleIpInfoChange = (newIpInfo) => {
    setIpInfo(newIpInfo);
  };

  console.log('ipInfo:', ipInfo);

  return (
    <div className='bg-mobile sm:bg-desktop bg-contain bg-no-repeat tracking-wider '>
      <div className='flex flex-col text-center px-6'>
        <h1 className='text-white text-2xl py-5  '>IP Address Tracker</h1>

        <IpAddress onIpInfoChange={handleIpInfoChange} />
        <IpAddressInfo ipInfo={ipInfo} />
      </div>
      {ipInfo && ipInfo.location && (
          <MapContainer
            center={[ipInfo.location.lat, ipInfo.location.lng]}
            zoom={13}
            style={{ height: '100vh', width: '100%', zIndex: '10'}}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[ipInfo.location.lat, ipInfo.location.lng]}>
              <Popup>{`IP: ${ipInfo.ip}`}</Popup>
            </Marker>
          </MapContainer>
        )}
    </div>
  );
}

export default App;

  
