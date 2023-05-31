"use client"
import React, { useState } from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import {BiWifi2} from 'react-icons/bi'

const WiFi = () => {
  const [isSelected, setIsSelected] = useState(false) 
  return(
      <div>
      <div className='m-2 p-2 bg-white flex flex-col border-2 border-neutral-400'>
          <div className='flex flex-row text-sm border-b-2 border-b-slate-400 py-3 px-2'>
              <p className='mr-1'>
                  Connect to the Wi-fi hotspot exposed by your DAppNode using your credentials. More information at:
              </p>
              <a href="https://www.w3schools.com" className='flex flex-row text-cyan-500' target='none'>
                  <BsInfoCircle width={40} height={40} className='mt-1'/>
                  How to connect to DAppNode Wifi
              </a> 
          </div>
          <div className='flex flex-row justify-between'>
              <div className='flex flex-row'>
                  <p className='m-2 text-sm font-semibold bg-cyan-500 rounded-lg p-1 text-white'>Running</p>
                  <p className='flex flex-row mt-2'><BiWifi2 className='m-1'/>Wifi</p>
              </div>
              <div onClick={() => setIsSelected(!isSelected)} className= {("flex w-16 h-8 bg-gray-600 m-2 mb-0 rounded-full", {
                  'bg-green-500': isSelected
              })}>
                  <span className={('h-7 w-7 m-0.5 bg-white rounded-full', {
                      'ml-8': isSelected
                  })} ></span>    
              </div>
              
          </div>
      </div>
      <div className='bg-white flex flex-col border-2 border-neutral-300 m-2 text-left'>
          <h2 className='m-2'>Change the WIFI credentials</h2>
          <div className='m-2'>
              <h2 className="font-light">SSID</h2>
              <input type="text" className='w-full border-2 border-stone-300 p-1'/>
          </div>
          <div className='m-2'>
              <h3>New Password</h3>
              <input type="password" placeholder='password' className='border-2 border-stone-300 w-full p-1' />
          </div>
          <div className='m-2'>
              <h3>Confirm new Password</h3>
              <input type="password" placeholder='type the password again' className='w-full p-1 border-2 border-stone-300'/>
          </div>
          <div className=' mx-2 mb-2'>
              <button className='text-white bg-cyan-500 rounded-md p-1'>Change credentials</button>
          </div>
      </div>
      </div>
  )  
}

export default WiFi
