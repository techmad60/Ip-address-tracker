// IpAddressInfo.jsx
import React from 'react';

const IpAddressInfo = ({ ipInfo }) => {
  console.log('ipInfo:', ipInfo);

  return (
    <>
      {ipInfo && ipInfo.ip ? (
        <div className='bg-white flex flex-col justify-center self-center w-full rounded-xl border-2 p-5'>
          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>IP ADDRESS</p>
            <p className='text-2xl font-medium'>{ipInfo.ip}</p>
          </div>

          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>LOCATION</p>
            <p className='text-2xl font-medium'>{ipInfo.location.region}, {ipInfo.location.country}</p>
          </div>

          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>TIMEZONE</p>
            <p className='text-2xl font-medium'>{ipInfo.location.timezone}</p>
          </div>

          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>ISP</p>
            <p className='text-2xl font-medium'>{ipInfo.isp}</p>
          </div>
        </div>
      ) : (
        <div className='loading-spinner absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
      )}
    </>
  );
};

export default IpAddressInfo;
