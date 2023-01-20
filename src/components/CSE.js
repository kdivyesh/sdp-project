import c from './images/c.jpg';
import React from 'react'

import { Box } from '@mui/material';
function CSE() {
  return (
       <Box
      sx={{
        width: 1000,
        height: 100,
        alignContent:'center',
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <div>
        <img  src={c} width="100%" height="600" alt=""  />
       <h1> <center>Computer Science Department</center></h1>
       
        <p>Department of Computer Science & Engineering offers undergraduate, post graduate and Doctoral programs with a flexible and industry curriculum and innovative pedagogy that is very dynamic in capturing the latest trends in the industry and the job market. The emphasis will be on making the student ready to be fit for the immediate industry needs.</p>
                                                   <h3><center>hod: Hari Kiran Veg</center></h3> 
          <h4> programsOffered:</h4> 
     <ul>
       <li >B. Tech in Computer Science & Engineering.</li>
       <li> B.Tech (Hons) Computer Science & Engineering.</li>
       <li> B.Tech Computer Science & Engineering (Specialization).</li>
       <li>B. Tech Computer Science & Engineering (Minor in other branch).</li>
       <li> M.Tech in Computer Science & Engineering.</li>
        <li>M.Tech in Digital Forensics & Cyber Security (DF&CS).</li>
        <li>M.Tech in Artificial Intelligence & Data Science( AI&DS ).</li>
        <li> Ph D in Computer Science & Engineering.</li>
        </ul>
       

    </div>
    </Box>
  )
}

export default CSE

{/*export const Cse = [
    {
      uuid: 1,
      displayName: "Computer Science Department",
      imageUrl: "images/c.jpg",
      description:
        "Department of Computer Science & Engineering offers undergraduate, post graduate and Doctoral programs with a flexible and industry curriculum and innovative pedagogy that is very dynamic in capturing the latest trends in the industry and the job market. The emphasis will be on making the student ready to be fit for the immediate industry needs",
      programsOffered: [
        "B. Tech in Computer Science & Engineering",
        "B.Tech (Hons) Computer Science & Engineering.",
        "B.Tech Computer Science & Engineering (Specialization)",
        "B. Tech Computer Science & Engineering (Minor in other branch)",
        "M.Tech in Computer Science & Engineering",
        "M.Tech in Digital Forensics & Cyber Security (DF&CS)",
        "M.Tech in Artificial Intelligence & Data Science( AI&DS )",
        "Ph D in Computer Science & Engineering",
      ],
      hod: "Hari Kiran Veg",
    }
]*/}