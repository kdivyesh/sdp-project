
import './App.css';
import Users from './components/Users';
import "./index.css"
import Moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import {  Routes,Route } from 'react-router';
import Nav from './components/Nav';
import Home from './components/Home';
import Button from '@mui/material/Button';
import { useEffect,useState } from 'react';
import Fotter from './components/Fotter'
import Sginup from './components/Sginup'
import Login from './components/Login'
import Loapp from './Loapp'
import Helmet from 'react-helmet';
import Setpass from './components/Setpass'
import {useNavigate} from 'react-router-dom';
import Mortage from './components/Mortage';
import Buy from './components/Buy';
import Pawn from './components/Pawn';
import Appp from './Appp';
import Forget from './components/Forget';
import Feedback from './components/Feedback';
import Dummy from './Dummy';
import Logout from './components/Logout'
import Produce from './components/Produce';
import burt from './components/images/burt.jpg'
function App() {
  const [ user, setLoginUser] = useState({})

  let navigate =useNavigate();
  const isBackgroundRed = true;

  return (
   
    <div className="main"
    style={{
      backgroundColor: isBackgroundRed ? 'lavender' : 'blue'
    }}
    >
     
      


   <Nav/>
   <Dummy/>
    <center>
       <Routes>
       
       <Route  path='/' element={user && user._id ?   <Home setLoginUser={setLoginUser} /> 
       : <Login setLoginUser={setLoginUser}/> }/>
      <Route path="/Home" element={<Home/>}/>
    <Route path ="/Mortage" element={<Mortage/>}/>
    <Route path ="/Setpass" element={<Setpass/>}/>
   <Route path ="/Pawn" element ={<Pawn/>}/>
    <Route path="/Sginup" element={<Sginup/>}/>
    <Route path='/Login' element= {<Login setLoginUser={setLoginUser}/>}/>
    <Route path="/Appp" element={<Appp/>}/>
    <Route path="/Loapp" element={<Loapp/>}/>
    <Route path="/Logout" element={Logout}/>
    <Route path="/Buy" element={<Buy/>}/>
    <Route path="/Feedback" element={<Feedback/>}/>
    <Route path="/Produce" element={<Produce/>}/>
    <Route path="/Forget" element={<Forget/>}/>
  </Routes>
<Fotter/>
  </center>
   
    </div>
    
  );
}


export default App;
