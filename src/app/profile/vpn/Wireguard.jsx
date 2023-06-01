
import {BsInfoCircleFill} from 'react-icons/bs'
import {MdDelete} from 'react-icons/md'

const Wireguard = () => {
    return (
        <div className='w-full mt-5'>
            <div className='flex flex-row justify-start items-center text-sm'>
                Create a VPN profile for each of your devices(laptop, phone)so you can access your EriumNode from an external network. Learn more about VPN at: 
                <BsInfoCircleFill className='m-1 w-5 h-5 fill-blue-400'/>
                <a href="" className=" text-xs text-blue-400">How to connect to your EriumNode VPN</a>
            </div>
            <div className='flex flex-row mt-4'>
                <input type="text" placeholder="Devices's unique name" className='p-2 outline-none text-sm border rounded-l border-gray-300 w-11/12 ' />
                <button className='p-1 bg-blue-400 text-white w-1/12 rounded-r'>Add device</button>
            </div>
            <div className='flex flex-col bg-white border rounded border-gray-300 justify-between p-1 mt-4'>
                <div className='flex w-full text-xs px-2 justify-between items-center'>
                    <label className='m-1 w-16 text-neutral-500'>Name</label>
                    <div className='flex gap-2 justify-end items-center'>
                    <label className='mx-2 w-16 text-neutral-500'>Credentials</label>
                    <label className='mx-2 w-16 text-neutral-500'>Remove</label>
                    </div>
                </div>

                <div className='flex w-full  px-2 justify-between items-center'>
                    <label className='m-1 text-base text-gray-800'>dappnode_admin</label>
                    <div className='flex gap-2 justify-end items-center'>
                    <label className='m-1 w-20'>
                    <button className='border text-sm border-gray-300 text-gray-800 p-1 rounded'>Get Link</button>
                    </label>
                    <label className='m-1 w-16 text-center'>
                    <MdDelete className='m-2 w-6 h-6 text-neutral-500'/>
                    </label>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  export default Wireguard