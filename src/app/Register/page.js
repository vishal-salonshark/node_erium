'use client'

import React, { useEffect, useState } from 'react'
import { signIn } from 'next-auth/react'
import { ToastContainer, toast } from 'react-toastify'
import randomstring from 'randomstring';
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

      // const res = await axios.post('http://localhost:3000/api/register', {
      //   username,
      //   email,
      //   password,
      //   recoveryCode
      // }, {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });

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
    <div className={''}>
      <div className={''}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
          <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
          <button className={''}>Register</button>
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