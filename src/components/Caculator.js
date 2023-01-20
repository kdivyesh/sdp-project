import React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
function Calculator() {
  let navigate = useNavigate();
    const [input,setInput]=useState("");
    const [result,setResult]=useState(0);
    const handler = e=>{
        setInput(e.target.value)
    }
  return (
  
    
    <Box
    
      sx={{
        width: 300,
        height: 200,
        display: 'flex',
        flexWrap: 'wrap',
        
        '& > :not(style)': {
          m: 1,
         
          backgroundColor: 'orange',
          
        },
      }}
    >
    <div 
       >
      
   
       

        <input type="text" value={input} name="input" onChange={handler}/>
        
        <br/>
        <button onClick={()=>setResult(eval(input))}>Result</button>
        <h4>Result is:{result}</h4>
        <button onClick={() => setInput(input+'1')}>1</button>
        <button onClick={() => setInput(input+'2')}>2</button>
        <button onClick={() => setInput(input+'3')}>3</button>
        <button onClick={() => setInput(input+'4')}>4</button>
        <button onClick={() => setInput(input+'5')}>5</button><br />
        
        <button onClick={() => setInput(input+'6')}>6</button>
        <button onClick={() => setInput(input+'7')}>7</button>
        <button onClick={() => setInput(input+'8')}>8</button>
        <button onClick={() => setInput(input+'9')}>9</button>
        <button onClick={() => setInput(input+'0')}>0</button><br />

        <button onClick={() => setInput(input+'+')}>+</button>
        <button onClick={() => setInput(input+'-')}>-</button>
        <button onClick={() => setInput(input+'*')}>*</button>
        <button onClick={() => setInput(input+'/')}>/</button>
        <button onClick={() => {setInput('');setResult(0)}}>clr</button><br /> 
       
    <button onClick={()=>{navigate("/Departments")}}>click</button>
    
    </div>
   
    </Box>
  

  )
}

export default Calculator