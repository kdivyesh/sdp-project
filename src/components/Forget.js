import React, { useState } from "react"
import axios from "axios"
import "./Register.css"
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"
function Forget() {
    const navigate = useNavigate()
  return (
    <Card  style={{ width: '40rem' ,height:'20rem'}}>
    <Card.Body>
        <Card.Title>Re submission</Card.Title>
        <div>
      <input type="password" name="password" placeholder="Enter Password" ></input>
            <input type="password" name="reEnterPassword"  placeholder="Re-enter Password" ></input>
            <button onClick={() => navigate("/login")}>Login</button>
    </div>
      </Card.Body>
    </Card>
  )
}

export default Forget
