import React from 'react'
import style from "./menu.css"
export default function Menu({menuopen,setmenuopen}) {




  return (
    <div className={"MenuList "+(menuopen&&"active")}>
    <ul className='menunav '>
    <li onClick={()=>setmenuopen(false)}>
    
    <a href='#intro'>intro</a>
    </li>


    <li onClick={()=>setmenuopen(false)}>
    
    <a href='#portfolio'>portfolio</a>
    </li>


    <li onClick={()=>setmenuopen(false)}>
    
    <a href='#works'>works</a>

    </li>


    <li onClick={()=>setmenuopen(false)}>
    
    <a href='#testmonial'>testmonial</a>

    </li>


    <li onClick={()=>setmenuopen(false)}>
    
    <a href='#contact'>contact</a>

    </li>



    </ul>
    </div>
  )
}
