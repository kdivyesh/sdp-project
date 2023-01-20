import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import mm from './images/mm.jpg'
export default function ActionAreaCard() {
  return (
    
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          
          image={mm}
          
          alt="blue iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           STUDENT ID
          </Typography>
          <Typography variant="body1" color="text.secondary">
          <b>Name:</b> k.divyesh<br/>
         <b>Id Number:</b>  210032169<br/>
         <b>Department: </b> CSE(H)<br/>
         <b>Address :</b>Tenali<br/>
         <b>status : </b> student <br/>
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
    
  );
}