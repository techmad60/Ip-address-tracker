import { useState } from 'react'
import './App.css'

function App() {
  return (
  
    <div className='bg-mobile bg-no-repeat tracking-wider px-6'>
      <div className='flex flex-col text-center'>
        <h1 className='text-white   text-2xl py-5'>IP Address Tracker</h1>
        
        <div className='flex justify-center self-center '>
          <input type="number" className='p-4  rounded-l-xl text-xl w-full'/>
          <button className='bg-black p-5 rounded-r-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
          </button>
        </div>

        <div className='bg-white flex flex-col justify-center self-center  w-full rounded-xl mt-7 border-2 p-5'>
          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>IP ADDRESS</p>
            <p className='text-2xl font-medium'>Papa</p>
          </div>
         
          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>LOCATION</p>
            <p className='text-2xl font-medium'>Papa</p>
          </div>

          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>TIMEZONE</p>
            <p className='text-2xl font-medium'>Papa</p>
          </div>

          <div className='py-2'>
            <p className='text-xs text-gray-500 tracking-widest font-medium'>ISP</p>
            <p className='text-2xl font-medium'>Papa</p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default App
