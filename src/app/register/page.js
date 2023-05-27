'use client'

import React, { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import randomstring from 'randomstring';
import { useRouter } from 'next/router';
// import axios from 'axios';

const Register = () => {
  
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [recoveryCode, setRecoveryCode] = useState("")

  useEffect(() => {
    const rc = randomstring.generate({
      length: 32,
    });
    setRecoveryCode(rc)
  }, [])

  console.log(recoveryCode)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username === '' || email === '' || password === '' || recoveryCode === '') {
      toast.error("Fill all fields")
      return
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
    }


    try {
      const res = await fetch('http://localhost:3000/api/register', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ username, email, password, recoveryCode })
      })

      console.log(await res.json())
      if (res.ok) {
        toast.success("Successfully registered the user")
        setTimeout(() => {
          signIn()
        }, 1500)
        return
      } else {
        toast.error("Error occured while registering")
        return
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <div className='w-[30rem]  h-[35rem] shadow-2xl shadow-gray-500 rounded-3xl'>
        <h2 className='w-full text-center mt-24 text-2xl font-semibold m-2'>Register</h2>
        <form className='mt-10 w-4/5  mx-auto flex flex-col justify-center items-center' onSubmit={handleSubmit}>
          <input type="text" className='w-80 h-12 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-500' placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
          <input type="email" className='w-80 h-12 mt-5 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-500' placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className='w-80 h-12 mt-5 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-500' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
          <div className=' w-4/5  gap-4 flex justify-between items-center'>
          <button  className='w-36 h-12 my-5 rounded-lg bg-blue-500 text-white text-lg font-medium' >Register</button>
          <button type='reset' className='w-36 h-12 my-5 rounded-lg border border-blue-500 text-blue-500 text-lg font-medium'> Reset </button>
          </div>
          {/* <button className={''} onClick={() => signIn()}>
                        Don&apos;t have an account? <br /> Register now.
                    </button> */}
        </form>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register