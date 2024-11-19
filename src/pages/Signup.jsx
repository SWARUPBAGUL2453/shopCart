import React from 'react'
// import signupImg from "../assets/signup.png"
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title="Welcome Back"
    desc1="Shop for today, tomorrow and beyond."
    desc2="From Fashion to Functionality, Find It All Here!"
    // image={signupImg}
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    ></Template>
  )
}

export default Signup