import React from 'react';

const Right=({feedBack})=>
{
    return(
        <>
       
            <div className="secondbox">
            
                {feedBack.map((d)=>{
                return (
                    <>
                        <br/>
                        <div className="feed">
                        <h3>{d.firstname}  {d.lastname}  {d.post}</h3>
                        </div>
                    
                    </>
                );})}
            </div>

        
        </>
    )
};
export default Right;