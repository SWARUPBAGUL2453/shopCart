import React from 'react'
import Template from '../components/Template'
// import loginImg from "../logo-removebg1.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
    title={"Welcome Back"}
    desc1={"Shop for today, tomorrow and beyond."}
    desc2={"From Fashion to Functionality, Find It All Here!"}
    // image={loginImg}
    // formType={"login"}
    setIsLoggedIn={setIsLoggedIn}
    ></Template>
  )
}

export default Login