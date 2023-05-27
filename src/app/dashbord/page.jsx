'use client'
import Navbar from "@/components/Navbar"
import { useSession, signIn, signOut } from "next-auth/react"
import {BiUser, BiCube} from 'react-icons/bi'
import {IoMdNotificationsOutline} from 'react-icons/io'

export default function Component() {
  const { data: session } = useSession()
  if(session) {
    return <div className="w-screen max-h-screen flex justify-start items-start">
    <Navbar/>
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full h-12 flex justify-end items-center bg-white shadow-md shadow-gray-400">
        <div className="w-96 h-10 m-1 flex justify-end items-center p-5">
        <div className="w-8 h-8 rounded-full border-2 border-gray-500"></div>
        <BiCube className="w-5 h-5 mx-2"/>
        <IoMdNotificationsOutline className="w-5 h-5 mx-2"/>
        <BiUser className="w-5 h-5 mx-2"/>
        </div>
      </div>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
    </div>
  }
}