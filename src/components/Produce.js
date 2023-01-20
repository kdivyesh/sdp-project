import React, { useState } from 'react';
import Right from './Right.js';
import Left from './Left.js';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
const App = () => {

    let [feedBack,setfeedBack]=useState([]);
    const navigate = useNavigate()
    return (
        <Card sx={{ maxWidth: 400 }}>
        <>
        <div className="section">
            <Left setfeedBack={setfeedBack}/>
            <Right feedBack={feedBack}/>
            </div>
        </>
        <Button   onClick={()=>{navigate("/Home")}}> Home</Button>
        </Card>
        
    )

};
export default App;