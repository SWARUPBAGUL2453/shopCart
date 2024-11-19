import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" })

    const [showPassword, setShowPassword] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState(false)

    const [accountType, setAccountType] = useState("student")

    const navigate = useNavigate()

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value

        }))
    }
    function submitHandler(event){
        event.preventDefault()
        if(formData.password != formData.confirmPassword){
            toast.error("Password don't match")
            return
        }
        setIsLoggedIn(true)
        toast.success("Account Created")
        navigate("/")

    }
    return (
        <div>
            <div className='bg-richblack- p-1 gap-x-1 my-6 flex  rounded-full max-w-max '>

                {/* <button 
                onClick={() => setAccountType("student")}
                className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} >
                    Student
                </button>

                <button
                onClick={() => setAccountType("instructor")}
                className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}>
                    instructor
                </button> */}
            </div>
            <form onSubmit={submitHandler}>
                <div className='flex gap-x-4 mt-5'>
                    <label className='w-full'>
                        <p className='text-[0.9rem] leading-[1.3rem] text-richblack-5 mb-1'>
                            First Name 
                            <sup className='text-pink-800'>*</sup>
                        </p>

                        <input
                            required
                            type='text'
                            placeholder='Enter First Name'
                            onChange={changeHandler}
                            name='firstName'
                            value={formData.firstName}
                            className='border w-full rounded-[0.5rem] p-[12px] text-richblack-5'></input>

                    </label>
                    <label className='w-full'>
                        <p className=' text-[0.9rem] leading-[1.3rem] text-richblack-5 mb-1'>
                            Last Name 
                            <sup className='text-pink-800'>*</sup>
                        </p>

                        <input
                            required
                            type='text'
                            placeholder='Enter Last Name'
                            onChange={changeHandler}
                            name='lastName'
                            value={formData.lastName}
                            className='border w-full rounded-[0.5rem] p-[12px] text-richblack-5'></input>

                    </label>

                </div>
                <div className='mt-5'>
                    <label>
                        <p className='text-[0.9rem] leading-[1.3rem] text-richblack-5 mb-1'>
                            Email Address 
                            <sup className='text-pink-800'>*</sup>
                        </p>
                        <input
                            required
                            type='email'
                            placeholder='Enter Email Addresss'
                            name='email'
                            value={formData.email}
                            onChange={changeHandler}
                            className='border w-full rounded-[0.5rem] p-[12px] text-richblack-5'></input>


                    </label>
                </div>
                <div className='flex gap-x-4 mt-5'>
                    <label className='relative w-full'>
                        <p className='text-[0.9rem] leading-[1.3rem] text-richblack-5 mb-1'> 
                            Create Password 
                            <sup className='text-pink-800'>*</sup>
                        </p>
                        <input
                            required
                            placeholder='Enter Password'
                            value={formData.password}
                            type={showPassword ? ("text") : ("password")}
                            name='password'
                            onChange={changeHandler}
                            className='border w-full rounded-[0.5rem] p-[12px] text-richblack-5'></input>


                        <span 
                        className='absolute right-3 top-10'
                        onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>


                    </label>
                    <label className='relative w-full'>
                        <p className='text-[0.9rem] leading-[1.3rem] text-richblack-5 mb-1'>
                            Confirm Password 
                            <sup className='text-pink-800'>*</sup>
                        </p>
                        <input
                            required
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            type={confirmPassword ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            className='border w-full rounded-[0.5rem] p-[12px] text-richblack-5'></input>


                        <span 
                        className='absolute right-3 top-10'
                        onClick={() => setConfirmPassword((prev) => !prev)}>
                            {confirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>


                    </label>
                </div>
                <button className='w-full bg-yellow-400 font-medium text-richblack-900 px-[12] py-[8px] rounded-[8px] mt-6'>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm