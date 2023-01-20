import React, {useState} from "react"
import axios from "axios"
import "./Login.css"
import { useNavigate } from "react-router-dom"


const Login = ({ setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Login = () => {
        axios.post("http://localhost:9009/Login",user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            navigate("/")
        })
    }

    return (
       <center className="form">
        <div className="login">
           
           <h1>LOGIN_FORM</h1>
           <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
           <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
           <button onClick={() => navigate("/Forget")}>forget password</button>
           <div className="button" onClick={Login}>Login</div>
           <div>or</div>
           <div className="button" onClick={() => navigate("/Sginup")}>Register</div>
           
       </div>
       </center> 
    )
}

export default Login