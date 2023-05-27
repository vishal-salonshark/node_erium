'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { signIn } from 'next-auth/react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Fill all fields!")
            return
        }

        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error == null) {
                router.push("/dashbord")
            } else {
                toast.error("Error occured while logging")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-[30rem]  h-[35rem] shadow-2xl shadow-gray-500 rounded-3xl'>
                <h2 className='w-full text-center mt-24 text-2xl font-semibold m-2'>Log In</h2>
                <form className='mt-10 w-4/5 mx-auto flex flex-col justify-center items-center' onSubmit={handleSubmit}>
                    <input type="email" className='w-80 h-12 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-500' placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className='w-80 h-12 mt-5 rounded-xl p-2 outline-none focus:outline-blue-400 focus:border-none border border-gray-500' placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button className='w-36 h-12 my-5 rounded-lg bg-blue-500 text-white text-lg font-medium'>Log in</button>
                    <Link className='w-50 h-auto p-2 text-center' href='/register'>
                        Don&apos;t have an account? <br /> <span className='mt-1 text-sm text-blue-600'>Register now.</span>
                    </Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login