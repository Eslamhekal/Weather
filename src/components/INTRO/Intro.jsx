import React, { useEffect, useRef } from 'react'
import style from "./Intro.css"
import Cr7 from "./man.png"
import { init } from 'ityped'

export default function Intro() {

let textref=useRef()

useEffect(()=>{
  init(textref.current,
     { showCursor: false,
      backDelay:  1500,
      backSpeed:  50,
      showCursor: true,

       strings: ['Developer', 'Designer!' ,"content creator" ] })

})
  return (
    <>

    <div className='introoo'>
    
    <div className='rightIntro'>
<div className='imageIntro'>
<img src={Cr7}/>

</div>
    </div>
    <div className='LeftIntro mb-5'>
    <h2>Hi there, i am</h2>
    <h1>safak kocaoglu</h1>
    <h3>freelancer <span ref={textref}></span></h3>

    <></>
    </div>

    </div>
  
    </>
  )
}
