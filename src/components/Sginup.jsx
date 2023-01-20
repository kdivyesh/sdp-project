import React, { useState } from "react"
import axios from "axios"
import "./Register.css"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const Register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9009/Register", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
       <center className="form">
        <div className="register">
            {console.log("User", user)}
            <h1>User Registration</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={Register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/login")}>Login</div>
        </div>
       </center> 
    )
}

export default Register