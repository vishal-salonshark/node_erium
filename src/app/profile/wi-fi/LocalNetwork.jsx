"use client"
import React, { useState } from 'react'
import {BsInfoCircle} from 'react-icons/bs'
import {BiWifi2} from 'react-icons/bi'

const LocalNetwork = () => {
    const [isSelected, setIsSelected] = useState(false)   
    return (
      <div className='flex'>
          <div className='m-2 p-2 bg-white flex flex-col border-2 border-neutral-400'>
              <div className='flex flex-row text-sm border-b-2 border-b-slate-400 py-3 px-2'>
                  <p className='mr-1'>
                      If you are connected to the same router as your DAppNode you can use this page at 
                      <a href="https://www.w3schools.com" className='text-cyan-500'> http://dappnode.local.</a>
                      Learn more about the local network proxy at: 
                  </p>
                  <a href="https://www.w3schools.com" className='flex flex-row text-cyan-500' target='none'>
                      <BsInfoCircle width={40} height={40} className='mt-1'/>
                      How to connect to DAppNode Local Network Proxy
                  </a> 
              </div>
              <div className='flex flex-row justify-between'>
                  <div className='flex flex-row'>
                      <p className='m-2 text-sm font-semibold bg-cyan-500 rounded-lg p-1 text-white'>Running</p>
                      <p className='flex flex-row mt-2'><BiWifi2 className='m-1'/>Local Network proxy</p>
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
