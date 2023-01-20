import React from 'react'
import {Button} from '@mui/material'
import axious from "axios";
import {useState} from 'react'

function Quote() {

    const [quote,setQuote]=useState('')
    const getQuote=()=>{
        axious.get('https://api.quotable.io/random')
        .then(res=>{
            setQuote(res.data.content)
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
      <Button variant="contained"
      colour="secondary"
      onClick={getQuote}> Generate Quote</Button>
      <p>{quote}</p>

    </div>
  )
}

export default Quote