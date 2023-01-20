import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import Housesell from  './images/Housesell.jpg'
import  { useState } from "react";
import Rating from '@mui/material/Rating';
import h1 from  './images/h1.jpg'
import h2 from  './images/h2.jpg'
import h3 from  './images/h3.jpg'
import h4 from  './images/h4.jpg'
import h5 from  './images/h5.jpg'
import h6 from  './images/h6.jpg'
import h7 from  './images/h7.jpg'
import h8 from  './images/h8.jpg'
import h9 from  './images/h9.jpg'
function Buy() {
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
        src={h1}
        
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
        
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h2}
        
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
        
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h3}
        
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
        
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
            <div class="row mt-5"  >
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h4}
        
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
    
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>

            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h5}
        
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
  
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h6}
        
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
    
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
            </div>

            <div class="row mt-5">
              <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h7}
        
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
        
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h8}
        
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
       
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={h9}
        
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
        
        <Button  onClick size="small">Buy</Button>
        <Button  onClick={()=>{navigate("/Appp")}} size="small">Mortage calculator</Button>
        <Rating name="size-medium" defaultValue={2} />
      </CardActions>
    </Card>
            </div>
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
          
          </div>
        </div>
        </CardActions>
        </Card>
        </div>
  )
}

export default Buy
