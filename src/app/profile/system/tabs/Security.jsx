import React from 'react'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'

const Security = () => {
  return (
    <div>
     
     <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
      <div className='py-5 border-b border-gray-400 flex justify-start items-center gap-3'>
      <BsFillInfoCircleFill className='w-5 h-5  text-red-600'/>
        <span>Sme issues require your attention</span>
      </div>
      <div className='mt-4'>
      <span className=' text-sm flex justify-start items-center gap-2'> <RxCross2 className='w-5 h-5 text-red-700'/>Change host user password</span>
      <span className=' text-sm flex justify-start items-center gap-2'> <RxCross2 className='w-5 h-5 text-red-700'/>Change WiFi defualt password</span>
      </div>
     </div>

    
     <h1 className="my-4 text-2xl">Change host user Password</h1>
      <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p className="text-sm  text-gray-500 mb-2">Please change the host pasword. The current pasword is the factory inseucre default. Changing it to a strong password will protect your EriumNode from external attackers.</p>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">Current Password</h2>
          <input
            type="text"
            // onChange={(e)=> setCurrentPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">New Password</h2>
          <input
            type="newPassword"
            // onChange={(e)=> setNewPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">
            Confirm new Password
          </h2>
          <input
            type="newPassword"
            // onChange={(e)=> setPasswordConfirm(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <button className="text-white bg-gray-400 text-sm font-semibold hover:bg-blue-400 rounded-md p-2 "
          // onClick={()=>handleSubmit()}
          >
            Change Password
          </button>
        </div>
      </div>


      <h1 className="my-4 text-2xl">Change WiFI default Password</h1>
      <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p className="text-sm  text-gray-500 mb-2">Please chainge tha WIFI credentials. The current password is the factory insecure default. changin it to a strong pasword will protect your EriumNode from external attackers.</p>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">Current Password</h2>
          <input
            type="text"
            // onChange={(e)=> setCurrentPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">New Password</h2>
          <input
            type="newPassword"
            // onChange={(e)=> setNewPassword(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <h2 className="font-normal text-gray-400 mb-2">
            Confirm new Password
          </h2>
          <input
            type="newPassword"
            // onChange={(e)=> setPasswordConfirm(e.target.value)}
            className="w-full outline-none text-xs rounded p-2 border border-stone-300"
          />
        </div>
        <div className="mb-4">
          <button className="text-white bg-gray-400 text-sm font-semibold hover:bg-blue-400 rounded-md p-2 "
          // onClick={()=>handleSubmit()}
          >
            Change Password
          </button>
        </div>
      </div>


      <h1 className="my-4 text-2xl">Change WiFI default Password</h1>
      <div className="bg-[#fff] flex flex-col border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
        <p className='text-sm'>Keep your host updated by performing host updates of outdated libraries and kernel</p>
      
        <button className="w-32 text-gray-500 border mt-4 border-gray-400 text-sm font-semibold rounded-md p-2 ">
            Host Update
          </button>
      </div>
    </div>
  )
}

export default Security