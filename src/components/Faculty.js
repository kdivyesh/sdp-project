import React from 'react'
import f1 from './images/f1.jpg'
import fa2 from './images/fa2.jpg'
import fa3 from './images/fa3.jpg'
function Faculty() {
    const fact=[{ 
        "img":<img src={f1} width="150" height="150"/>, 
        "id":3216, 
        "name":"ravi", 
        "designation":"professor", 
        "qualification":"phd",
        "fixed":true 
    },
    {
      "img":<img src={fa2} width="150" height="150"/>, 
      "id":3276, 
      "name":"usha", 
      "designation":"professor", 
      "qualification":"phd",
      "fixed":false 
       
    },
  {
    "img":<img src={fa3} width="150" height="150"/>, 
        "id":3213, 
        "name":"ram", 
        "designation":"asisstant professor", 
        "qualification":"bsc phy",
        "fixed":true
  },
  ]
  return (
    <div>Faculty
 {fact.map((fa) => (<h6 key={fa.id}>{fa.img}<br/> idno:{fa.id}<br/><br/> name:{fa.name}<br/>designation:{fa.designation}<br/>qualification:{fa.qualification}<br/> 
    permenent: {fa.fixed
     ?"Yes" : "No"}</h6>))}
    </div>
  )

}
export default Faculty