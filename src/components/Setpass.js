import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import {useState,useEffect} from 'react';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
function Setpass() {
  const [userMail,setMail]=useState("");
  const [userPassword,setPassword]=useState("");
  const [userList,setUserList]=useState([]);
  const updatePassword=(id)=>{
    axios.put("/upuser",{id:id,upPassword:userPassword,});
  }
  return (
    <div>
       
       
       


       {userList.map((val,key)=>{
  return <div key={key} class="user">
    <h1>{val.email}</h1>
    <h1>{val.password}</h1>
    <input type="text" onChange={(event)=>setPassword(event.target.value)} placeholder='Enter New Password'/>&nbsp;
  <button onClick={()=>updatePassword(val._id)}>change password</button><br/>
  
  </div>
  })}
  
    </div>
  )
}

export default Setpass

