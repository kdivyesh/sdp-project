import React,{useState} from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useNavigate } from "react-router-dom";
import axios from "axios"
import styled from 'styled-components';
export default function Left  ( {setfeedBack} ) {
    const navigate = useNavigate()
    const Button = styled.button`
  /* Insert your favorite CSS code to style a button */
`;


 
  
  
    const [ fuser, setUser] = useState({
        fname:"",
        lname:"",
        review:""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...fuser,
            [name]: value
        })
    }
    const Submit = () => {
        const { fname, lname, review} = fuser
        if( fname && lname && review){
            axios.post("http://localhost:9009/Submit", fuser)
            .then( res => {
                alert(res.data.message)
                navigate("/Home")
            })
        } else {
            alert("invlid input")
        }
    }
    return (
        
            <div className="firstbox">
                <br /><br />
            First Name <br /><br />
                <input
                    name="fname"
                    type="text"
                    value={fuser.fname}
                    placeholder="Enter your first name here"
                    onChange={handleChange}/>


                <br/><br />


               

            Last Name  <br /><br />
                <input
                    name="lname"
                    type="text"
                    value={fuser.lname}
                    placeholder="Enter your last name here"
                    onChange={handleChange}
                />
                <br /><br />

            Amount  <br /><br />
                <input
                    name="review"
                    type="text"
                    minRows={5} 
                    value={fuser.review}
                    style={{ width: 300 }}
                    placeholder="Tell us your thoughts here"
                    onChange={handleChange}
                />
                <br /><br />
                
                
                <br /><br/>

                <button onClick={Submit}
                          
                                        

                 >ADD MY SUGGESTION</button>
                   
                    
            </div>
        
    )

 }
