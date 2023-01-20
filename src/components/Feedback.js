import React, { useState } from 'react';
import RightBox from './RightBox.js';
import LeftBox from './LeftBox.js';
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom"

import Button from '@mui/material/Button';
import home2 from  './images/home2.jpg'
const App = () => {

    let [feedBack,setfeedBack]=useState([]);
    const navigate = useNavigate()
    return (
        <Card sx={{ maxWidth: 400 }}>
           
        <>
        <div className="section" style={{backgroundColor: "#b2bec2"}}>
            <LeftBox setfeedBack={setfeedBack}/>
            <RightBox feedBack={feedBack}/>
            </div>
        </>
        <Button style={{backgroundColor: "#b2bec2"}} onClick={()=>{navigate("/Home")}}> Home</Button>
        </Card>
        
    )

};
export default App;