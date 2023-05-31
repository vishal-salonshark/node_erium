"use client"
import React, { useState } from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoIosWifi} from 'react-icons/io'

const WiFi = () => {
    // http://localhost:3000/api/changeWifiCredentials
  const [isSelected, setIsSelected] = useState(false) 
  return(
      <div>
      <div className='mt-5 p-2 bg-[#fff] flex flex-col rounded border text-gray-800 border-neutral-300'>
          <div className='flex flex-row text-sm font-normal gap-4 pb-5 border-b border-b-slate-200 py-3 px-2'>
              <p className=''>
                  Connect to the Wi-fi hotspot exposed by your EriumNode using your credentials. More information at:
              </p>
              <a href="" className='flex flex-row justify-start items-center gap-2 font-light text-blue-400' target='none'>
                  <BsInfoCircleFill className='w-5 h-5'/>
                  How to connect to EriumNode Wifi
              </a> 
          </div>
          <div className='flex flex-row justify-start items-center p-2'>
              <div className='flex flex-row justify-start gap-3 items-center'>
                  <p className=' text-xs font-semibold bg-cyan-400 h-4 rounded px-1 text-white'>RUNNING</p>
                  <IoIosWifi className='m-1 w-5 h-5'/>
                  <p className='text-base font-normal'>Wifi</p>
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

      <div className='bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left'>
          <h2 className='pb-4'>Change the WIFI credentials</h2>
          <div className='mb-4'>
              <h2 className="font-normal text-gray-400 mb-2">SSID</h2>
              <input type="text" className='w-full outline-none text-xs rounded p-2 border border-stone-300'/>
          </div>
          <div className='mb-4'>
              <h2 className="font-normal text-gray-400 mb-2">New Password</h2>
              <input type="password" className='w-full outline-none text-xs rounded p-2 border border-stone-300'/>
          </div>
          <div className='mb-4'>
              <h2 className="font-normal text-gray-400 mb-2">Confirm new Password</h2>
              <input type="password" className='w-full outline-none text-xs rounded p-2 border border-stone-300'/>
          </div>
          <div className='mb-4'>
              <button className='text-white bg-gray-400 text-sm font-semibold hover:bg-blue-400 rounded-md p-2 '>Change credentials</button>
          </div>
      </div>
      </div>
  )  
}

export default WiFi
