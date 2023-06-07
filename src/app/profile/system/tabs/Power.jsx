import React from 'react'

const Power = () => {
  return (
    <div>
        <div className="bg-[#fff] flex flex-row justify-between border border-neutral-300 mt-5 p-4 rounded text-gray-800 text-left">
            <div className='w-1/2 ml-5 '>
                <span className='text-sm mb-2'>REBOOT HOST</span>
                <p  className='text-sm'>Only use this fuctionality as last resort and when all troubleshooting optios are exhausted.</p>

                <button className='p-2 px-4 text-sm font-medium border border-red-500 rounded-md text-red-500 my-4'>Reboot</button>
            </div>

            <div className='w-1/2  '>
                <span className='text-sm mb-2'>POWER OFF HOST</span>
                <p  className='text-sm'>Your machine will power off and you will not be able to access the Admin UI until you trun it back on.</p>

                <button className='p-2 px-4 text-sm font-medium border border-red-500 rounded-md text-red-500 my-4'>Power off</button>
            </div>
        </div>
    </div>
    
  )
}

export default Power