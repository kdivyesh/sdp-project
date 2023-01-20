import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import home1 from  './images/home1.jpg'
import bul2s from  './images/bul2s.jpg'
import home2 from  './images/home2.jpg'

import { Switch } from '@mui/material';
import {useNavigate} from 'react-router-dom';
function UncontrolledExample() {
  let navigate =useNavigate();
  return (
    <Card>
     
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home1} width="1000" height="500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mortagage</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bul2s} width="1000" height="500"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home2} width="1000" height="500"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Pawnbrokerageloans</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card.Body>
    <div class="container text-center">
          <div class="row">
            <div class="col">
           
            <Button variant="secondary" size="lg" color="success"onClick = {()=>{navigate("/Mortage")}}>
        Mortgage
      </Button>
            </div>
            <div class="col">
            <Button variant="secondary" size="lg"  class= "btn btn-primary"onClick = {()=>{navigate("/Pawn")}}>
        pawnbrokerage loans
      </Button>
            </div>
            <div class="col">
            <Button   variant="secondary" size="lg" color="#841584" fontSize="10px" onClick = {()=>{navigate("/Feedback")}}>
        FeedBack
      </Button>
            </div>
          </div>
        </div>
    </Card.Body>
    
    </Card>
    
  );
  
           
            

}

export default UncontrolledExample;
