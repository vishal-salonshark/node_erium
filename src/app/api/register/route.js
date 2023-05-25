import dbConnect from '@/database/dbConnect'
import bcrypt from 'bcrypt'
import User from '@/models/User'

export async function POST(req){
    try {
        await dbConnect.connect()

        const {username, email, password: pass, recoveryString} = await req.json()

        const isEmailExisting = await User.findOne({email})
        const isUserNameExisting = await User.findOne({username})



        if(isEmailExisting){
            throw new Error("Email already exists")
        }

        if(isUserNameExisting){
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await User.create({username, email, password: hashedPassword, recoveryString})

        const {password, ...user} = newUser._doc

        return new Response(JSON.stringify(user), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}