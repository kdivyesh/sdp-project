import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import Housesell from  './images/Housesell.jpg'
import sell from  './images/sell.jpg'
import call from './images/call.jpg'


function Mortage() {
    let navigate =useNavigate();
    const isBackgroundRed = true;
  return (
    <div style={{
      backgroundColor: isBackgroundRed ? 'lavender' : 'blue'
    }}>
   <Card>
    <div class="container text-center">
          <div class="row mt-5" >
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={Housesell}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        BUY
        </Typography>
        <Typography variant="body2" color="text.secondary">
        By using this calculator we can calculate the loan amount for a specific purchase of house
    
        </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick = {()=>{navigate("/Buy")}}size="small">Buy house</Button>
     
      </CardActions>
    </Card>

            </div>
            <div class="col"style={{
      backgroundColor: isBackgroundRed ? 'lavender' : 'blue'
    }}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={sell}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Refinance
        </Typography>
        <Typography variant="body2" color="text.secondary">
        By using this calculator we can calculate the loan amount for a specific purchase of house
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sell house</Button>
     
      </CardActions>
    </Card>
            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={call}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Calculator
        </Typography>
        <Typography variant="body2" color="text.secondary">
          By using this calculator we can calculate the loan amount for a specific purchase of house
        </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        
      </CardActions>
    </Card>
            </div>
          </div>
        </div>
        <CardActions>
        <div class="container text-center">
          <div class="row">
            <div class="col">
           
            <Button variant="contained" color="success"onClick = {()=>{navigate("/Mortage")}}>
        Mortagage
      </Button>
            </div>
            <div class="col">
            <Button variant="contained" color="success"onClick = {()=>{navigate("/Pawn")}}>
        pawnbrokerage loans
      </Button>
            </div>
            <div class="col">
            <Button variant="contained" color="success"onClick = {()=>{navigate("/Home")}}>
        Home
      </Button>
            </div>
          
          </div>
        </div>
        </CardActions>
        </Card>
        
        </div>
  )
}

export default Mortage
