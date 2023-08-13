import React, { useState } from 'react'
import "./ContactUs.css"
import hand from "./HAND.jpeg"

export default function ContactUs() {
const [data, setdata] = useState(null)
const [print, setprint] = useState(false)

function changeprint(val) {
  setdata(val.target.value)
  }
  return (
    <div className='ContactUs'>
    <div className='left'>
    <img src={hand}/>
    </div>
    <div className='right'>
 <input placeholder='what do you want' onChange={changeprint} className='my-3' type="text"/>
 <textarea onChange={changeprint}  className='my-3' name="" id=""  rows="10"></textarea> 
<button onClick={()=>setprint(true)} type='submit'>send</button> 
{print?<h2 className='txc'>{data}</h2>:""}

    </div>
    </div>
  )

}
