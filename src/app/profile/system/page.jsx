"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Info from './tabs/Info'


const page = () => {
    const router = useRouter()
    const[active, setActive] = useState('Info')

    
  return (
    
        <div className="w-full p-10 text-gray-800 ">
          <h1 className="w-full text-3xl font-medium">System</h1>

          <div className="flex flex-row justify-center gap-4 text-black text-center">
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Info"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Info")}
            >
              {" "}
              Info
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "AutoUpdate"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("AutoUpdate")}
            >
              {" "}
              Auto Update
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Profile"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Profile")}
            >
              {" "}
              Profile
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Power"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Power")}
            >
              Power
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Notification"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Notification")}
            >
              Notification
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Network"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Network")}
            >
              Network
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Updates"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Updates")}
            >
              Updates
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Peer"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Peer")}
            >
              Peer
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Security"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Security")}
            >
              Security
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Hardware"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Hardware")}
            >
              Hardware
            </button>
            <button
              className={`m-2 align-middle text-lg  ${
                active === "Adhvance"
                  ? "border-b-4 font-semibold border-blue-400"
                  : ""
              }`}
              onClick={() => setActive("Adhvance")}
            >
              Adhvance
            </button>
          </div>
          <div className='mt-5 h-[75vh] overflow-auto scrollbar-none'>
                      {
                      // active === 'AutoDignose'?
                      //   <AutoDignose/>:
                      //   active === 'Report'?
                      //   <Report/>:
                      //   active === 'Port'?
                      //   <Port/>:
                      //   active === 'Activity'?
                      //   <Activity/>:
                        // ''
                        }

                        <Info/>
                    </div>

        </div>

  );
}

export default page