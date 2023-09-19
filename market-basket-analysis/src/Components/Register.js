import axios from "axios"
import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function Register(){
    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const { REACT_APP_API_ENDPOINT } = process.env
    const submitForm = async ()=>{
        const response = await axios.post(`${REACT_APP_API_ENDPOINT}register/`,{
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "password":password
        })

        if(response.status == 200){
            return <Navigate to="/login/"></Navigate>
        }
    }
    return <div className='min-h-screen bg-[#b3e1ff] w-full flex items-center justify-center m-auto'>
    <div className='bg-white lg:w-[35%] shadow-md rounded-md border-[0.2px] p-10 m-2'>
        <h1 className='text-center w-full font-bold text-3xl mb-10'>Register</h1>
        <label>First Name</label>
        <input value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} placeholder='First Name' className='border-[0.2px] mb-5 mt-5 p-4 rounded-md w-full'/>
        <label>Last Name</label>
        <input value={lastname} onChange={(e)=>{setLastname(e.target.value)}} placeholder='Last Name' className='border-[0.2px] mb-5 mt-5 p-4 rounded-md w-full'/>
        <label>Email</label>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' className='border-[0.2px] mb-5 mt-5 p-4 rounded-md w-full'/>
        <label>Password</label>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' className='border-[0.2px] mt-5 p-4 rounded-md w-full'/>
        <button onClick={()=>{submitForm()}} className='bg-[#b3e1ff] text-white p-4 w-full rounded-md mt-5'>Register</button>
    </div>
</div>
}