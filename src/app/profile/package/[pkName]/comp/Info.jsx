import React from "react";
import { AiFillBug, AiFillSetting, AiOutlinePauseCircle } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { RiRestartLine } from "react-icons/ri";

const Info = () => {
  return (
    <div className=" mt-20">
      <h1 className="text-3xl text-gray-500">Getting Started</h1>

      <div className="border border-gray-300 p-5 rounded bg-white mt-4">
        <h1 className="text-4xl text-gray-800">Geth(Execution Client)</h1>
        <div className="mt-2 flex flex-col text-gray-700 text-sm justify-start item-start">
          <p>Geth is now rady for the merge!</p>
          <br />
          <p>There are now tow RPC API's in the Execution Clients:</p>
          <br />
          <p className="ml-5">
            1.Querying API{" "}
            <small className="text-red-600 hover:underline">
              http://geth.eriumnode:8545
            </small>
            . Use this endpoint to query transactions on your node and connect
            your web3 wallet.{" "}
          </p>
          <p className="ml-5">
            2.Engine API{" "}
            <small className="text-red-600 hover:underline">
              http://geth.eriumnode:8551
            </small>
            . Use this endpoint to connect your Beacon Chain (Consensus Layer)
            client.
          </p>
          <br />
          <p>
            After the merge, if your execution client is not connected to a
            Consensus Layer client, you won't be able to use it to query your
            blockchain,nor will you be able to connect your wallet to it!{" "}
          </p>
        </div>
        <div className="w-full flex justify-end items-center">
          <button className="border-none bg-transparent text-gray-500 text-sm mx-5 p-2">
            DISMISS
          </button>
        </div>
      </div>

      <div className="border border-gray-300 p-5 rounded bg-white mt-4">
        <h2 className="font-medium text-base">
          Version: <span className="font-light">0.1.40(v1.11.6 upstream)</span>
        </h2>
        <div className="mt-2 flex flex-col justify-start items-start gap-2">
          <h3 className="flex justify-start items-center gap-3 text-blue-400">
            <BsInfoCircleFill className="w-5 h-5" />
            Homepage
          </h3>
          <h3 className="flex justify-start items-center gap-3 text-blue-400">
            <AiFillSetting className="w-5 h-5" />
            Querying API{" "}
            <small className="text-gray-800 hover:underline">
              http://geth.eriumnode:8545
            </small>
          </h3>
          <h3 className="flex justify-start items-center gap-3 text-blue-400">
            <AiFillSetting className="w-5 h-5" />
            Engine API{" "}
            <small className="text-gray-800 hover:underline">
              http://geth.eriumnode:8551
            </small>
          </h3>
          <h3 className="flex justify-start items-center gap-3 text-blue-400">
            <AiFillBug className="w-5 h-5" />
            Report
          </h3>
        </div>

        <div className="mt-8 w-full flex flex-row justify-start items-center gap-2">
          <div className="w-12 flex flex-col justify-start items-start">
            <label className="text-sm text-gray-500">Key</label>
            <span className="text-gray-800 h-10 py-2 mt-2">jwt</span>
          </div>
          <div className="w-full flex flex-col justify-start px-2 items-start">
            <label className="text-sm text-gray-500">Package Sent Value</label>
            <div className="w-full flex flex-row justify-center items-center">
              <input
                type="text"
                placeholder="2HXYDWva5ln68sgaZ0ycKHJ+mk5sJ6OPf1jhdB8cOps="
                className="text-gray-800 mt-2 outline-none rounded-l-md px-3 border border-gray-300 w-full h-10"
              />
              <span className="w-10 h-10 mt-2 rounded-r-md border p-2 border-gray-300">
                <HiOutlineClipboardCopy className="w-5 h-5" />
              </span>
            </div>
          </div>
        </div>

        <button className="border-none mt-3 text-sm text-gray-500">
          Delete all
        </button>

        <div className='mt-5'>
      <div className='flex flex-row h-12 mt-2 justify-between items-center'>
        <div className='flex flex-row justify-center gap-5 items-center'>
          <label className='text-sm w-20 text-left text-gray-500'>Status</label>
          <label className='text-sm w-20 text-left text-gray-500'>Name</label>
        </div>

        <div className='flex flex-row justify-center gap-5 items-center'>
          <label className='text-sm w-20 text-center text-gray-500'>Pause</label>
          <label className='text-sm w-20 text-center text-gray-500'>Restart</label>
        </div>
      </div>

        <div className="flex flex-row h-12 justify-between items-center">
          <div className="flex flex-row justify-center gap-5 items-center">
            <label
              className={`text-xs font-semibold bg-cyan-400 p-[0.125rem] rounded text-white w-20 text-center`}
            >
              RUNNING
            </label>
            <span className="text-base font-medium text-center text-gray-800">
              Geth
            </span>
          </div>

          <div className="flex flex-row justify-center gap-5 items-center">
            <label
              className="w-20 flex justify-center items-center"
              onClick={""}
            >
              <AiOutlinePauseCircle className="w-6 h-6 text-gray-500" />
            </label>
            <label className="w-20 flex justify-center items-center">
              <RiRestartLine className="w-6 h-6 text-gray-500" />
            </label>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
