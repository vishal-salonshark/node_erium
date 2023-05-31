"use client"
import React, { useState } from 'react'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoIosWifi} from 'react-icons/io'

const LocalNetwork = () => {
    const [isSelected, setIsSelected] = useState(false)   
    return (
      <div className='mt-5 text-gray-800'>
          <div className='p-2 bg-white flex flex-col rounded border border-neutral-300'>
              <div className='flex flex-row gap-2 pb-5 justify-start items-center text-sm border-b border-b-slate-200 py-3 px-2'>
                  <p className=''>
                      If you are connected to the same router as your EriumNode you can use this page at 
                      <a href="" className='mx-1 text-blue-400'> http://eriumnode.local</a>
                      Learn more about the local network proxy at : 
                  </p>
                  <a href="" className='flex flex-row gap-3 justify-start items-center font-light text-blue-400' target='none'>
                      <BsInfoCircleFill className='w-5 h-5'/>
                      How to connect to EriumNode Local Network Proxy
                  </a> 
              </div>
              <div className='flex flex-row justify-start items-center p-2'>
                  <div className='flex flex-row justify-start gap-3  items-center'>
                  <p className=' text-xs font-semibold bg-cyan-400 h-4 rounded px-1 text-white'>RUNNING</p>
                  <IoIosWifi className='m-1 w-5 h-5'/>
                  <p className='text-base font-normal'>Local Network proxy</p>
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
      </div>
    )
  }

export default LocalNetwork
