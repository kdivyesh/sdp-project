import React from 'react'
import ia1 from './images/ia1.jpg'
import ia2 from './images/ia2.jpg'
import ia3 from './images/ia3.jpg'
function Departments() {
    const dep=[{ 
        "logo":<img src={ia1} width="150" height="150"/>, 
        "dname":"cse", 
        "ftotal":"1200", 
        "NBA":true 
    },
    {
        "logo":<img src={ia2} width="150" height="150"/>, 
        "dname":"ese", 
        "ftotal":"1000", 
        "NBA":true 
       
    },
  {
    "logo":<img src={ia3} width="150" height="150"/>, 
        "dname":"mec", 
        "ftotal":"200", 
        "NBA":false
  },
  ]
  return (
    <div>departments
 {dep.map((d) => (<h6 key={d.id}>{d.logo}<br/>department:{d.dname}<br/><br/>total faculty:{d.ftotal}<br/>NBA: {d.NBA  ?"Yes" : "No"}</h6>))}
</div>
  )
    }


export default Departments