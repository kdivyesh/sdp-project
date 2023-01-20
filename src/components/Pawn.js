import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import cal from  './images/cal.jpg'
import lo from  './images/lo.jpg'
import pawn3s from './images/pawn3s.jpg'
function Pawn() {
    let navigate =useNavigate();
    const isBackgroundRed = true;
  return (
  <div>
    <Card style={{
      backgroundColor: isBackgroundRed ? 'lavender' : 'blue'
    }}>
    <div class="container text-center">
          <div class="row">
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={pawn3s}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pawn Shops
        </Typography>
        <Typography variant="body2" color="text.secondary">
          contact your nearby pawn shops for loans and any other details
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">save your money</Button>
        
      </CardActions>
    </Card>

            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={lo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Take a Private Loan
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Enter the details properly to apply loan which is most preferable to you
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"onClick={()=>{navigate("/Produce")}} >loan</Button>
        
      </CardActions>
    </Card>
            </div>
            <div class="col">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        src={cal}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Calculator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        By using this calculator we can calculate the interest for the loan
        </Typography>
      </CardContent>
      <CardActions>
        <Button  onClick={()=>{navigate("/Loapp")}}size="small" >Loan calculator</Button>
        
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

export default Pawn
